import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "Minted Directory",
    logo: "/kleanthara.jpg",
    iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "Minted Directory",
    description: "Example Description",
    url: "https://nuxt3r.nuxt.space",
    favicon: {
      image: "/kleanthara.jpg",
      emoji: "/kleanthara.jpg",
    },
  },
  directory: {
    search: {
      placeholder: "Search among {0} tools",
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: true,
      emptyState: {
        text: "Seems that this entry is missing from the archives.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Submit a template",

        description:
          "Submit a template to show off a good project to other people.",

        hideable: true,
        icon: "i-pepicons-clapperboard",
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
      { name: "SAAS", color: "blue" },
      { name: "dashboard", color: "green" },
      { name: "landing-page" },
      { name: "toolbox" },
      { name: "agency" },
      { name: "markdown-based" },
      { name: "basics", color: "indigo" },
    ],
    tagPages: {
      title: "Available {0} products:",
      description:
        "View all available tools and templates in the {0} category...",
    },
  },
  header: {
    banner: {
      show: true,
      text: "Create your own directory website in minutes.",
      link: "https://minteddirectory.com",
      brandText: "MintedDirectory",
    },
    navbar: {
      colorModeSelector: true,
      links: [
        { name: "Directory", to: "/" },
        { name: "Blog", to: "/blog" },
        { name: "Advertise", to: "/advertise" },
        {
          name: "Analytics",
          to: "https://us.posthog.com/shared/7dgSk4cvgNYnJwBu6R47kZXHBUBJWQ",
          target: "_blank",
        },
      ],
    },
    actionButton: {
      text: "Submit a starter",
      href: "/submit",
    },
  },
  footer: {
    description: "Best directory for my niche.",
    socials: {
      github: {
        link: "/kleanthara.jpg",
        icon: "tabler:brand-github",
      },
      facebook: {
        link: "",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "https://x.com/DeniOliK",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "https://www.youtube.com/@deniskropp",
        icon: "tabler:brand-youtube",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});