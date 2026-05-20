import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Juliane Möllmann, PhD",
  description:
    "Postdoc researcher specializing in innovation management, strategy, corporate-startup collaborations, and qualitative methods.",
  url: "https://julianemoellmann.github.io/julianemoellmann",
  lang: "en",
  locale: "en_US",
  author: "Juliane Möllmann",
  twitter: "@julianemoellmann", // Update if known
  ogImage: ogImage,
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/julianemoellmann/",
    researchgate: "https://www.researchgate.net/profile/Juliane-Moellmann-2",
    googleScholar: "https://scholar.google.com/citations?user=Qn9rsNYAAAAJ&hl=de&oi=ao",
    orcid: "https://orcid.org/0000-0003-1697-4590",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Research", href: "/research" },
    { text: "Teaching", href: "/teaching" },
    { text: "Education", href: "/education" },
    { text: "Community Roles", href: "/community-roles" },
    { text: "Industry Work", href: "/industry-work" },
  ],
};
