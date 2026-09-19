// ============================================================
//  PROJECTS DATA — src/data/projects.js
//
//  لإضافة صورة لمشروع:
//  1. ضع الصورة في مجلد: public/images/ (يفضّل WebP بعرض 1200px)
//  2. عدّل خاصية image هنا مثلاً: "/images/plateau.webp"
//  إذا تركت image فارغة "" سيظهر الإيموجي تلقائياً
//
//  ملاحظة: category يجب أن تكون بأحرف صغيرة ومطابقة لمفاتيح catColors
//  site: اتركه "" إذا كان الموقع غير متاح حالياً (لا تضع رابطاً معطلاً)
// ============================================================

// ── المشاريع المميزة (تظهر كبطاقات كبيرة بتفاصيل) ──────────────
export const featuredProjects = [
  {
    title: "Sham Stores",
    tagline: "QR menus & online stores for Syrian businesses",
    role: "Founder · Full-stack developer",
    description:
      "A multi-tenant SaaS platform that lets restaurants and shops in Syria create a digital QR menu " +
      "and an online store in minutes — with ordering, local payments and full Arabic support.",
    points: [
      "Node.js & Express REST API with a multi-tenant MySQL data layer",
      "Customer web app in React: QR menus, storefronts and order placement",
      "Merchant dashboard for menus, products and the full order lifecycle",
      "Local payments (Sham Cash, cash on delivery) and Arabic RTL throughout",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "React.js", "REST API", "JWT"],
    image: "/images/shamstores.webp",
    site: "https://shamstores.com/",
  },
  {
    title: "Zoundr Flow",
    tagline: "Visual workflow automation platform",
    role: "Full-stack developer · Tessafold",
    description:
      "A workflow automation tool for Zoundr, a German music-rights company. Users design automated " +
      "processes visually, run them and follow every step.",
    points: [
      "Drag-and-drop node editor for building workflows in Vue.js",
      "Execution engine UI with live state, logs and run monitoring",
      "Integrated with Node.js APIs for orchestration and logging",
    ],
    stack: ["Vue.js", "Node.js", "REST API"],
    image: "/images/flow.webp",
    site: "https://flow.zoundr.dev/",
  },
  {
    title: "Zoundr Rights",
    tagline: "Rights & permissions management dashboard",
    role: "Front-end developer · Tessafold",
    description:
      "A dashboard for managing intellectual-property rights and user permissions across digital " +
      "content, built for international teams.",
    points: [
      "Granular role-based access control reflected throughout the UI",
      "Audit logging and real-time permission updates via the API",
      "Typed, maintainable front end with Vue.js and TypeScript",
    ],
    stack: ["Vue.js","Node.js", "REST API"],
    image: "/images/rights.webp",
    site: "https://rights.zoundr.dev/",
  },
];

// ── بقية المشاريع (أرشيف مع فلترة) ──────────────
export const projects = [
  {
    id: 23,
    title: "Sawalancer",
    category: ["react"],
    description: "Website for a creative agency — services, portfolio and blog in a fast, multilingual React + Vite build.",
    image: "/images/sawalancer.webp",
    emoji: "🪐",
    site: "https://sawalancer.com/",
    github: "",
    featured: false,
  },
  {
    id: 1,
    title: "Plateau Agency",
    category: ["vue.js"],
    description: "Website for a licensed marketing agency operating in Syria and Saudi Arabia — Vue.js + Tailwind CSS.",
    image: "/images/plateau.webp",
    emoji: "🎯",
    site: "https://plateau.media/",
    github: "",
    featured: true,
  },
  {
    id: 2,
    title: "Tessafold",
    category: ["react"],
    description: "Corporate website for a software development and AI company — React.js.",
    image: "/images/tessafold.webp",
    emoji: "🤖",
    site: "https://tessafold.com/",
    github: "",
    featured: true,
  },
  {
    id: 20,
    title: "Gym Management System",
    category: ["vue.js", "laravel"],
    description: "Management system for a fitness club — memberships, subscriptions and staff administration. Vue.js front end with a Laravel API.",
    image: "/images/gym.webp",
    emoji: "🏋",
    site: "",
    github: "",
    featured: false,
  },
  {
    id: 3,
    title: "Real Estate Platform",
    category: ["mern"],
    description: "Full MERN real-estate platform with separate user and admin dashboards.",
    image: "/images/real-state.webp",
    emoji: "🏠",
    site: "",
    github: "",
    featured: true,
  },
  {
    id: 4,
    title: "MSK Blog",
    category: ["mern"],
    description: "Full-stack MERN blogging platform with admin and user roles, state managed with Redux.",
    image: "/images/blog.webp",
    emoji: "📝",
    site: "",
    github: "",
    featured: true,
  },
  {
    id: 5,
    title: "Stamina Trading",
    category: ["react"],
    description: "Business website for a Saudi trading company — React.js, TypeScript and Tailwind CSS.",
    image: "/images/stamina.webp",
    emoji: "💹",
    site: "https://site.stamina.com.sa/",
    github: "",
    featured: false,
  },
  {
    id: 11,
    title: "SNC Contracting",
    category: ["vue.js"],
    description: "Website for a Saudi contracting company — Vue.js, Vite and Tailwind CSS.",
    image: "/images/SNC.webp",
    emoji: "🔧",
    site: "https://shamnet.com.sa/",
    github: "",
    featured: false,
  },
  {
    id: 6,
    title: "eCommerce Store",
    category: ["react", "mui"],
    description: "Full-stack online store — React and Material UI front end with a Strapi headless CMS back end.",
    image: "/images/MUI.webp",
    emoji: "🛒",
    site: "https://eco-muireact.netlify.app/",
    github: "https://github.com/saeed-karout/front-MUi-eco-",
    featured: false,
  },
  {
    id: 8,
    title: "Babkisan Restaurant",
    category: ["vue.js"],
    description: "Restaurant website with an interactive digital menu — Vue.js + Tailwind CSS.",
    image: "/images/babkisan.webp",
    emoji: "🍽",
    site: "",
    github: "",
    featured: false,
  },
  {
    id: 9,
    title: "Digital Menu",
    category: ["vue.js"],
    description: "QR-friendly digital food menu for a restaurant — Vue.js + Tailwind CSS.",
    image: "/images/menu.webp",
    emoji: "📋",
    site: "",
    github: "",
    featured: false,
  },
  {
    id: 10,
    title: "Digital Company Profile",
    category: ["react"],
    description: "Interactive digital company profile — React.js.",
    image: "/images/profileCompany.webp",
    emoji: "🏢",
    site: "",
    github: "",
    featured: false,
  },
  {
    id: 12,
    title: "ProStdios",
    category: ["vue.js"],
    description: "Website for a photography and video production studio — Vue.js.",
    image: "/images/prostdios.webp",
    emoji: "📸",
    site: "",
    github: "",
    featured: false,
  },
  {
    id: 14,
    title: "ASK App",
    category: ["vue.js"],
    description: "Question-and-answer web app — Vue.js + Tailwind CSS.",
    image: "/images/ask.webp",
    emoji: "❓",
    site: "https://ask-test.netlify.app/",
    github: "",
    featured: false,
  },
  {
    id: 15,
    title: "Orders Dashboard",
    category: ["bootstrap"],
    description: "Responsive order-management admin dashboard — Bootstrap + CSS.",
    image: "/images/Dashboardorder.webp",
    emoji: "📊",
    site: "https://saeed-karout.github.io/Dashboard-orders/system-admin/",
    github: "https://github.com/saeed-karout/Dashboard-orders",
    featured: false,
  },
  {
    id: 16,
    title: "Mini Market",
    category: ["bootstrap"],
    description: "Small storefront landing page — Bootstrap.",
    image: "/images/MiniMarket.webp",
    emoji: "🏪",
    site: "https://saeed-karout.github.io/miniMarket/",
    github: "https://github.com/saeed-karout/miniMarket",
    featured: false,
  },
  {
    id: 17,
    title: "Moon Project",
    category: ["css"],
    description: "3D Earth-and-Moon animation built with pure CSS.",
    image: "/images/MoonCss.webp",
    emoji: "🌙",
    site: "https://saeed-karout.github.io/Animation-Earth/",
    github: "https://github.com/saeed-karout/Animation-Earth",
    featured: false,
  },
  {
    id: 19,
    title: "Portfolio v1",
    category: ["react"],
    description: "My first personal portfolio — React.js + CSS.",
    image: "/images/portfolio.webp",
    emoji: "💼",
    site: "",
    github: "https://github.com/saeed-karout/portfolio",
    featured: false,
  },
  // {
  //   id: 7,
  //   title: "eCommerce Vuetify",
  //   category: ["vue.js", "vuetify"],
  //   description: "Online store built with Vue.js and the Vuetify framework.",
  //   image: "/images/eCommerceVuetify.webp",
  //   emoji: "🛍",
  //   site: "https://ecom-vuetify.netlify.app/",
  //   github: "https://github.com/saeed-karout/Front-eco-vuetify",
  //   featured: false,
  // },
  // {
  //   id: 18,
  //   title: "Bulma Fresh",
  //   category: ["bulma"],
  //   description: "Landing page built with the Bulma CSS framework.",
  //   image: "/images/Bulma.webp",
  //   emoji: "🌿",
  //   site: "https://saeed-karout.github.io/Bulma_freash/",
  //   github: "https://github.com/saeed-karout/Bulma_freash/",
  //   featured: false,
  // },
];

// ── لون كل تصنيف ────────────────────────────
export const catColors = {
  react:      "#61dafb",
  "vue.js":   "#42d392",
  mern:       "#4caf50",
  bootstrap:  "#a78bfa",
  css:        "#f97316",
  mui:        "#42a5f5",
  bulma:      "#00d1b2",
  vuetify:    "#1867c0",
  laravel:    "#f05340",
};

// ── الفلاتر تُولَّد تلقائياً من المشاريع الموجودة فقط (لا فلاتر فارغة)، مرتبة حسب عدد المشاريع ──
const catCounts = projects.flatMap(p => p.category)
  .reduce((acc, c) => ({ ...acc, [c]: (acc[c] || 0) + 1 }), {});
export const categories = ["all", ...Object.keys(catCounts).sort((a, b) => catCounts[b] - catCounts[a])];

// ── الاسم الظاهر لكل تصنيف ────────────────────
const catLabels = {
  all: 'All', react: 'React', 'vue.js': 'Vue.js', mern: 'MERN', bootstrap: 'Bootstrap',
  laravel: 'Laravel', mui: 'Material UI', css: 'CSS', bulma: 'Bulma', vuetify: 'Vuetify',
};
export const catLabel = (c) => catLabels[c] || c;
