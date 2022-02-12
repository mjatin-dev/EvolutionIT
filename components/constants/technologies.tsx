import shield from "../../assets/icons/shield.png";
import briefcase from "../../assets/icons/briefcase.png";
import warning from "../../assets/icons/warning.png";
import stationery from "../../assets/icons/stationery.png";
import padlock from "../../assets/icons/padlock.png";
export interface ServiceCardPropsInterface {
  icon: StaticImageData;
  title?: string;
  description?: string;
}

const technologies: Array<ServiceCardPropsInterface> = [
  {
    icon: shield,
    title: "Mobile App Development",
    description:
      "Mobile apps fueled with powerful codes, unmatched stability and Imaginative designs to create an impact and influence actions.",
  },
  {
    icon: briefcase,
    title: "Web Development",
    description:
      "Optimal web designs carefully structured for easily accessing information and provide a unique user experience.",
  },
  {
    icon: warning,
    title: "Gaming Production",
    description:
      "Powerful and Interactive gaming production on platforms like Unity, UnrealEngine and AppGameKit to deliver only the best games.",
  },
  {
    icon: stationery,
    title: "Designing",
    description:
      "We create delightful user experiences through visually appealing colors and easily accessible designs to keep things interactive.",
  },
  {
    icon: padlock,
    title: "Digital Marketing",
    description:
      "Reach a wider audience and make yourself heard through our digital marketing strategies to increase your brand awareness and recognition.",
  },
  {
    icon: briefcase,
    title: "SEO",
    description:
      "We ensure your presence on the first page of search results through regular updates and quality backlink building.",
  },
];

export default technologies;
