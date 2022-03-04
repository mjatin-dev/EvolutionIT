import image from "../../assets/images/company.jpeg";
import competitivePrices from "../../assets/images/competitive-prices.svg";
import qualityWork from "../../assets/images/quality-work.svg";
import allUnderOneRoof from "../../assets/images/all-under-one-roof.svg";
import globePresence from "../../assets/images/globe-presence.svg";
import customizedAb from "../../assets/images/customized-ab.svg";
import certifiedProfessional from "../../assets/images/certified-professional.svg";

interface companyInterface {
  icon: StaticImageData;
  title: string;
  description: string;
}

interface CompanyInterface {
  companyHeader: string;
  image: StaticImageData;
  title: string;

  quality: Array<companyInterface>;
}

const companyData: CompanyInterface = {
  companyHeader: "",
  image: image,
  title: "How We Are",
  quality: [
    {
      icon: certifiedProfessional,
      title: "Certified Professionals",
      description:
        "Zephyr is proud of its certified employs. Our experts have gained certifications that have helped them in delivering quality results using updated and latest techniques that are time-saving and result oriented.",
    },
    {
      icon: globePresence,
      title: "Global Presence",
      description:
        "Zephyr services are not area restricted. Out list of clients is filled with professionals that have business in US, UK, Australia, Canada, and all around the world.",
    },
    {
      icon: allUnderOneRoof,
      title: "Competitive Prices",
      description:
        "With having certified employs in our team who know the latest techniques to accomplishing a task that cut down the time taken and cost, Zephyr has significantly lowered the service prices and has managed to serve the clients at an unmatchable price.",
    },
    {
      icon: competitivePrices,
      title: "Customized Approach",
      description:
        "Each hand has its own glove’ and ‘every client has his own requirements’. With this approach, we make our plans and package flexible enough to meet the client’s requirements. Get in touch now!",
    },
    {
      icon: customizedAb,
      title: "All Under One Roof",
      description:
        "From planning to development, development to marketing, marketing to consultation, Zephyr covers an array of services.",
    },
    {
      icon: qualityWork,
      title: "Quality Work",
      description:
        "Whether it is Marketing Automation Consultation, web designing and development work, internet marketing, Salesforce consultation, quality is never compromised.",
    },
  ],
};
export default companyData;
