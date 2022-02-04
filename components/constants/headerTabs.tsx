interface Tab {
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
        url: "google.com",
      },
      {
        name: "Mobile App Development",
        url: "google.com",
      },
    ],
    tabName: "services",
    id: 1,
  },
  {
    links: [],
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
