import laptop from "../../assets/icons/laptop.gif";
import shopping from "../../assets/icons/shopping.gif";
import worldwide from "../../assets/icons/worldwide.gif";

export interface Tab {
  links: Array<Link>;
  tabName: string;
  id: number;
  path: string;
}
interface Link {
  name: string;
  url: string;
  iconSrc: StaticImageData;
  path: string;
}

const headerTabs: Array<Tab> = [
  {
    links: [
      {
        name: "Web Development",
        url: "google.com",
        iconSrc: laptop,
        path: "/Development/WebDevelopment",
      },
      {
        name: "Mobile App Development",
        url: "google.com",
        iconSrc: shopping,
        path: "/Development/WebDevelopment",
      },
      {
        name: "Data Analytics",
        url: "google.com",
        iconSrc: worldwide,
        path: "/Development/WebDevelopment",
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
        iconSrc: worldwide,
        path: "/Development/WebDevelopment",
      },
      {
        name: "Internet",
        url: "google.com",
        iconSrc: laptop,
        path: "/Development/WebDevelopment",
      },
    ],
    tabName: "solutions",
    id: 2,
  },
  {
    links: [],
    tabName: "company",
    path: "/Development/WebDevelopment",
    id: 3,
  },
  {
    links: [],
    tabName: "portfolio",
    path: "/Development/WebDevelopment",
    id: 4,
  },
];

export default headerTabs;
