import onlineSecurity from "../../assets/icons/online-security.png";
import smartphone from "../../assets/icons/smartphone.png";
import stationery from "../../assets/icons/stationery.png";
import laptop from "../../public/icons/laptop.png";
import shopping from "../../assets/icons/shopping.png";
import techSupport from "../../assets/icons/tech-support.png";
import virus from "../../assets/icons/virus.png";
import share from "../../assets/icons/share.png";
import sdf from "../../public/icons/laptop.png";

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
        image: laptop,
        title: "Custom Web Apps",
        description:
          "We build customized web apps based on your requirements. Whether you’re looking to take your business online or you have a new idea about an application which could make an impact on the web, we can deliver it for you.",
      },
      {
        image: shopping,
        title: "E-Commerce Websites",
        description:
          "Want an exclusive store online where people can directly buy and sell on your platform, well then, you’ve landed at the right spot. We build E-commerce easy, starting from user acquisition to the final sale we make everything work for you.",
      },
      {
        image: share,
        title: "Microsites and Plugins",
        description:
          "Looking to provide information more easily through different sets of web pages? Or thinking about creating a Plugin to add new features to your current program? We can help you build microsites and plugins in no time. Just tell us what you think and we will get to it.",
      },
      {
        image: laptop,
        title: "Web Portals",
        description:
          "Have an idea about a portal for engagement or an online magazine which can collect information from different sources and present it on your website, then we’re your choice. We make engaging web portals with massive scalability features.",
      },
      {
        image: stationery,
        title: "Sass",
        description:
          "We build custom applications which can be purchased and used online by your customers rather than downloading and installing a program on their systems. Giving your users more freedom and accessibility from anywhere in the world.",
      },
      {
        image: techSupport,
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
          icon: laptop,
          title: "Web Portals",
          description:
            "We create custom web portals for Database Management, Operations Management, Systems Management and more to help your business grow at each level.",
        },
        {
          icon: shopping,
          title: "E-commerce Web Solutions",
          description:
            "E-commerce is booming, is your business booming with it? Well, if the answer is No then we can help you build and manage your own e- commerce website at affordable costs in no time.",
        },
        {
          icon: laptop,
          title: "Web Applications",
          description:
            "Creating Web Applications to engage with your customers in real time. We understand the importance and the scale of your business and create web apps that assist your business and add value to it.",
        },
      ],
    },
  },
  {
    path: "ui-ux-design",
    name: "Designing",
    smallDescription: "",
    backgroundImage: "/designing.jpg",

    techDetails: [
      {
        image: stationery,
        title: "UX Design",
        description:
          "UX is all about the functionality of your design and how it operates with your users and with the help of our user centric approach and extensive research we create awesome designs.",
      },
      {
        image: onlineSecurity,
        title: "User Research & Strategy",
        description:
          "Users are everything, they decide what works and what doesn’t and we like to know them well. We constantly research about their tastes and preferences and understand the direction they are moving in so that we are there when they reach a new place.",
      },
      {
        image: virus,
        title: "User Personas",
        description:
          "User personas are profiles which imitate a real person and are based on user research like user behavior's, attitudes, likes and dislikes which help in designing and understanding the design from a users perspective.",
      },
      {
        image: laptop,
        title: "User Stories & Flows",
        description:
          "We carefully carve a path for the user to understand and learn about your product, have reasons to go for it and finally let them know how to go about it.",
      },
      {
        image: share,
        title: "Wireframes & Prototyping",
        description:
          "This helps in finding a solution for user validation meaning how to provide a solution for a particular problem the user is facing and in providing relevant feedback to enhance the build.",
      },
      {
        image: stationery,
        title: "User Interface Design",
        description:
          "This is the final step where we create interactive designs focussed on the user and assess how visual elements are laid out, how they look and feel and finally how responsive they are.",
      },
    ],
  },
  {
    path: "digital-marketing",
    name: "",
    smallDescription: "",
    backgroundImage: "/digital_marketing.jpg",
    techDetails: [
      {
        image: share,
        title: "Pay per click campaigns",
        description:
          "Pay per click campaigns are used by everyone to generate instant results and reach directly to the customers through adverts. Online ads are much cheaper as compared to print and television ads making it even more useful and valuable. Large scale platforms like Google, Facebook and Twitter have their own advertising tools and we leverage in order to drive results for you.",
      },
      {
        image: laptop,
        title: "Social Media Marketing",
        description:
          "Some people say that social media is dying but contrary to that belief, it works really well for businesses and marketing activities. Everyone has an account at least on one social networking platform if not more and we help you get your message across to them.",
      },
      {
        image: shopping,
        title: "Content Marketing",
        description:
          "Creating good content is serious business and it requires a lot of work. Our content team can help you write amazing blog posts, create eye catching banners and stills, and make awesome videos through advanced tools like Adobe Creative Cloud and Cored Draw.",
      },
      {
        image: smartphone,
        title: "Branding and PR",
        description:
          "We also help you with branding and PR activities which provide widespread awareness in no time. We can get articles published on popular websites and newspapers related to your industry and help you gain trust and recognition by influencer marketing techniques which can boost your business rapidly.",
      },
    ],
  },
  {
    path: "seo-marketing",
    name: "Search engine optimization",
    smallDescription: "",
    backgroundImage: "/seo.jpg",

    techDetails: [
      {
        image: laptop,
        title: "Keyword Research",
        description:
          "The first step is to analyze what are people actively searching for and which of these searches are relevant for your your business. For example, Simply typing your query on google search will give you the results which were most relevant for that query.",
      },
      {
        image: share,
        title: "On-Page Optimization",
        description:
          "You have multiple web pages on your website and on page optimization is all about ranking those pages individually in the search results for different keywords they provide information about and using those keywords in important html tags.",
      },
      {
        image: shopping,
        title: "Competition Analysis",
        description:
          "The second step after you’ve figured the keywords you want your web optimization to rank for is to assess the current performance as compared to the leaders in your industry who are already showing up on the first page in the search results for those particular keywords.",
      },
      {
        image: laptop,
        title: "Off-Page Optimization",
        description:
          "So you’ve got the above steps fixed and are waiting for the results, well it’s not so easy. After you’ve got your website optimization steps right, it’s time for link building from high authority and trust flow websites which point the user from their website to yours.",
      },
    ],
  },
  {
    path: "full-stack-development",
    name: "Full Stack Development",
    smallDescription: "",
    backgroundImage: "/full_stack.jpg",

    techDetails: [
      {
        image: smartphone,
        title: "Front End Development",
        description:
          "Front end development is the representation of data useful to your users with a graphic interface which lets them engage and interact with the data shown through your application. We make awesome user interfaces and experiences for your users to retain them on your app through our Front-end Development capabilities.",
      },
      {
        image: laptop,
        title: "Back-End Development",
        description:
          "Back-end is the engine which powers your app to provide a seamlessly exclusive experience for your users through creating components and functionality based on their interests. We help build powerful logical computations and apply it to your app.",
      },
      {
        image: share,
        title: "Cloud Hosting",
        description:
          "We help you create a cloud-based infrastructure for your applications which help you scale faster and perform better. Our cloud hosting services also gives your app the flexibility to add new features and modules easily.",
      },
    ],
  },
];

export default services;
