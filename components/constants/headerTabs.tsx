import laptop from "../../assets/icons/laptop.gif";
import shopping from "../../assets/icons/shopping.gif";
import worldwide from "../../assets/icons/worldwide.gif";

export interface Tab {
  links: Array<Link>;
  tabName: string;
  id: number;
  href?: string;
}
interface Link {
  name: string;
  url: string;
  iconSrc: StaticImageData;
}

const headerTabs: Array<Tab> = [
  {
    links: [
      {
        name: "Web Development",
        url: "/services/web-development",
        iconSrc: laptop,
      },
      {
        name: "Mobile App Development",
        url: "/services/app-development",
        iconSrc: shopping,
      },
      {
        name: "Data Analytics",
        url: "google.com",
        iconSrc: worldwide,
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
