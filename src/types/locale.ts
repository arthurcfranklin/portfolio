export type NavigationId = "home" | "about" | "skills" | "projects" | "services" | "contact";

export type TimelineId = "ads-degree" | "systems-development-course";

export type StatId = "experience" | "projects" | "certifications";

export type SkillGroupId = "infrastructure" | "monitoring" | "development";

export type ProjectId = "forgedocs" | "libraryflow" | "infratracker";

export type ServiceId =
  | "technical-support"
  | "infrastructure"
  | "operating-systems"
  | "monitoring"
  | "automation"
  | "asset-management";

export type ContactId = "email" | "linkedin" | "location" | "phone";

export type NavigationLocaleItem = {
  label: string;
};

export type TimelineLocaleItem = {
  years: string;
  title: string;
  subtitle?: string;
  note?: string;
  description: string;
};

export type StatLocaleItem = {
  value: string;
};

export type SkillGroupLocaleItem = {
  title: string;
  items: string[];
};

export type ProjectLocaleItem = {
  name: string;
  tag: string;
  description: string;
};

export type ServiceLocaleItem = {
  title: string;
  description: string;
};

export type ContactLocaleItem = {
  label: string;
  value: string;
  action?: string;
};

export type ContactFormLocale = {
  fields: {
    name: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    phone: {
      label: string;
      placeholder: string;
    };
    subject: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
  };
  privacyNotice: string;
  submitButton: string;
  successMessage: string;
};

export type PortfolioLocale = {
  seo: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
  };

  header: {
    tagline: string;
    contactButton: string;
    mobileContactButton: string;
  };

  navigation: Record<NavigationId, NavigationLocaleItem>;

  hero: {
    firstName: string;
    lastName: string;
    roles: string[];
    description: string;
    resumeButton: string;
    projectsButton: string;
    socialLabels: {
      github: string;
      gitlab: string;
      linkedin: string;
      email: string;
    };
  };

  about: {
    sectionLabel: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    paragraphs: string[];
    academicTimelineTitle: string;
    timeline: Record<TimelineId, TimelineLocaleItem>;
    stats: Record<StatId, StatLocaleItem>;
  };

  skills: {
    sectionLabel: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    description: string;
    groups: Record<SkillGroupId, SkillGroupLocaleItem>;
  };

  projects: {
    sectionLabel: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    viewAllButton: string;
    viewProjectButton: string;
    items: Record<ProjectId, ProjectLocaleItem>;
  };

  services: {
    sectionLabel: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    description: string;
    items: Record<ServiceId, ServiceLocaleItem>;
  };

  contact: {
    sectionLabel: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    description: string;
    items: Record<ContactId, ContactLocaleItem>;
    form: ContactFormLocale;
  };

  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
    socialTitle: string;
    websiteLabel: string;
    copyright: string;
    signature: string;
    backToTop: string;
    backToTopAriaLabel: string;
  };
};
