export const profile = {
  name: "Manish Bhuva",
  title: "Senior Technical Architect",
  tagline:
    "18+ years building web platforms across PHP, Python, and modern JavaScript — from Laravel and Magento 2 to React, Vue, and Node.js — deployed and scaled on AWS.",
  location: "India",
  email: "manish.bhuvait@gmail.com",
  phone: "+91 94288 89935",
  resumeUrl: `${import.meta.env.BASE_URL}Manish_Bhuva_Resume.pdf`,
  social: {
    github: "https://github.com/manishpg83",
    linkedin: "https://www.linkedin.com/in/magentoexpert1/",
  },
};

// Rotated by the typing animation in the hero.
export const roles = [
  "Senior Technical Architect",
  "Laravel & PHP Expert",
  "Magento 2 Specialist",
  "Shopify & WooCommerce Developer",
  "AI Solutions Builder",
  "Technical Lead",
];

// Eyebrow label, heading and subtitle shown at the top of each section.
export const sectionIntros = {
  about: {
    eyebrow: "About Me",
    title: "Architecting platforms that scale",
    subtitle: "Two decades of turning business problems into reliable, maintainable software.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Technologies I work with",
    subtitle: "The stack I choose from to fit each problem — not the other way round.",
  },
  highlights: {
    eyebrow: "Highlights",
    title: "Track record",
    subtitle: "What 18+ years of delivery looks like in numbers and outcomes.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Featured work",
    subtitle: "Live client platforms across Laravel, CodeIgniter, Magento, WordPress, and Shopify.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something together",
    subtitle: "Have a project in mind or just want to say hi? My inbox is always open.",
  },
};

export const stats = [
  { label: "Years of Experience", value: "18+" },
  { label: "Projects Delivered", value: "100+" },
  { label: "E-commerce Implementations", value: "40+" },
  { label: "Domains: Gov, Health, E-com, SaaS", value: "4" },
];

export const about = {
  paragraphs: [
    "I'm a Senior Technical Architect with 18+ years of experience designing, building, and scaling web platforms — from custom PHP/Laravel and Python/Django applications to large Magento 2 e-commerce implementations.",
    "I've delivered 100+ web projects and 40+ e-commerce builds across government, healthcare, e-commerce, and SaaS domains, taking projects from architecture and solution design through AWS deployment and ongoing infrastructure management.",
    "My stack spans PHP (Laravel, Yii, CodeIgniter), Python, and JavaScript across the full modern front-end landscape — React, Next.js, Vue.js, Angular, and Node.js — plus secure RESTful JSON APIs and solid object-oriented design.",
    "Beyond hands-on development, I lead teams and own technical direction — choosing the right stack for the problem, whether that's Laravel and Vue.js, Django REST Framework, Magento 2, or a WooCommerce/Shopify storefront.",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: ["PHP", "Python", "Node.js", "Laravel", "Yii", "CodeIgniter", "Django", "Flask", "OOP", "Secure REST APIs (JSON)"],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "jQuery", "React.js", "Next.js", "Vue.js", "Angular.js", "HTML5 & CSS3"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "E-commerce Platforms",
    items: ["Magento 2", "Magento 1.x Migration", "WordPress", "WooCommerce", "OpenCart", "Shopify"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Cloud Deployment", "Infrastructure Management"],
  },
  {
    category: "Leadership",
    items: ["Solution Architecture", "Technical Leadership", "Team Leadership", "Client Delivery"],
  },
];

export const highlights = [
  { title: "18+ Years of Professional Experience", detail: "Career spanning PHP, Python, and e-commerce platform engineering." },
  { title: "100+ Successful Web Projects Delivered", detail: "End-to-end delivery from architecture through launch and support." },
  { title: "40+ E-commerce Implementations", detail: "Magento 2, WooCommerce, and Shopify storefronts and migrations." },
  { title: "AWS Cloud Deployment & Infrastructure", detail: "Hands-on cloud deployment and ongoing infrastructure management." },
  { title: "Multi-Domain Expertise", detail: "Government, healthcare, e-commerce, and SaaS project experience." },
  { title: "Team Leadership & Solution Architecture", detail: "Technical lead on client engagements, owning architecture decisions." },
];

export const projectGroups = [
  {
    category: "Laravel Projects",
    items: [
      { name: "Celergen Swiss", description: "Ecommerce, Inventory, Stock, Invoices, Reports", link: "https://celergenswiss.com/" },
      { name: "Khello", description: "Ecommerce Online Order System", link: "https://khello.com.au/" },
      { name: "NC Health Hub", description: "Frontend, Backend and REST APIs", link: "https://www.nchealthhub.com/" },
      { name: "The Swell", description: "Membership & Stripe Subscription Integration", link: "https://theswell.com/" },
      { name: "Empower", description: "The Movement Module + Backend VueJS", link: "https://www.empower.co.tz/" },
      { name: "ClickWik", description: "Maintenance and Support", link: "https://clickwik.in/" },
      { name: "Brisk Brain Tech", description: "CMS and Blog", link: "https://briskbraintech.com/" },
    ],
  },
  {
    category: "Python / Django Projects",
    items: [
      { name: "Ohtel Global", description: "Django REST Framework, Vue.js, OTP Login, Booking Modules", link: "https://ohtelglobal.com/" },
      { name: "Flask CRUD App", description: "Open-source Flask CRUD application", link: "https://github.com/manishpg83/flask" },
      { name: "Alma Health", description: "Healthcare Dashboards", link: "https://almasuper.almahealth.tech/" },
      { name: "Newhom", description: "Real Estate Platform with Google Meet Booking", link: "https://www.newhom.com.au/" },
    ],
  },
  {
    category: "Magento Projects",
    items: [
      { name: "Snaggletooth Studios", description: "Magento 2 Booking Features", link: "https://snaggletoothstudios.com/" },
      { name: "ShopDap", description: "Maintenance & Design Enhancements", link: "https://www.shopdap.com" },
      { name: "Fanous", description: "Magento 1.5 to Magento 2 Migration", link: "https://fanous.com/" },
      { name: "Crew Outfitters", description: "Ecommerce Enhancements", link: "https://crewoutfitters.com/" },
    ],
  },
  {
    category: "WordPress / WooCommerce",
    items: [
      { name: "Digialch", description: "WordPress build & support", link: "https://digialch.com/" },
      { name: "G4Gift", description: "WooCommerce storefront", link: "https://g4gift.in/" },
    ],
  },
  {
    category: "Shopify",
    items: [
      { name: "MYK Go", description: "Shopify storefront", link: "https://myk-go.com/" },
      { name: "Ledtronix", description: "Shopify storefront", link: "https://ledtronix.co.za/" },
      { name: "N&D Fashion", description: "Shopify storefront", link: "https://www.nandfashion.com/" },
    ],
  },
];
