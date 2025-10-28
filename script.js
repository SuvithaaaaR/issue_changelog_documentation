// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing page...");
  console.log("headerNav data:", headerNav);
  console.log("navigationData:", navigationData);
  console.log("sectionContents:", sectionContents);

  try {
    initializeHeader();
    initializeSidebar();
    // Load initial content (first section)
    loadSectionContent("app-overview");
    initializeSidebarToggle();
    createBackToTopButton();
    initializeScrollProgress();
    initializeKeyboardNavigation();
    addSearchFunctionality();
    console.log("Page initialized successfully!");
  } catch (error) {
    console.error("Error initializing page:", error);
  }
});

// Load content for a specific section
function loadSectionContent(sectionId) {
  const content = sectionContents[sectionId];
  if (!content) {
    console.error("No content found for section:", sectionId);
    return;
  }

  // Update breadcrumbs
  const breadcrumbsContainer = document.getElementById("breadcrumbs");
  breadcrumbsContainer.innerHTML = content.breadcrumbs
    .map((crumb, index) => {
      const isLast = index === content.breadcrumbs.length - 1;
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

  // Update title and description
  document.getElementById("articleTitle").textContent = content.title;
  document.getElementById("articleDescription").textContent =
    content.description;

  // Update main content
  const articleContent = document.getElementById("articleContent");
  articleContent.innerHTML = content.sections
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
        case "warning-box":
          return `
            <div class="warning-box">
              <svg class="warning-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 20h20L12 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <div class="warning-content">
                <h3>${section.title}</h3>
                <p>${section.content}</p>
              </div>
            </div>
          `;
        case "heading":
          const headingId = section.content
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
          return `<h${section.level} class="content-heading" id="${headingId}">${section.content}</h${section.level}>`;
        case "text":
          return `<div class="text-content"><p>${section.content}</p></div>`;
        case "list":
          return `
            <ul class="content-list">
              ${section.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          `;
        case "image":
          return `
            <div class="content-image">
              <img src="${section.src}" alt="${section.alt}" onerror="this.parentElement.innerHTML='<div style=\\'padding:100px;text-align:center;background:#f4f5f7;color:#6b778c;\\'>Image placeholder: ${section.alt}</div>'">
            </div>
          `;
        default:
          return "";
      }
    })
    .join("");

  // Update table of contents
  const tocNav = document.getElementById("tocNav");
  tocNav.innerHTML = content.tableOfContents
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

  // Re-attach TOC event listeners
  document.querySelectorAll(".toc-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      document.querySelectorAll(".toc-link").forEach((tocLink) => {
        tocLink.classList.remove("active");
      });

      // Add active class to clicked link
      this.classList.add("active");

      // Scroll to the target heading
      const anchor = this.getAttribute("data-anchor");
      const targetElement = document.querySelector(anchor);

      if (targetElement) {
        const headerHeight = 64; // Height of fixed header
        const offset = 20; // Extra offset for spacing
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
} // Initialize header navigation
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
            <div class="nav-section-title" data-section-id="${section.id}">
                <svg class="nav-section-icon" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="nav-section-text">${section.title}</span>
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
    const icon = title.querySelector(".nav-section-icon");
    const text = title.querySelector(".nav-section-text");

    // Arrow click - only toggle expansion
    icon.addEventListener("click", function (e) {
      e.stopPropagation();
      const section = title.parentElement;
      section.classList.toggle("expanded");
    });

    // Title text click - load content and expand
    text.addEventListener("click", function (e) {
      e.stopPropagation();
      const section = title.parentElement;
      const sectionId = section.getAttribute("data-section-id");

      // Expand the section if not already expanded
      if (!section.classList.contains("expanded")) {
        section.classList.add("expanded");
      }

      // Load content for this section
      if (sectionContents[sectionId]) {
        loadSectionContent(sectionId);

        // Update active state
        document.querySelectorAll(".nav-section-title").forEach((t) => {
          t.classList.remove("active-section");
        });
        title.classList.add("active-section");
      }
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

// Create back-to-top button
function createBackToTopButton() {
  const button = document.createElement("button");
  button.id = "backToTop";
  button.innerHTML = "↑";
  button.setAttribute("aria-label", "Back to top");
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    box-shadow: 0 4px 12px rgba(0, 82, 204, 0.3);
    z-index: 1000;
  `;

  document.body.appendChild(button);

  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      button.style.opacity = "1";
      button.style.visibility = "visible";
    } else {
      button.style.opacity = "0";
      button.style.visibility = "hidden";
    }
  });

  // Scroll to top on click
  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hover effect
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
    this.style.boxShadow = "0 6px 16px rgba(0, 82, 204, 0.4)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 4px 12px rgba(0, 82, 204, 0.3)";
  });
}

// Initialize scroll progress indicator
function initializeScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.id = "scrollProgress";
  progressBar.style.cssText = `
    position: fixed;
    top: 64px;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(to right, var(--primary-color), #4C9AFF);
    z-index: 1001;
    transition: width 0.1s ease-out;
  `;

  document.body.appendChild(progressBar);

  window.addEventListener("scroll", function () {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  });
}

// Add copy button to code blocks (if any are added later)
function addCopyButtons() {
  document.querySelectorAll("pre code").forEach((block) => {
    const button = document.createElement("button");
    button.className = "copy-code-btn";
    button.textContent = "Copy";
    button.onclick = function () {
      navigator.clipboard.writeText(block.textContent);
      button.textContent = "Copied!";
      setTimeout(() => (button.textContent = "Copy"), 2000);
    };
    block.parentElement.style.position = "relative";
    block.parentElement.appendChild(button);
  });
}

// Keyboard navigation
function initializeKeyboardNavigation() {
  document.addEventListener("keydown", function (e) {
    // Press '/' to open search
    if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
      const searchModal = document.getElementById("searchModal");
      const searchInput = document.getElementById("searchInput");
      if (searchModal && !searchModal.classList.contains("active")) {
        e.preventDefault();
        openSearchModal();
      }
    }

    // Press ESC to close search or sidebar
    if (e.key === "Escape") {
      const searchModal = document.getElementById("searchModal");
      if (searchModal && searchModal.classList.contains("active")) {
        closeSearchModal();
        return;
      }

      const sidebar = document.querySelector(".sidebar");
      if (sidebar && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
      }
    }

    // Alt + Arrow Up: Scroll to top
    if (e.altKey && e.key === "ArrowUp") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Alt + Arrow Down: Scroll to bottom
    if (e.altKey && e.key === "ArrowDown") {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  });
}

// Open search modal
function openSearchModal() {
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  searchModal.classList.add("active");
  setTimeout(() => searchInput.focus(), 100);
}

// Close search modal
function closeSearchModal() {
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  searchModal.classList.remove("active");
  searchInput.value = "";
  document.getElementById("searchResults").innerHTML =
    '<div class="search-hint">Start typing to search across all sections...</div>';
}

// Add search highlighting functionality
function addSearchFunctionality() {
  const searchBtn = document.querySelector(".search-btn");
  const searchModal = document.getElementById("searchModal");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");

  // Open modal on search button click
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      openSearchModal();
    });
  }

  // Close modal on close button click
  if (searchClose) {
    searchClose.addEventListener("click", function () {
      closeSearchModal();
    });
  }

  // Close modal when clicking outside
  if (searchModal) {
    searchModal.addEventListener("click", function (e) {
      if (e.target === searchModal) {
        closeSearchModal();
      }
    });
  }

  // Search functionality
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener("input", function (e) {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim().toLowerCase();

      if (query.length === 0) {
        document.getElementById("searchResults").innerHTML =
          '<div class="search-hint">Start typing to search across all sections...</div>';
        return;
      }

      // Debounce search
      searchTimeout = setTimeout(() => {
        performSearch(query);
      }, 300);
    });

    // Handle keyboard navigation in search results
    searchInput.addEventListener("keydown", function (e) {
      const results = document.querySelectorAll(".search-result-item");
      const selected = document.querySelector(".search-result-item.selected");

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!selected && results.length > 0) {
          results[0].classList.add("selected");
        } else if (selected) {
          const next = selected.nextElementSibling;
          if (next && next.classList.contains("search-result-item")) {
            selected.classList.remove("selected");
            next.classList.add("selected");
            next.scrollIntoView({ block: "nearest" });
          }
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (selected) {
          const prev = selected.previousElementSibling;
          if (prev && prev.classList.contains("search-result-item")) {
            selected.classList.remove("selected");
            prev.classList.add("selected");
            prev.scrollIntoView({ block: "nearest" });
          }
        }
      } else if (e.key === "Enter" && selected) {
        selected.click();
      }
    });
  }
}

// Perform search across all content
function performSearch(query) {
  const results = [];

  // Search through all sections
  Object.keys(sectionContents).forEach((sectionId) => {
    const section = sectionContents[sectionId];
    const sectionTitle =
      navigationData.sections.find((s) => s.id === sectionId)?.title || "";

    // Search in title
    if (section.title.toLowerCase().includes(query)) {
      results.push({
        sectionId: sectionId,
        sectionTitle: sectionTitle,
        title: section.title,
        preview: section.description,
        type: "title",
      });
    }

    // Search in description
    if (section.description.toLowerCase().includes(query)) {
      const preview = highlightText(section.description, query);
      results.push({
        sectionId: sectionId,
        sectionTitle: sectionTitle,
        title: section.title,
        preview: preview,
        type: "description",
      });
    }

    // Search in content sections
    section.sections.forEach((contentSection, index) => {
      if (
        contentSection.type === "text" &&
        contentSection.content.toLowerCase().includes(query)
      ) {
        const preview = highlightText(
          getPreviewText(contentSection.content, query),
          query
        );
        results.push({
          sectionId: sectionId,
          sectionTitle: sectionTitle,
          title: section.title,
          preview: preview,
          type: "content",
        });
      } else if (
        contentSection.type === "info-box" &&
        contentSection.content.toLowerCase().includes(query)
      ) {
        const preview = highlightText(
          getPreviewText(contentSection.content, query),
          query
        );
        results.push({
          sectionId: sectionId,
          sectionTitle: sectionTitle,
          title: `${section.title} - ${contentSection.title}`,
          preview: preview,
          type: "info-box",
        });
      } else if (contentSection.type === "list" && contentSection.items) {
        contentSection.items.forEach((item) => {
          if (item.toLowerCase().includes(query)) {
            const preview = highlightText(item, query);
            results.push({
              sectionId: sectionId,
              sectionTitle: sectionTitle,
              title: section.title,
              preview: preview,
              type: "list",
            });
          }
        });
      }
    });
  });

  displaySearchResults(results, query);
}

// Get preview text around the search query
function getPreviewText(text, query, contextLength = 100) {
  const lowerText = text.toLowerCase();
  const index = lowerText.indexOf(query.toLowerCase());

  if (index === -1) return text.substring(0, contextLength) + "...";

  const start = Math.max(0, index - contextLength / 2);
  const end = Math.min(text.length, index + query.length + contextLength / 2);

  let preview = text.substring(start, end);
  if (start > 0) preview = "..." + preview;
  if (end < text.length) preview = preview + "...";

  return preview;
}

// Highlight search query in text
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

// Display search results
function displaySearchResults(results, query) {
  const searchResults = document.getElementById("searchResults");

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-no-results">
        <div class="search-no-results-icon">🔍</div>
        <div class="search-no-results-text">No results found for "${query}"</div>
        <div class="search-no-results-hint">Try different keywords or check your spelling</div>
      </div>
    `;
    return;
  }

  // Limit to top 10 results
  const limitedResults = results.slice(0, 10);

  searchResults.innerHTML = limitedResults
    .map(
      (result) => `
    <div class="search-result-item" data-section-id="${result.sectionId}">
      <div class="search-result-section">${result.sectionTitle}</div>
      <div class="search-result-title">${result.title}</div>
      <div class="search-result-preview">${result.preview}</div>
    </div>
  `
    )
    .join("");

  // Add click handlers to results
  document.querySelectorAll(".search-result-item").forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section-id");
      loadSectionContent(sectionId);
      closeSearchModal();

      // Expand the section in sidebar
      const section = document.querySelector(
        `[data-section-id="${sectionId}"]`
      );
      if (section) {
        section.classList.add("expanded");
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    item.addEventListener("mouseenter", function () {
      document
        .querySelectorAll(".search-result-item")
        .forEach((i) => i.classList.remove("selected"));
      this.classList.add("selected");
    });
  });
}

// Add smooth reveal animation for content sections
function addContentRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeIn 0.6s ease-out";
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".text-content, .content-list, .info-box, .warning-box")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Initialize version dropdown functionality
function initializeVersionDropdown() {
  const versionBtn = document.getElementById("versionBtn");
  const versionMenu = document.getElementById("versionMenu");
  const versionItems = document.querySelectorAll(
    ".dropdown-item[data-version]"
  );

  if (!versionBtn || !versionMenu) return;

  // Handle version selection
  versionItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedVersion = this.getAttribute("data-version");

      // Update button text
      versionBtn.textContent = `Version ${selectedVersion} ▼`;

      // Update active state
      versionItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");

      // Show notification (optional)
      showVersionNotification(selectedVersion);
    });
  });
}

// Show version change notification
function showVersionNotification(version) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "version-notification";
  notification.innerHTML = `
    <div class="version-notification-content">
      <span class="notification-icon">ℹ️</span>
      <span>Viewing documentation for Version ${version}</span>
    </div>
  `;

  // Add to page
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Hide and remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Initialize version dropdown when page loads
document.addEventListener("DOMContentLoaded", function () {
  initializeVersionDropdown();
});
