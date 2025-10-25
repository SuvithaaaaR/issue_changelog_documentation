// Navigation data structure
const navigationData = {
  sections: [
    {
      id: "exporting-pdf",
      title: "Exporting a PDF File",
      expanded: true,
      items: [
        { id: "get-started", title: "Get Started", active: true },
        { id: "export-to-pdf", title: "Export to PDF" },
        { id: "export-rest-api", title: "Export Content via REST API" },
        { id: "debug-export", title: "Perform a Debug Export" },
      ],
    },
    {
      id: "design-templates",
      title: "Design Custom Templates",
      expanded: false,
      items: [],
    },
    {
      id: "modify-behavior",
      title: "Modify Export Behavior",
      expanded: false,
      items: [],
    },
    {
      id: "migrate-confluence",
      title: "Migrate to Confluence Cloud",
      expanded: false,
      items: [],
    },
    {
      id: "administration",
      title: "Administration",
      expanded: false,
      items: [],
    },
    {
      id: "development",
      title: "Development",
      expanded: false,
      items: [],
    },
    {
      id: "reference",
      title: "Reference",
      expanded: false,
      items: [],
    },
    {
      id: "faqs",
      title: "FAQs",
      expanded: false,
      items: [],
    },
  ],
};

// Page content data
const pageContent = {
  breadcrumbs: [
    { title: "Scroll PDF Exporter", link: "#" },
    { title: "Exporting a PDF File", link: "#" },
  ],
  title: "Get Started",
  description:
    "We're happy that you've decided to get started with Scroll PDF Exporter. This article will guide you through the steps required to set up your first export, using the built-in default templates.",
  sections: [
    {
      type: "info-box",
      icon: "info",
      title: "Prefer to watch the video?",
      content:
        'Have a look at the <a href="#">Scroll PDF Get Started video</a>',
    },
    {
      type: "text",
      content:
        "Exporting to PDF is simple – just open the page you want to export, then click ••• > Apps > <strong>Export with Scroll PDF Exporter</strong>",
    },
    {
      type: "image",
      src: "confluence-screenshot.png",
      alt: "Confluence interface showing export options",
    },
  ],
  tableOfContents: [
    { title: "Prefer to watch the video?", anchor: "#video" },
    { title: "Choosing a Template", anchor: "#template" },
    { title: "Define Export Settings", anchor: "#settings" },
    { title: "Next steps", anchor: "#next" },
  ],
};

// Header navigation data
const headerNav = [
  { title: "Get Started with Scroll", link: "#" },
  { title: "Support", link: "#" },
  { title: "Help FAQ", link: "#" },
  { title: "Scroll Apps Migration Hub", link: "#" },
];
