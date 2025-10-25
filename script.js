// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeHeader();
  initializeSidebar();
  initializeBreadcrumbs();
  initializeContent();
  initializeTableOfContents();
  initializeSidebarToggle();
});

// Initialize header navigation
function initializeHeader() {
  const headerNavElement = document.getElementById("headerNav");

  headerNavElement.innerHTML = headerNav
    .map((item) => `<a href="${item.link}">${item.title}</a>`)
    .join("");
}

// Initialize sidebar navigation
function initializeSidebar() {
  const sidebarNav = document.getElementById("sidebarNav");

  sidebarNav.innerHTML = navigationData.sections
    .map(
      (section) => `
        <div class="nav-section ${
          section.expanded ? "expanded" : ""
        }" data-section-id="${section.id}">
            <div class="nav-section-title">
                <svg class="nav-section-icon" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>${section.title}</span>
            </div>
            ${
              section.items.length > 0
                ? `
                <div class="nav-items">
                    ${section.items
                      .map(
                        (item) => `
                        <a href="#${item.id}" class="nav-item ${
                          item.active ? "active" : ""
                        }" data-item-id="${item.id}">
                            ${item.title}
                        </a>
                    `
                      )
                      .join("")}
                </div>
            `
                : ""
            }
        </div>
    `
    )
    .join("");

  // Add click handlers for expandable sections
  document.querySelectorAll(".nav-section-title").forEach((title) => {
    title.addEventListener("click", function () {
      const section = this.parentElement;
      section.classList.toggle("expanded");
    });
  });

  // Add click handlers for navigation items
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all items
      document.querySelectorAll(".nav-item").forEach((navItem) => {
        navItem.classList.remove("active");
      });

      // Add active class to clicked item
      this.classList.add("active");
    });
  });
}

// Initialize breadcrumbs
function initializeBreadcrumbs() {
  const breadcrumbsContainer = document.getElementById("breadcrumbs");

  breadcrumbsContainer.innerHTML = pageContent.breadcrumbs
    .map((crumb, index) => {
      const isLast = index === pageContent.breadcrumbs.length - 1;
      return `
            ${index > 0 ? '<span class="breadcrumb-separator">/</span>' : ""}
            ${
              isLast
                ? `<span>${crumb.title}</span>`
                : `<a href="${crumb.link}" class="breadcrumb-link">${crumb.title}</a>`
            }
        `;
    })
    .join("");
}

// Initialize main content
function initializeContent() {
  const articleTitle = document.getElementById("articleTitle");
  const articleDescription = document.getElementById("articleDescription");
  const articleContent = document.getElementById("articleContent");

  articleTitle.textContent = pageContent.title;
  articleDescription.textContent = pageContent.description;

  articleContent.innerHTML = pageContent.sections
    .map((section) => {
      switch (section.type) {
        case "info-box":
          return `
                    <div class="info-box">
                        <svg class="info-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <div class="info-content">
                            <h3>${section.title}</h3>
                            <p>${section.content}</p>
                        </div>
                    </div>
                `;
        case "text":
          return `<div class="text-content"><p>${section.content}</p></div>`;
        case "image":
          return `
                    <div class="content-image">
                        <img src="${section.src}" alt="${section.alt}" onerror="this.parentElement.innerHTML='<div style=\'padding:100px;text-align:center;background:#f4f5f7;color:#6b778c;\'>Image placeholder: ${section.alt}</div>'">
                    </div>
                `;
        default:
          return "";
      }
    })
    .join("");
}

// Initialize table of contents
function initializeTableOfContents() {
  const tocNav = document.getElementById("tocNav");

  tocNav.innerHTML = pageContent.tableOfContents
    .map(
      (item, index) => `
        <a href="${item.anchor}" class="toc-link ${
        index === 0 ? "active" : ""
      }" data-anchor="${item.anchor}">
            ${item.title}
        </a>
    `
    )
    .join("");

  // Add smooth scrolling and active state handling
  document.querySelectorAll(".toc-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      document.querySelectorAll(".toc-link").forEach((tocLink) => {
        tocLink.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");

      // Smooth scroll to section (if it exists)
      const anchor = this.getAttribute("data-anchor");
      const targetElement = document.querySelector(anchor);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Initialize sidebar toggle for mobile
function initializeSidebarToggle() {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove("open");
      }
    }
  });
}

// Scroll spy for table of contents
let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      updateActiveLink();
      ticking = false;
    });
    ticking = true;
  }
});

function updateActiveLink() {
  const tocLinks = document.querySelectorAll(".toc-link");
  let activeSet = false;

  tocLinks.forEach((link) => {
    const anchor = link.getAttribute("data-anchor");
    const section = document.querySelector(anchor);

    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2 && !activeSet) {
        tocLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        activeSet = true;
      }
    }
  });
}
