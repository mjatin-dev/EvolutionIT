export interface MilestoneItem {
  count: number;
  title: string;
  description: string;
}
export interface Milestone {
  heading: string;
  list: Array<MilestoneItem>;
}
const milestone: Milestone = {
  heading:
    "Effortlessly transparent, Carefully Structured and easily manageable milestones",
  list: [
    {
      count: 1,
      title: "Research and Planning",
      description:
        "Before anything else we try to understand your business and your needs to provide solutions which can really add value.",
    },
    {
      count: 2,
      title: "Workflow Planning",
      description:
        "Then we decide the app architecture based on your functional requirements and create a framework of how the app works and behaves.",
    },
    {
      count: 3,
      title: "UI/ UX Design",
      description:
        "Developing wireframes, creating unique interfaces and striking designs using tools like Adobe XD, Photoshop and UXpin.",
    },
    {
      count: 4,
      title: "Development and Coding",
      description:
        "This is where your app actually starts coming to life through the help of our programmers and developers who write amazing codes.",
    },
    {
      count: 5,
      title: "Deployment and Maintenance",
      description:
        "Once the development is complete we test your apps for stability and scalability under extreme loads so they don’t crash.",
    },
    {
      count: 6,
      title: "Protocols built for progress",
      description:
        "Finally we help you shape strategies which will help monetize and scale your apps for more engagements and stay up to date.",
    },
  ],
};

export default milestone;
