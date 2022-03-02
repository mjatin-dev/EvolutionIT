import briefcase from "../../assets/icons/briefcase.png";
import Background from "../../assets/images/web_development.jpeg";

export interface TechSectionInterface {
  image: StaticImageData;
  title: string;
  description: string;
}
export interface Category {
  icon: StaticImageData;
  title: string;
  description: string;
}
export interface ServicesCatgory {
  title: string;
  shortDescription: string;
  categories: Array<Category>;
}
export interface ServiceInterface {
  path: string;
  name: string;
  smallDescription: string;
  techDetails: Array<TechSectionInterface>;
  serviceCategories?: ServicesCatgory;
  backgroundImage: string;
}

const services: Array<ServiceInterface> = [
  {
    path: "web-development",
    name: "Web Development",
    smallDescription: "Helping organizations weave a captivating story",
    backgroundImage: "/wb.jpg",
    techDetails: [
      {
        image: briefcase,
        title: "Custom Web Apps",
        description:
          "We build customized web apps based on your requirements. Whether you’re looking to take your business online or you have a new idea about an application which could make an impact on the web, we can deliver it for you.",
      },
      {
        image: briefcase,
        title: "E-Commerce Websites",
        description:
          "Want an exclusive store online where people can directly buy and sell on your platform, well then, you’ve landed at the right spot. We build E-commerce easy, starting from user acquisition to the final sale we make everything work for you.",
      },
      {
        image: briefcase,
        title: "Microsites and Plugins",
        description:
          "Looking to provide information more easily through different sets of web pages? Or thinking about creating a Plugin to add new features to your current program? We can help you build microsites and plugins in no time. Just tell us what you think and we will get to it.",
      },
      {
        image: briefcase,
        title: "Web Portals",
        description:
          "Have an idea about a portal for engagement or an online magazine which can collect information from different sources and present it on your website, then we’re your choice. We make engaging web portals with massive scalability features.",
      },
      {
        image: briefcase,
        title: "Sass",
        description:
          "We build custom applications which can be purchased and used online by your customers rather than downloading and installing a program on their systems. Giving your users more freedom and accessibility from anywhere in the world.",
      },
      {
        image: briefcase,
        title: "Maintenance & Support",
        description:
          "The scope of development is endless with us but what makes an application work is a constant effort that goes behind the live app to ensure stability and best performance. We provide the best in class maintenance and support services.",
      },
    ],
    serviceCategories: {
      title: "Enterprise Web Development",
      shortDescription:
        "We help you manage your business online effectively through our customized enterprise digital solutions for the web.",
      categories: [
        {
          icon: briefcase,
          title: "Web Portals",
          description:
            "We create custom web portals for Database Management, Operations Management, Systems Management and more to help your business grow at each level.",
        },
        {
          icon: briefcase,
          title: "E-commerce Web Solutions",
          description:
            "E-commerce is booming, is your business booming with it? Well, if the answer is No then we can help you build and manage your own e- commerce website at affordable costs in no time.",
        },
        {
          icon: briefcase,
          title: "Web Applications",
          description:
            "Creating Web Applications to engage with your customers in real time. We understand the importance and the scale of your business and create web apps that assist your business and add value to it.",
        },
      ],
    },
  },
  {
    path: "app-development",
    name: "Android Development",
    smallDescription: "",
    backgroundImage: "/mb.jpg",
    techDetails: [
      {
        image: briefcase,
        title: "iOS App Building Process",
        description:
          "Just like Apple, we align ourselves with the “Think Different” tagline in our thoughts before we start a project. iOS users are more demanding than android and they look for perfection in each iOS app they install. The steps below will show you how we get to the level of perfection",
      },
      {
        image: briefcase,
        title: "Wireframing and Mock-Up",
        description:
          "From the looks of your iOS application to its usefulness, we develop everything with our focus on detail and ease of accessibility. An app communicates the way it’s designed and we help you get your message through to your user.",
      },
      {
        image: briefcase,
        title: "Code Building and Debug",
        description:
          "Once the wireframing and experience is designed, we write a strong codebase which works behind the app to make it functional and provide usefulness. We test it at different stages and make sure that there are no crashes in the final build.",
      },
      {
        image: briefcase,
        title: "Delivery and Support",
        description:
          "Finally, we launch your app when the time is right and get your downloads started to see how your app fulfils the purpose it was created for and continuously provide support to keep it running at it’s best. We also suggest timely updates to keep your app exciting and up to the mark.",
      },
    ],
  },
];

export default services;
