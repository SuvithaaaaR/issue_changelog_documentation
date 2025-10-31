// data.clean.js — minimal manifest (clean replacement)
// Defines the globals expected by script.js

const navigationData = {
  sections: [
    {
      id: "app-overview",
      title: "App Overview / Introduction",
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
    { id: "pricing", title: "Pricing/Evaluation", expanded: false, items: [] },
    {
      id: "quality-assurance",
      title: "Quality Assurance",
      expanded: false,
      items: [],
    },
  ],
};

const headerNav = {
  title: "Issue Change Log",
  versions: ["1.2.15"],
  defaultVersion: "1.2.15",
};

const pageContent = {
  title: "Issue Change Log Documentation",
  subtitle: "Comprehensive guides and reference for the Issue Change Log app",
};

const sectionContents = {
  "app-overview": "./01-app-overview.md",
  features: "./05-features-capabilities.md",
  installation: "./02-installation-guide.md",
  configuration: "./03-configuration-setup.md",
  "user-guide": "./04-user-guide.md",
  faq: "./06-faq-troubleshooting.md",
  support: "./07-support-contact.md",
  "release-notes": "./08-release-notes.md",
  security: "./09-security-privacy.md",
  compliance: "./10-business-verification-compliance.md",
  marketplace: "./11-marketplace-listing.md",
  pricing: "./12-pricing-evaluation.md",
  "quality-assurance": "./15-quality-assurance.md",
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { navigationData, headerNav, pageContent, sectionContents };
}

// End of data.clean.js
