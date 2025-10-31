// Canonical single-file manifest: navigation + inlined, expanded documentation
const navigationData = {
  sections: [
    {
      id: "issue-changelog",
      title: "Issue Changelog",
      expanded: true,
      items: [],
    },
    {
      id: "app-overview",
      title: "Get Started",
      expanded: true,
      items: [],
    },
    {
      id: "features",
      title: "Features and Capabilities",
      expanded: false,
      items: [],
    },
    {
      id: "installation",
      title: "Installation Guide",
      expanded: false,
      items: [],
    },
    {
      id: "configuration",
      title: "Configuration and Setup",
      expanded: false,
      items: [],
    },
    {
      id: "user-guide",
      title: "User Guide / Usage Instructions",
      expanded: false,
      items: [],
    },
    { id: "faq", title: "FAQ / Troubleshooting", expanded: false, items: [] },
    {
      id: "support",
      title: "Support and Contact Information",
      expanded: false,
      items: [],
    },
    {
      id: "release-notes",
      title: "Release Notes / Changelog",
      expanded: false,
      items: [],
    },
    {
      id: "security",
      title: "Security and Privacy",
      expanded: false,
      items: [],
    },
    {
      id: "compliance",
      title: "Business Verification and Compliance",
      expanded: false,
      items: [],
    },
    {
      id: "marketplace",
      title: "Marketplace Listing Content",
      expanded: false,
      items: [],
    },
    {
      id: "pricing",
      title: "Pricing & Evaluation",
      expanded: false,
      items: [],
    },
    { id: "privacy", title: "Privacy Policy", expanded: false, items: [] },
    { id: "terms", title: "Terms of Service", expanded: false, items: [] },
    {
      id: "quality-assurance",
      title: "Quality Assurance",
      expanded: false,
      items: [],
    },
  ],
};

// Header navigation links (array expected by script.js)
const headerNav = [
  { title: "Home", link: "#" },
  { title: "Documentation", link: "#" },
];

// Page metadata and version info
const pageContent = {
  title: "Issue Change Log Documentation",
  subtitle: "Comprehensive guides and reference for the Issue Change Log app",
};
const headerInfo = {
  title: "Issue Change Log",
  versions: ["1.2.15"],
  defaultVersion: "1.2.15",
};

// Expanded, documentation-style inlined content for each section
const sectionContents = {
  "issue-changelog": {
    layout: "hero",
    hero: {
      title: "Issue Changelog",
      subtitle:
        "Send complete issue history to your team with one click — fields, comments, attachments, and transitions, all from Jira Cloud.",
      ctas: [
        { label: "Get Started", target: "app-overview" },
        { label: "Installation", target: "installation" },
        { label: "User Guide", target: "user-guide" },
        { label: "Release Notes", target: "release-notes" },
      ],
      image: {
        src: "home img.png",
        alt: "Issue Change Log panel screenshot",
        callouts: [
          {
            number: 1,
            top: "8%",
            left: "92%",
            tooltip:
              "Export your changelog data to CSV format for external analysis and reporting",
          },
          {
            number: 2,
            top: "27%",
            left: "-1.2rem",
            tooltip:
              "Filter changelog entries by field, content, author, and status to find specific changes",
          },
          {
            number: 3,
            top: "89%",
            left: "23%",
            tooltip:
              "Control the number of items displayed per page for better navigation",
          },
        ],
      },
      code: {
        language: "js",
        snippet: `import api from '@forge/api';

const issueKey = 'PROJ-123';

const res = await api.asApp().requestJira(
  \`/rest/api/3/issue/\${issueKey}?expand=changelog\`
);
const data = await res.json();
const histories = data.changelog?.histories || [];

histories.forEach(h => {
  console.log(h.author.displayName, h.created);
});

console.log('Ahoy, changelog!', histories.length);
`,
      },
    },
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Issue Changelog", link: "#" },
    ],
    title: "Issue Changelog",
    description:
      "Understand at a glance what the Issue Change Log app provides: full, filterable change history for Jira issues with secure access and export.",
    sections: [
      { type: "heading", level: 2, content: "Overview" },
      {
        type: "text",
        content:
          "Issue Change Log surfaces a **chronological, detailed history** of all activity within Jira issues — including **field updates**, **comment edits**, **attachments**, and **status transitions** — while fully respecting **Jira permissions** and **visibility rules**.",
      },
      {
        type: "text",
        content:
          "This app is designed to help teams **analyze issue activity**, **audit changes**, and share **transparent progress reports** with minimal effort.",
      },
      { type: "heading", level: 2, content: "What You Can See" },
      {
        type: "list",
        className: "checkmark-list",
        items: [
          "**Field modifications** (system and custom) with **before/after values**",
          "**Comment additions and edits** with authors and timestamps",
          "**Attachment add/remove events** with filename, size, and MIME type",
          "**Status transitions** with actor and time",
          "**Time-based filters** and **CSV export** for analysis",
        ],
      },
    ],
    tableOfContents: [
      { title: "Overview", anchor: "#overview" },
      { title: "What You Can See", anchor: "#what-you-can-see" },
    ],
  },
  "app-overview": {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Get Started", link: "#" },
    ],
    title: "Get Started",
    description:
      "Start here to understand what Issue Change Log is, its benefits, who it's for, and how to install and use it in Jira Cloud.",
    sections: [
      {
        type: "objectives-banner",
        pageTitle: "Get Started",
        subtitle:
          "Start here to understand what Issue Change Log is, its benefits, who it's for, and how to install and use it in Jira Cloud.",
        title: "By the end of this guide, you'll be able to:",
        items: [
          "Understand what Issue Change Log is and its key benefits",
          "Identify who can benefit from using this application",
          "Install and configure the app from the Atlassian Marketplace",
          "Navigate the core features and capabilities",
          "Track and export issue change history effectively",
        ],
      },
      { type: "heading", level: 2, content: "Introduction" },
      {
        type: "text",
        content:
          "The Issue Change Log is an Atlassian Forge application designed for Jira that provides comprehensive tracking and visualization of all changes made to Jira issues. This application enables teams to maintain complete audit trails, monitor issue evolution, and enhance transparency in their project workflows.",
      },
      { type: "heading", level: 2, content: "What is Issue Change Log?" },
      {
        type: "text",
        content:
          "Issue Change Log is a native Jira application that displays detailed change history for issues, including:",
      },
      {
        type: "list",
        items: [
          "Field modifications and updates",
          "Comment additions and edits",
          "Attachments and file uploads",
          "Status transitions",
          "Custom field changes",
          "Time-based filtering of changes",
        ],
      },
      {
        type: "annotated-image",
        src: "home img.png",
        alt: "Issue Change Log interface showing changelog table with filters, author columns, field content, date information, and export options",
        annotations: [
          {
            number: "1",
            x: 25,
            y: -5,
            lineFrom: { x: 25, y: -8 },
            lineTo: { x: 25, y: 3 },
          },
          {
            number: "2",
            x: 94,
            y: -5,
            lineFrom: { x: 94, y: -5 },
            lineTo: { x: 94, y: 3 },
          },
          {
            number: "3",
            x: 8,
            y: 100,
            lineFrom: { x: 8, y: 40 },
            lineTo: { x: 8, y: 58 },
          },
          {
            number: "4",
            x: 25,
            y: 58,
            lineFrom: { x: 25, y: 40 },
            lineTo: { x: 25, y: 58 },
          },
          {
            number: "5",
            x: 42,
            y: 58,
            lineFrom: { x: 42, y: 40 },
            lineTo: { x: 42, y: 58 },
          },
          {
            number: "6",
            x: 59,
            y: 58,
            lineFrom: { x: 59, y: 40 },
            lineTo: { x: 59, y: 58 },
          },
          {
            number: "7",
            x: 76,
            y: 58,
            lineFrom: { x: 76, y: 40 },
            lineTo: { x: 76, y: 58 },
          },
          {
            number: "8",
            x: 20,
            y: 108,
            lineFrom: { x: 20, y: 88 },
            lineTo: { x: 20, y: 108 },
          },
          {
            number: "9",
            x: 80,
            y: 108,
            lineFrom: { x: 80, y: 88 },
            lineTo: { x: 80, y: 108 },
          },
        ],
      },
      { type: "heading", level: 2, content: "Key Benefits" },
      { type: "heading", level: 3, content: "Complete Visibility" },
      {
        type: "text",
        content:
          "Track every change made to Jira issues with detailed timestamps, authors, and modification details.",
      },
      { type: "heading", level: 3, content: "Enterprise-Grade Access Control" },
      {
        type: "list",
        items: [
          "Site-level authorization managed by Jira administrators",
          "Project-level enablement controlled by project administrators",
          "Granular permission system ensures access only for authorized users",
        ],
      },
      { type: "heading", level: 3, content: "Enhanced Reporting" },
      {
        type: "list",
        items: [
          "Export change logs to CSV format",
          "Filter by time periods such as 24 hours, 7 days, 30 days, 6 months, 1 year, or all time",
          "Track multiple issues simultaneously",
        ],
      },
      { type: "heading", level: 3, content: "Seamless Integration" },
      {
        type: "list",
        items: [
          "Native Jira issue panel integration",
          "Admin settings page for site-wide management",
          "Project settings page for project-level control",
          "Works with Jira Cloud without additional infrastructure",
        ],
      },
      { type: "heading", level: 3, content: "Performance Optimized" },
      {
        type: "list",
        items: [
          "Efficient data fetching with pagination",
          "Optimized API calls to Jira REST API",
          "Fast loading times even with large change histories",
        ],
      },
      { type: "heading", level: 2, content: "Target Audience" },
      { type: "heading", level: 3, content: "Development Teams" },
      {
        type: "text",
        content:
          "Track code-related changes, bug fixes, and feature implementations through issue history.",
      },
      { type: "heading", level: 3, content: "Project Managers" },
      {
        type: "text",
        content:
          "Monitor project progress, identify bottlenecks, and maintain comprehensive audit trails.",
      },
      { type: "heading", level: 3, content: "Compliance Officers" },
      {
        type: "text",
        content:
          "Ensure regulatory compliance with detailed change tracking and audit capabilities.",
      },
      { type: "heading", level: 3, content: "Quality Assurance Teams" },
      {
        type: "text",
        content:
          "Review testing cycles, track bug resolutions, and verify issue lifecycle management.",
      },
      { type: "heading", level: 3, content: "DevOps Teams" },
      {
        type: "text",
        content:
          "Monitor deployment-related changes, track release cycles, and maintain operational visibility.",
      },
      { type: "heading", level: 2, content: "Use Cases" },
      { type: "heading", level: 3, content: "Audit and Compliance" },
      {
        type: "text",
        content:
          "Maintain detailed records of all issue modifications for compliance requirements (SOC 2, ISO 27001, GDPR, etc.).",
      },
      { type: "heading", level: 3, content: "Root Cause Analysis" },
      {
        type: "text",
        content:
          "Investigate when and why specific changes were made to identify issues or process improvements.",
      },
      { type: "heading", level: 3, content: "Team Transparency" },
      {
        type: "text",
        content:
          "Provide visibility into who made what changes and when, fostering accountability and collaboration.",
      },
      { type: "heading", level: 3, content: "Quality Tracking" },
      {
        type: "text",
        content:
          "Monitor how issues evolve through different stages and identify patterns in workflow efficiency.",
      },
      { type: "heading", level: 3, content: "Historical Analysis" },
      {
        type: "text",
        content:
          "Analyze patterns in issue modifications over time to improve processes and workflows.",
      },
      { type: "heading", level: 2, content: "How It Works" },
      {
        type: "list",
        items: [
          "Installation – Install the app from the Atlassian Marketplace to your Jira Cloud instance.",
          "Site Authorization – Jira administrators authorize projects that can use the app.",
          "Project Enablement – Project administrators enable or disable the app for their projects.",
          "Usage – Authorized users view detailed change logs directly in the issue panel.",
          "Export – Users can export change data to CSV for further analysis.",
        ],
      },
      { type: "heading", level: 2, content: "Platform Compatibility" },
      { type: "text", content: "Supported platforms and environments:" },
      {
        type: "list",
        items: [
          "Jira Cloud – Fully Supported",
          "Jira Data Center / Server – Not Supported (Forge apps are Cloud-only)",
          "Supported Browsers – Chrome, Firefox, Safari, Edge (latest versions)",
          "Mobile – Responsive design compatible with mobile browsers",
        ],
      },
      { type: "heading", level: 2, content: "Architecture" },
      {
        type: "text",
        content:
          "The Issue Change Log is built on the Atlassian Forge platform, which provides:",
      },
      {
        type: "list",
        items: [
          "A secure, isolated runtime environment",
          "Built-in authentication and authorization",
          "Direct integration with Jira APIs",
          "Automatic scaling and performance optimization",
          "Zero infrastructure management",
        ],
      },
      { type: "heading", level: 2, content: "Data Privacy" },
      {
        type: "list",
        items: [
          "No External Storage: All data remains within the Jira instance",
          "Forge Storage Only: Only project access configurations are stored in Forge storage",
          "No Third-Party Access: The app does not share data with external services",
          "Jira Permissions Respected: Users can only see data they have permission to access",
        ],
      },
      { type: "heading", level: 2, content: "Next Steps" },
      {
        type: "list",
        items: [
          "Installation – Installation Guide",
          "Configuration – Configuration and Setup",
          "User Guide – User Guide",
          "Troubleshooting – FAQ / Troubleshooting",
        ],
      },
      { type: "heading", level: 2, content: "Version Information" },
      {
        type: "list",
        items: [
          "Current Version – 1.2.15",
          "License – MIT",
          "Runtime – Node.js 22.x",
          "Forge API Version – 6.1.1",
        ],
      },
      { type: "heading", level: 2, content: "Support" },
      {
        type: "text",
        content:
          "For questions, issues, or feature requests, please refer to the Support and Contact Information.",
      },
    ],
    tableOfContents: [
      { title: "Introduction", anchor: "#introduction" },
      {
        title: "What is Issue Change Log?",
        anchor: "#what-is-issue-change-log",
      },
      { title: "Key Benefits", anchor: "#key-benefits" },
      { title: "Target Audience", anchor: "#target-audience" },
      { title: "Use Cases", anchor: "#use-cases" },
      { title: "How It Works", anchor: "#how-it-works" },
      { title: "Platform Compatibility", anchor: "#platform-compatibility" },
      { title: "Architecture", anchor: "#architecture" },
      { title: "Data Privacy", anchor: "#data-privacy" },
      { title: "Next Steps", anchor: "#next-steps" },
      { title: "Version Information", anchor: "#version-information" },
      { title: "Support", anchor: "#support" },
    ],
  },

  features: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Features", link: "#" },
    ],
    title: "Features and Capabilities",
    description:
      "This document outlines the core capabilities and technical strengths of the Issue Change Log application, providing detailed insights into its features, performance, and security architecture.",
    sections: [
      { type: "heading", level: 2, content: "Core Features" },
      { type: "heading", level: 3, content: "Comprehensive Change Tracking" },
      {
        type: "text",
        content:
          "The Issue Change Log provides full visibility into every change made within Jira issues, capturing both standard and custom field modifications. Each entry includes the previous and new values, the author of the change, exact timestamps, and the related issue key.",
      },
      {
        type: "text",
        content:
          "Comment activity is thoroughly tracked, including comment content, author, creation and update timestamps, and edit history, all presented in chronological order.",
      },
      {
        type: "text",
        content:
          "Attachment-related actions are also logged, recording the file name, size, MIME type, uploader, upload date, and content URL in compliance with Jira permission settings.",
      },
      {
        type: "text",
        content:
          "All tracked data can be filtered by time and exported for reporting or analysis.",
      },

      { type: "heading", level: 3, content: "Advanced Filtering System" },
      {
        type: "text",
        content:
          "A built-in, time-based filtering system allows users to quickly view activity within specific timeframes such as the last 24 hours, 7 days, 30 days, 6 months, 1 year, or the full change history.",
      },
      {
        type: "text",
        content:
          "Filters are applied instantly without page reloads and work in conjunction with pagination to maintain performance on large issues. The data fetching mechanism retrieves only the information required for the selected timeframe, ensuring efficient performance and reduced load times.",
      },

      { type: "heading", level: 3, content: "Data Export Capabilities" },
      {
        type: "text",
        content:
          "Users can export the visible change log data to a CSV file with a single click. The exported file includes all relevant data such as field changes, comments, and attachments, along with authors and ISO-formatted timestamps.",
      },
      {
        type: "text",
        content:
          "The CSV follows a consistent schema containing columns such as Type, Field, From, To, Author, Date, Issue Key, Content, Filename, and Size.",
      },
      {
        type: "text",
        content:
          "Each export is automatically named using the format issue-changelog-{ISSUE-KEY}.csv for easy reference. The exported files are fully compatible with Excel, Google Sheets, and analytics tools such as Power BI or Tableau.",
      },

      { type: "heading", level: 3, content: "Two-Tier Access Control" },
      {
        type: "text",
        content:
          "Access to the app is managed through a two-tier control system consisting of site-level authorization and project-level enablement.",
      },
      {
        type: "text",
        content:
          "At the site level, Jira administrators can authorize which projects have access to the app. They can search, filter, add, or remove projects individually or in bulk.",
      },
      {
        type: "text",
        content:
          "At the project level, project administrators can enable or disable the app through a simple toggle interface.",
      },
      {
        type: "text",
        content:
          "This design ensures centralized administrative control while providing flexibility for project-specific configuration and audit visibility.",
      },

      { type: "heading", level: 3, content: "User Interface Features" },
      {
        type: "text",
        content:
          "The app’s interface is designed with usability and clarity in mind. The main issue panel features a responsive layout aligned with Jira’s native design, including:",
      },
      {
        type: "list",
        items: [
          "A time filter dropdown",
          "An export button",
          "A sortable change log table with a fixed header",
          "Pagination controls and total record count display",
        ],
      },
      {
        type: "text",
        content:
          "The admin panel provides a dual-section layout showing authorized projects and allowing administrators to add new ones using bulk selection and search functionality.",
      },
      {
        type: "text",
        content:
          "Project-level settings are accessible under Project Settings → Apps → Issue Change Log, where users can manage app status, permissions, and enable/disable options with clear instructions.",
      },

      { type: "heading", level: 3, content: "Performance Optimizations" },
      {
        type: "text",
        content:
          "Performance is maintained through pagination (20 items per page by default), lazy loading, and intelligent caching.",
      },
      {
        type: "text",
        content:
          "Data retrieval is handled using efficient, batched, and parallelized API calls with built-in throttling to respect Jira API rate limits.",
      },
      {
        type: "text",
        content:
          "The app includes comprehensive error handling and user feedback mechanisms to ensure smooth and responsive performance even when dealing with large data sets.",
      },

      { type: "heading", level: 3, content: "Security Features" },
      {
        type: "text",
        content:
          "The Issue Change Log app does not store issue data outside Jira. Only minimal configuration data is stored in Forge’s secure storage.",
      },
      {
        type: "text",
        content:
          "All operations strictly adhere to Jira’s permission and visibility rules. Communication between the app and Jira is fully encrypted over HTTPS, with authentication and token handling managed by the Forge framework.",
      },
      {
        type: "text",
        content:
          "The multi-level security model spans Forge’s runtime isolation, Jira user authentication, site and project authorization, and issue-level permissions. All administrative actions are logged for auditing and compliance purposes.",
      },

      { type: "heading", level: 3, content: "Compatibility" },
      {
        type: "text",
        content:
          "The application is fully compatible with Jira Cloud across all plan tiers and supports all project types.",
      },
      {
        type: "text",
        content:
          "It works seamlessly in all modern browsers, including Chrome, Firefox, Safari, and Edge, and features a responsive interface optimized for mobile use.",
      },
      {
        type: "text",
        content:
          "Jira Data Center and Server editions are not supported since Atlassian Forge is available exclusively for Jira Cloud.",
      },

      { type: "heading", level: 3, content: "Integration Capabilities" },
      {
        type: "text",
        content:
          "Built using the Atlassian Forge framework, the app integrates natively with Jira through modules such as issue panel, admin settings, and project settings.",
      },
      {
        type: "text",
        content: "It uses the Jira REST API v3 for data access and management.",
      },
      {
        type: "text",
        content:
          "The CSV export functionality ensures easy integration with external analytics platforms such as Excel, Google Sheets, Power BI, and Tableau for deeper data visualization and reporting.",
      },

      { type: "heading", level: 3, content: "Scalability" },
      {
        type: "text",
        content:
          "The app is designed for scalability, efficiently handling large change histories using optimized pagination and filtering mechanisms.",
      },
      {
        type: "text",
        content:
          "It supports concurrent use across multiple projects and users without performance degradation.",
      },
      {
        type: "text",
        content:
          "The serverless Forge infrastructure automatically scales with demand, ensuring consistent reliability without the need for infrastructure management.",
      },

      { type: "heading", level: 2, content: "Feature Access Summary" },
      {
        type: "text",
        content:
          "The app provides a clear distinction between user roles and capabilities:",
      },
      {
        type: "list",
        items: [
          "End Users can view change logs, apply time filters, and export data to CSV.",
          "Project Administrators manage project-level enablement of the app.",
          "Site Administrators control global authorization for projects and perform bulk management operations.",
        ],
      },
      {
        type: "text",
        content:
          "All change types—including field updates, comments, attachments, and status transitions—are tracked, filterable by time, and exportable for reporting or analysis.",
      },

      { type: "heading", level: 2, content: "Feature Roadmap (Planned)" },
      { type: "text", content: "Planned enhancements include:" },
      {
        type: "list",
        items: [
          "Advanced filtering by field, author, and preset conditions",
          "Interactive visual timelines and analytics dashboards",
          "Configurable notifications and webhooks",
          "Cross-issue and bulk export capabilities",
          "Advanced metrics for workflow trends and bottleneck analysis",
        ],
      },
      {
        type: "text",
        content:
          "These features are under consideration and not yet part of the current release.",
      },

      { type: "heading", level: 2, content: "Current Limitations" },
      {
        type: "text",
        content:
          "At present, the app supports tracking for a single issue at a time and provides only time-based filtering within the interface.",
      },
      {
        type: "text",
        content:
          "It does not include built-in notifications and is limited to Jira Cloud environments.",
      },
      {
        type: "text",
        content:
          "The CSV export schema is fixed, though users can perform advanced analysis through external tools such as Excel or Google Sheets.",
      },
      {
        type: "text",
        content:
          "Notifications can be replicated using Jira automation rules or third-party integrations.",
      },

      { type: "heading", level: 2, content: "Technical Specifications" },
      {
        type: "text",
        content: "The app leverages Jira REST API v3 endpoints, including:",
      },
      {
        type: "list",
        items: [
          "/rest/api/3/issue/{issueKey}?expand=changelog",
          "/rest/api/3/issue/{issueKey}/comment",
          "/rest/api/3/project",
        ],
      },
      { type: "text", content: "It uses the following libraries and runtime:" },
      {
        type: "list",
        items: [
          "@forge/api version 6.1.1",
          "@forge/resolver version 1.7.0",
          "Node.js 22.x runtime on the Forge serverless platform",
        ],
      },
      {
        type: "text",
        content:
          "Forge storage is used exclusively for configuration data, and no issue data is stored externally.",
      },

      { type: "heading", level: 2, content: "Next Steps" },
      {
        type: "list",
        items: [
          "Installation: Refer to Installation Guide",
          "Configuration: Refer to Configuration and Setup",
          "Usage: Refer to User Guide",
        ],
      },

      { type: "heading", level: 2, content: "Support" },
      {
        type: "text",
        content:
          "For feature requests, issues, or general inquiries, visit the Support and Contact Information page for assistance.",
      },
    ],
    tableOfContents: [
      { title: "Core Features", anchor: "#core-features" },
      {
        title: "Comprehensive Change Tracking",
        anchor: "#comprehensive-change-tracking",
      },
      {
        title: "Advanced Filtering System",
        anchor: "#advanced-filtering-system",
      },
      {
        title: "Data Export Capabilities",
        anchor: "#data-export-capabilities",
      },
      { title: "Two-Tier Access Control", anchor: "#two-tier-access-control" },
      { title: "User Interface Features", anchor: "#user-interface-features" },
      {
        title: "Performance Optimizations",
        anchor: "#performance-optimizations",
      },
      { title: "Security Features", anchor: "#security-features" },
      { title: "Compatibility", anchor: "#compatibility" },
      {
        title: "Integration Capabilities",
        anchor: "#integration-capabilities",
      },
      { title: "Scalability", anchor: "#scalability" },
      { title: "Feature Access Summary", anchor: "#feature-access-summary" },
      {
        title: "Feature Roadmap (Planned)",
        anchor: "#feature-roadmap-planned",
      },
      { title: "Current Limitations", anchor: "#current-limitations" },
      {
        title: "Technical Specifications",
        anchor: "#technical-specifications",
      },
      { title: "Next Steps", anchor: "#next-steps" },
      { title: "Support", anchor: "#support" },
    ],
  },

  installation: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Installation", link: "#" },
    ],
    title: "Installation Guide",
    description:
      "Step-by-step instructions to install Issue Change Log from the Atlassian Marketplace for Jira Cloud. No CLI required.",
    sections: [
      { type: "heading", level: 2, content: "Prerequisites" },
      { type: "heading", level: 3, content: "System Requirements" },
      {
        type: "list",
        items: [
          "Active Jira Cloud instance",
          "Jira administrator (site admin) privileges for installation",
        ],
      },
      { type: "heading", level: 3, content: "User Permissions" },
      {
        type: "list",
        items: [
          "Installation: Jira administrator or site administrator role",
          "Site configuration: Member of site-admins, jira-administrators, or administrators",
          "Project configuration: Project administrator role",
        ],
      },
      { type: "heading", level: 3, content: "Browser Requirements" },
      {
        type: "list",
        items: ["Chrome 90+", "Firefox 88+", "Safari 14+", "Edge 90+"],
      },

      {
        type: "heading",
        level: 2,
        content: "Install from Atlassian Marketplace (Recommended)",
      },
      { type: "heading", level: 3, content: "Step 1: Navigate to Marketplace" },
      {
        type: "text",
        content:
          "Go to https://marketplace.atlassian.com and sign in with your Atlassian account.",
      },
      { type: "heading", level: 3, content: "Step 2: Search for the App" },
      {
        type: "text",
        content:
          'Search for "Issue Change Log" and open the app listing to view details.',
      },
      { type: "heading", level: 3, content: "Step 3: Install the App" },
      {
        type: "text",
        content:
          'Click "Get it now" or "Try it free", select your Jira Cloud site, then click "Install app".',
      },
      { type: "heading", level: 3, content: "Step 4: Grant Permissions" },
      {
        type: "list",
        items: [
          "read:jira-work — read Jira issues and projects",
          "read:jira-user — read user information",
          "storage:app — store app configuration data",
        ],
      },
      { type: "heading", level: 3, content: "Step 5: Confirm Installation" },
      {
        type: "text",
        content:
          "Wait for the installation to complete. A success message confirms the app is installed.",
      },

      { type: "heading", level: 2, content: "Post-Installation Setup" },
      { type: "heading", level: 3, content: "Step 1: Verify Installation" },
      {
        type: "list",
        items: [
          'Open any Jira issue and look for the "Issue Changelog" panel on the right',
          "Seeing an access restriction message is expected before configuration",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "Step 2: Initial Site Configuration (Admins)",
      },
      {
        type: "list",
        items: [
          "Go to Jira Settings → Apps → Manage apps",
          'Find "Issue Change Log" and open "Issue Change Log Settings"',
          "Authorize projects by selecting them individually or using Select All",
          "Confirm authorized projects appear in the Currently Allowed Projects table",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "Step 3: Project-Level Configuration (Project Admins)",
      },
      {
        type: "list",
        items: [
          "Project Settings → Apps → Issue Change Log",
          "Toggle Enable Issue Change Log for this project (enabled by default if authorized)",
        ],
      },
      { type: "heading", level: 3, content: "Step 4: Test the Installation" },
      {
        type: "list",
        items: [
          "Open an issue in an authorized, enabled project",
          "Confirm change history appears and filters (24h, 7d, 30d…) work",
          "Try Export → CSV",
        ],
      },

      { type: "heading", level: 2, content: "Verification Checklist" },
      {
        type: "list",
        items: [
          "App appears in Jira Manage apps",
          "Issue Changelog panel visible in issue view",
          "Admin settings page accessible to administrators",
          "Project settings page accessible to project admins",
          "Access control working correctly",
          "Change logs displaying for authorized projects",
          "CSV export working",
          "Time filters operating correctly",
        ],
      },

      {
        type: "heading",
        level: 2,
        content: "Troubleshooting Installation Issues",
      },
      {
        type: "heading",
        level: 3,
        content: 'Issue: "App not appearing in issue panel"',
      },
      {
        type: "list",
        items: [
          "Hard-refresh the browser (Ctrl+F5 or Cmd+Shift+R)",
          "Clear browser cache",
          "Verify the app is installed in Jira Settings → Apps → Manage apps",
          "Ensure the project has been authorized by an administrator",
        ],
      },
      { type: "heading", level: 3, content: 'Issue: "Permission denied"' },
      {
        type: "list",
        items: [
          "Confirm you have Jira administrator privileges",
          "If actions fail, check with a site admin to verify your account permissions",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: 'Issue: "App installed but access denied for all projects"',
      },
      {
        type: "list",
        items: [
          "This is expected until projects are explicitly authorized",
          "Use the admin settings page to add projects and verify they appear in the allowed list",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: 'Issue: "Cannot access admin settings"',
      },
      {
        type: "list",
        items: [
          "Verify membership in site-admins, jira-administrators, or administrators",
          "Ask a site admin to grant access if needed",
        ],
      },

      { type: "heading", level: 2, content: "Uninstallation" },
      { type: "heading", level: 3, content: "Via Jira UI" },
      {
        type: "list",
        items: [
          "Jira Settings → Apps → Manage apps",
          'Find "Issue Change Log" and click Uninstall',
          "Confirm the uninstallation",
        ],
      },

      {
        type: "heading",
        level: 2,
        content: "Data Retention After Uninstallation",
      },
      {
        type: "list",
        items: [
          "Jira data: Not affected (the app reads Jira data only)",
          "App configuration: Removed (authorized project lists are deleted)",
          "No external data: Nothing stored outside Jira/Forge",
        ],
      },

      { type: "heading", level: 2, content: "Upgrading the App" },
      { type: "heading", level: 3, content: "From Marketplace" },
      {
        type: "text",
        content:
          "Updates are delivered automatically when installed from the Marketplace; you’ll be notified of changes.",
      },

      { type: "heading", level: 2, content: "Support" },
      {
        type: "text",
        content:
          "For installation assistance, see Support and Contact Information.",
      },
    ],
    tableOfContents: [
      { title: "Prerequisites", anchor: "#prerequisites" },
      {
        title: "Install from Atlassian Marketplace (Recommended)",
        anchor: "#install-from-atlassian-marketplace-recommended",
      },
      { title: "Post-Installation Setup", anchor: "#post-installation-setup" },
      { title: "Verification Checklist", anchor: "#verification-checklist" },
      {
        title: "Troubleshooting Installation Issues",
        anchor: "#troubleshooting-installation-issues",
      },
      { title: "Uninstallation", anchor: "#uninstallation" },
      {
        title: "Data Retention After Uninstallation",
        anchor: "#data-retention-after-uninstallation",
      },
      { title: "Upgrading the App", anchor: "#upgrading-the-app" },
      { title: "Support", anchor: "#support" },
    ],
  },

  configuration: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Configuration", link: "#" },
    ],
    title: "Configuration and Setup",
    description:
      "How to configure site-level permissions, project enablement and optional feature flags for the app.",
    sections: [
      { type: "heading", level: 2, content: "Site-Level Authorization" },
      {
        type: "text",
        content:
          "Site admins approve the app and manage global settings. Only after site approval can project admins enable the app for individual projects. This provides a two-tier access model for added security.",
      },
      { type: "heading", level: 2, content: "Project Enablement" },
      {
        type: "text",
        content:
          "Enable the app per project via Project Settings → Apps. Once enabled, the Issue Change Log panel will appear on the issue view for that project.",
      },
      { type: "heading", level: 2, content: "Feature Flags and Tuning" },
      {
        type: "list",
        items: [
          "Enable compact mode for dense timelines",
          "Toggle 'include attachments' to avoid heavy downloads in large projects",
          "Set default time-window for views (e.g. 30 days)",
        ],
      },
      { type: "heading", level: 2, content: "Configuration Storage" },
      {
        type: "text",
        content:
          "Configuration values (feature flags, enabled projects list) are stored using Forge's secure storage. No issue data is persisted by the app.",
      },
    ],
    tableOfContents: [
      {
        title: "Site-Level Authorization",
        anchor: "#site-level-authorization",
      },
      { title: "Project Enablement", anchor: "#project-enablement" },
      { title: "Feature Flags", anchor: "#feature-flags" },
    ],
  },

  "user-guide": {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "User Guide", link: "#" },
    ],
    title: "User Guide / Usage Instructions",
    description:
      "Practical step-by-step instructions for end users and common workflows used to analyze change history.",
    sections: [
      { type: "heading", level: 2, content: "Getting Started" },
      {
        type: "text",
        content:
          "Open an issue in a project where the app is enabled and look for the Issue Change Log panel in the issue view. The panel lists recent events and provides filters to narrow the results.",
      },
      { type: "heading", level: 2, content: "Common Workflows" },
      {
        type: "list",
        items: [
          "Investigate who changed a field value and when",
          "Extract change history for CSV-based audits",
          "Quickly find comment edits and previous comment content",
          "Review attachment add/remove events during releases",
        ],
      },
      { type: "heading", level: 2, content: "Filtering & Searching" },
      {
        type: "text",
        content:
          "Use the time-range presets, author selectors and field checkboxes to reduce noise. Combined filters are applied conjunctively (AND). Use the search input to match free-text inside change descriptions and comments.",
      },
      { type: "heading", level: 2, content: "Exporting and Saving Results" },
      {
        type: "text",
        content:
          "Use Export → CSV to download the current view. For printable reports, use Save as PDF; the filename contains the chosen version and timestamp for traceability.",
      },
    ],
    tableOfContents: [
      { title: "Getting Started", anchor: "#getting-started" },
      { title: "Common Workflows", anchor: "#common-workflows" },
      { title: "Filtering & Searching", anchor: "#filtering-searching" },
    ],
  },

  faq: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "FAQ", link: "#" },
    ],
    title: "FAQ / Troubleshooting",
    description:
      "Answers to frequently asked questions and practical troubleshooting steps for common failure modes.",
    sections: [
      { type: "heading", level: 2, content: "General Questions" },
      {
        type: "text",
        content:
          "Q: What does the app record? A: Field changes, comment edits, and attachment events with metadata. It does not store issue content externally.",
      },
      {
        type: "heading",
        level: 2,
        content: "I don't see the panel — what to check",
      },
      {
        type: "list",
        items: [
          "Confirm site-level installation in 'Manage apps'",
          "Verify project-level enablement in Project Settings → Apps",
          "Ensure you have permission to view the issue and that the issue belongs to an enabled project",
        ],
      },
      { type: "heading", level: 2, content: "Performance & Errors" },
      {
        type: "text",
        content:
          "If large histories are slow, narrow the time window or use export to obtain a snapshot. For errors, check the browser console and supply logs when opening a support ticket.",
      },
    ],
    tableOfContents: [
      { title: "General Questions", anchor: "#general-questions" },
      { title: "Panel Visibility", anchor: "#panel-visibility" },
      { title: "Performance & Errors", anchor: "#performance-errors" },
    ],
  },

  support: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Support", link: "#" },
    ],
    title: "Support and Contact Information",
    description:
      "Where to get help and how to open useful support requests so issues can be resolved quickly.",
    sections: [
      { type: "heading", level: 2, content: "Support Channels" },
      {
        type: "list",
        items: [
          "Primary docs & FAQ (this site)",
          "GitHub issues for bugs and feature requests",
          "Atlassian Marketplace support contact",
        ],
      },
      { type: "heading", level: 2, content: "How to Report a Bug" },
      {
        type: "text",
        content:
          "Include exact reproduction steps, browser and Jira Cloud region, app version, screenshots and the console network logs captured during the failure. A minimal reproduction repository or steps will speed triage.",
      },
      { type: "heading", level: 2, content: "Support SLA & Response" },
      {
        type: "text",
        content:
          "Community support is available via GitHub issues. For commercial agreements, include your marketplace vendor contact and purchase details to access priority support.",
      },
    ],
    tableOfContents: [
      { title: "Support Channels", anchor: "#support-channels" },
      { title: "How to Report a Bug", anchor: "#how-to-report" },
      { title: "SLA & Response", anchor: "#sla" },
    ],
  },

  "release-notes": {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Release Notes", link: "#" },
    ],
    title: "Release Notes / Changelog",
    description:
      "Detailed changelog entries, upgrade notes, compatibility and breaking change guidance for each release.",
    sections: [
      { type: "heading", level: 2, content: "Version 1.2.15" },
      {
        type: "list",
        items: [
          "Added: Export to CSV preserving filters",
          "Improved: Lazy-loading performance for long histories",
          "Fixed: Attachment download permission check bug",
        ],
      },
      { type: "heading", level: 2, content: "Upgrade Notes" },
      {
        type: "text",
        content:
          "Upgrades from older major versions are non-destructive for configuration; however, if you use custom integrations or scripts that depended on internal endpoints, verify compatibility. Use 'forge deploy' in a staging site before production upgrades.",
      },
      { type: "heading", level: 2, content: "Roadmap Highlights" },
      {
        type: "text",
        content:
          "Planned features include richer diffs for large text fields, scheduled exports and webhooks for integrations.",
      },
    ],
    tableOfContents: [
      { title: "Version 1.2.15", anchor: "#v1-2-15" },
      { title: "Upgrade Notes", anchor: "#upgrade-notes" },
      { title: "Roadmap", anchor: "#roadmap" },
    ],
  },

  security: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Security", link: "#" },
    ],
    title: "Security and Privacy",
    description:
      "A focused security summary describing threat model, data handling, permission boundaries and recommended hardening steps.",
    sections: [
      { type: "heading", level: 2, content: "Security Overview" },
      {
        type: "text",
        content:
          "Running on Forge offers a controlled execution environment with platform-managed secrets and compliance controls. The app requests only the minimum necessary scopes to read issue activity.",
      },
      { type: "heading", level: 2, content: "Data Handling & Privacy" },
      {
        type: "text",
        content:
          "Issue data is read on-demand and is not stored externally. Configuration and feature flags are stored in Forge storage encrypted at rest. The app supports data export only to CSV via the user's browser session; no server-side export endpoints are provided.",
      },
      { type: "heading", level: 2, content: "Permissions and Least Privilege" },
      {
        type: "list",
        items: [
          "Site admin must approve installation",
          "Per-project enablement is required before issue data is available",
          "Download links for attachments are shown only if the requesting user has attachment access",
        ],
      },
      { type: "heading", level: 2, content: "Recommendations" },
      {
        type: "list",
        items: [
          "Limit project enablement scope to the minimal necessary projects",
          "Regularly review installed apps in site administration",
          "Use browser-based exports for audits instead of scheduled external exports",
        ],
      },
    ],
    tableOfContents: [
      { title: "Security Overview", anchor: "#security-overview" },
      { title: "Data Handling", anchor: "#data-handling" },
      { title: "Recommendations", anchor: "#recommendations" },
    ],
  },

  compliance: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Compliance", link: "#" },
    ],
    title: "Business Verification and Compliance",
    description:
      "Information useful for procurement, security reviews and compliance teams evaluating the app for enterprise use.",
    sections: [
      { type: "heading", level: 2, content: "Certifications & Attestations" },
      {
        type: "text",
        content:
          "Forge-hosted apps benefit from Atlassian's platform certifications (SOC2, ISO27001). The app itself is developed following secure SDLC practices; reach out to vendor contact for attestation details.",
      },
      { type: "heading", level: 2, content: "Data Residency & GDPR" },
      {
        type: "text",
        content:
          "Issue data remains in the customer's Jira instance; the app does not export data to external servers. Data subject requests should be handled via Jira's native tooling and app uninstallation if config data removal is required.",
      },
      { type: "heading", level: 2, content: "Procurement Checklist" },
      {
        type: "list",
        items: [
          "Vendor legal & security contact",
          "Supported SLAs and commercial terms",
          "Compatibility with organization's procurement and procurement approval pipeline",
        ],
      },
    ],
    tableOfContents: [
      { title: "Certifications", anchor: "#certifications" },
      { title: "Data Residency", anchor: "#data-residency" },
      { title: "Procurement Checklist", anchor: "#procurement" },
    ],
  },

  marketplace: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Marketplace", link: "#" },
    ],
    title: "Marketplace Listing Content",
    description:
      "Copy and assets intended for Marketplace listing including short/long descriptions, screenshots guidance and key selling points.",
    sections: [
      { type: "heading", level: 2, content: "Short Description" },
      {
        type: "text",
        content:
          "Visualize and export complete change histories for Jira issues — fields, comments and attachments.",
      },
      { type: "heading", level: 2, content: "Long Description & Benefits" },
      {
        type: "text",
        content:
          "Provides teams with auditable history of issue changes. Ideal for regulated workflows, incident postmortems, and compliance reporting.",
      },
      { type: "heading", level: 2, content: "Screenshots & Media" },
      {
        type: "list",
        items: [
          "Include timeline view screenshot",
          "Show export modal and filters UI",
          "Provide an example CSV snippet",
        ],
      },
    ],
    tableOfContents: [
      { title: "Short Description", anchor: "#short-desc" },
      { title: "Long Description", anchor: "#long-desc" },
      { title: "Screenshots", anchor: "#screenshots" },
    ],
  },

  pricing: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Pricing", link: "#" },
    ],
    title: "Pricing and Evaluation",
    description:
      "Suggested pricing tiers, evaluation checklist and guidance for choosing the right plan for different team sizes.",
    sections: [
      { type: "heading", level: 2, content: "Tiers" },
      {
        type: "list",
        items: [
          "Community / OSS: MIT-licensed with self-deploy instructions",
          "Marketplace: per-user or tiered pricing depending on instance size",
          "Enterprise: contact sales for custom licensing and SLAs",
        ],
      },
      { type: "heading", level: 2, content: "Evaluation Checklist" },
      {
        type: "list",
        items: [
          "Install in a staging instance and run sample exports",
          "Measure UI latency on typical issue histories",
          "Verify security and procurement requirements",
        ],
      },
      { type: "heading", level: 2, content: "Trial Recommendations" },
      {
        type: "text",
        content:
          "Run a 30-day trial during which the team performs at least two audits and one export to validate correctness.",
      },
    ],
    tableOfContents: [
      { title: "Tiers", anchor: "#tiers" },
      { title: "Evaluation", anchor: "#evaluation" },
    ],
  },

  privacy: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Privacy Policy", link: "#" },
    ],
    title: "Privacy Policy",
    description:
      "Concise privacy information: what is accessed, retention, and how to exercise privacy rights.",
    sections: [
      { type: "heading", level: 2, content: "Data Access & Retention" },
      {
        type: "text",
        content:
          "The app reads issue and comment metadata from the customer's Jira instance at request time and does not persist issue content to external systems. Configuration and settings are retained in Forge storage for the duration of the app's installation.",
      },
      { type: "heading", level: 2, content: "Third-Party Sharing" },
      {
        type: "text",
        content:
          "No third-party sharing of issue data occurs. Any CSV or PDF exports are generated in-browser and are under the user's control.",
      },
      { type: "heading", level: 2, content: "Data Subject Rights" },
      {
        type: "text",
        content:
          "For GDPR or equivalent requests, follow your organization's process for data subject access or contact the site administrator. Uninstalling the app removes configuration stored by the app.",
      },
    ],
    tableOfContents: [
      { title: "Data Access", anchor: "#data-access" },
      { title: "Third-Party Sharing", anchor: "#third-party" },
      { title: "Data Subject Rights", anchor: "#rights" },
    ],
  },

  terms: {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Terms of Service", link: "#" },
    ],
    title: "Terms of Service",
    description:
      "High-level terms, licensing and responsibility statements. This is a summary; consult full license files for legal details.",
    sections: [
      { type: "heading", level: 2, content: "License" },
      {
        type: "text",
        content:
          "Open-source distributions use the MIT license by default. Commercial Marketplace listings include terms defined by the vendor.",
      },
      { type: "heading", level: 2, content: "Warranty & Liability" },
      {
        type: "text",
        content:
          "Software is provided 'as-is' without warranty. The vendor's liability is limited as described in the full terms.",
      },
      { type: "heading", level: 2, content: "Acceptable Use" },
      {
        type: "text",
        content:
          "Customers must not use the app to exfiltrate sensitive data; follow your organization's security policies when exporting or sharing reports.",
      },
    ],
    tableOfContents: [
      { title: "License", anchor: "#license" },
      { title: "Warranty", anchor: "#warranty" },
      { title: "Acceptable Use", anchor: "#acceptable-use" },
    ],
  },

  "quality-assurance": {
    breadcrumbs: [
      { title: "Documentation", link: "#" },
      { title: "Quality Assurance", link: "#" },
    ],
    title: "Quality Assurance",
    description:
      "Testing strategy, automation guidance and release checklists to ensure high quality releases.",
    sections: [
      { type: "heading", level: 2, content: "Testing Strategy" },
      {
        type: "text",
        content:
          "Follow the test pyramid: unit tests for small logic, integration tests for API interactions, and E2E tests to validate user flows. Add security and accessibility scans as part of CI.",
      },
      { type: "heading", level: 2, content: "CI/CD & Release Checks" },
      {
        type: "list",
        items: [
          "Automated tests must pass on PRs",
          "Run accessibility checks (axe or similar)",
          "Performance smoke tests for long histories",
          "Update documentation and changelog entries before release",
        ],
      },
      { type: "heading", level: 2, content: "Post-Release Monitoring" },
      {
        type: "text",
        content:
          "Monitor support channels and error telemetry for regression. Triage and patch critical issues quickly using hotfix releases.",
      },
    ],
    tableOfContents: [
      { title: "Testing Strategy", anchor: "#testing-strategy" },
      { title: "CI/CD", anchor: "#ci-cd" },
      { title: "Post-Release", anchor: "#post-release" },
    ],
  },
};

if (typeof module !== "undefined" && module.exports)
  module.exports = { navigationData, headerNav, pageContent, sectionContents };
