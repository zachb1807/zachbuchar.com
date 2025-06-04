import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Zach Buchar",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Zach Buchar",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

export const PHOTOGRAPHY: Page = {
  TITLE: "Photography",
  DESCRIPTION: "My photography portfolio.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Resume", 
    HREF: "/resume", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Photography", 
    HREF: "/photography", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "me@zachbuchar.com",
    HREF: "mailto:me@zachbuchar.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "zachb1807",
    HREF: "https://github.com/zachb1807"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "buchar",
    HREF: "https://www.linkedin.com/in/buchar",
  },
]

