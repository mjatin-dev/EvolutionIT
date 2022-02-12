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
  iconSrc: StaticImageData;
}

const headerTabs: Array<Tab> = [
  {
    links: [
      {
        name: "Web Development",
        url: "google.com",
        iconSrc: laptop,
      },
      {
        name: "Mobile App Development",
        url: "google.com",
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
    links: [
      {
        name: "Internet of things",
        url: "google.com",
        iconSrc: worldwide,
      },
      {
        name: "Internet",
        url: "google.com",
        iconSrc: laptop,
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
