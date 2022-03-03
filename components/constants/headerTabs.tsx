export interface Tab {
  links: Array<Link>;
  tabName: string;
  id: number;
  href?: string;
}
interface Link {
  name: string;
  url: string;
}

const headerTabs: Array<Tab> = [
  {
    links: [
      {
        name: "Web Development",
        url: "/services/web-development",
      },
      {
        name: "Designing",
        url: "/services/ui-ux-design",
      },
      {
        name: "Digital Marketing",
        url: "/services/digital-marketing",
      },
      {
        name: "Search engine optimization",
        url: "/services/seo-marketing",
      },
      {
        name: "Full Stack Development",
        url: "/services/full-stack-development",
      },
    ],
    tabName: "services",
    id: 1,
  },

  {
    links: [],
    href: "/company",
    tabName: "company",
    id: 2,
  },
  {
    links: [],
    href: "/portfolio",
    tabName: "portfolio",
    id: 3,
  },
  {
    links: [],
    href: "/contact-us",
    tabName: "contact us",
    id: 4,
  },
  {
    links: [],
    href: "/careers",
    tabName: "career",
    id: 5,
  },
];

export default headerTabs;
