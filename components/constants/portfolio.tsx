import project1 from "../../assets/images/online-shopping-bg-portfolio.jpg";
import ariglad from "../../assets/images/ariglad.png";
import ore from "../../assets/images/ore.png";
import zim from "../../assets/images/zim.png";
interface ProjectInterface {
  project_screenshot: StaticImageData;
  project_title: string;
  project_subtitle: string;
  project_description: string;
}

interface PortfolioInterface {
  portfolio_heading: string;
  projects: Array<ProjectInterface>;
}

const portfolioData: PortfolioInterface = {
  portfolio_heading: "",
  projects: [
    {
      project_screenshot: ariglad,
      project_title: "Bring calm to your teams mounting HR tasks.",
      project_subtitle:
        "HR ticketing and analytics built for leaders who want to elevate people-oriented priorities.",
      project_description:
        "Ariglad automatically captures employee messages across platforms. All you need to do is log into the dashboard to see your pending tasks organized for you.",
    },
    {
      project_screenshot: ore,
      project_title: "ORE FORGE - Next Gen NFT",
      project_subtitle:
        "Digital marketplace for Next-Gen crypto collectibles and non-fungible tokens. Buy, sell, and discover exclusive in-game digital assets.",
      project_description: "",
    },
    {
      project_screenshot: zim,
      project_title: "Zim/Zapp",
      project_subtitle:
        "Zim/Zapp is an application built to manage warehouses for the company ZAPP it’s a German-based company. The work of the project is to ease the process of their warehouses, they can create purchase orders, update the inventory of all the items, so we can easily scan the barcode for any item and get the RACK, SELF, number of that particular item.",
      project_description: "",
    },
  ],
};
export default portfolioData;
