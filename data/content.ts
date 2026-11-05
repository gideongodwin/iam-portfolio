export const profile = {
  name: "Gideon Godwin",
  title: "Identity and Access Management Analyst",
  headline: "The right people get in. Everyone else stays out.",
  intro:
    "I’m an identity and access management engineer. I design single sign-on, multi-factor authentication, and least-privilege access for companies with thousands of users and hundreds of apps.",
  email: "ggnsik@gmail.com",
  linkedin: "https://www.linkedin.com/in/gideongodwin/",
  closing: "Need access that’s secure and easy to use?",
  availability: "I’m open to full-time roles and consulting projects.",
};

export const projects = [
  {
    sector: "Financial services",
    years: "2024–2025",
    title: "Single sign-on for 140 apps",
    problem:
      "Staff kept 12 passwords on average and help-desk resets ate 30% of tickets.",
    built: "Okta SSO with SAML and OIDC, phased by business unit.",
    result: "Password resets fell by 71% in six months.",
  },
  {
    sector: "Healthcare",
    years: "2023–2024",
    title: "Automated joiner, mover, leaver",
    problem: "Leavers kept access for days after their last shift.",
    built:
      "HR-driven provisioning with SCIM, so account changes follow the HR record.",
    result: "Access removed within 15 minutes of termination.",
  },
  {
    sector: "Technology",
    years: "2022–2023",
    title: "Privileged access and quarterly reviews",
    problem: "Shared admin accounts and manual spreadsheet audits.",
    built:
      "Just-in-time admin access with approval and session recording, plus automated access certifications.",
    result: "Passed SOC 2 audit with no access findings.",
  },
];

export const skills = [
  {
    heading: "Identity platforms",
    body: "Okta, Microsoft Entra ID, Ping Identity, Auth0, Active Directory",
  },
  {
    heading: "Protocols and standards",
    body: "SAML 2.0, OAuth 2.0, OpenID Connect, SCIM, LDAP, FIDO2 and passkeys",
  },
  {
    heading: "Governance and privilege",
    body: "SailPoint, CyberArk, role-based and attribute-based access control, access reviews, Zero Trust",
  },
];

export const certifications = [
  "ISC2 CC",
  "Microsoft AZ-900",
  "Microsoft SC-300"
];
