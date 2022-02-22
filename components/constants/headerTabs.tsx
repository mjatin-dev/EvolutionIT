import laptop from "../../assets/icons/laptop.gif";
import shopping from "../../assets/icons/shopping.gif";
import worldwide from "../../assets/icons/worldwide.gif";

export interface Tab {
  links: Array<Link>;
  tabName: string;
  id: number;
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
    links: [
      {
        name: "Internet of things",
        url: "google.com",
      },
      {
        name: "Internet",
        url: "google.com",
      },
    ],
    tabName: "solutions",
    id: 2,
  },
  {
    links: [],
    tabName: "company",
    id: 3,
  },
  {
    links: [],
    tabName: "portfolio",
    id: 4,
  },
];

export default headerTabs;
