import project1 from "../../assets/images/online-shopping-bg-portfolio.jpg";

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
      project_screenshot: project1,
      project_title: "Online Ordering and Delivery System",
      project_subtitle:
        "Exclusively designed online ordering and delivery system for doorstep delivery.",
      project_description:
        "The application allows the users to order seamlessly to their doorsteps from a local liquor store, compare their prices as well as schedule delivery time as per their liking.",
    },
    {
      project_screenshot: project1,
      project_title: "CellPoint Bids",
      project_subtitle:
        "Private Auction Marketplace exclusively designed for CellPoint Customers",
      project_description:
        "CP Bids is an application specifically designed to host the auction events of bulk mobile phones and their other accessories.",
    },
  ],
};
export default portfolioData;
