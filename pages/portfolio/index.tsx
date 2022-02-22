import { NextPage } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import portfolioBackground from "../../assets/images/portfolio-background.jpg";
import projectData from "../../components/constants/portfolio";
const Portfolio: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Image src={portfolioBackground} alt="project" />
        {projectData &&
          projectData.projects &&
          projectData.projects.length > 0 &&
          projectData.projects.map((project, index) => {
            return (
              <div
                key={`portfolio-project-${index}`}
                className={styles.projectContainer}
              >
                <div className={styles.projectDescription}>
                  <p className="primary-text">{project.project_title}</p>
                  <p className="secondary-text">{project.project_subtitle}</p>
                  <p className="normal-text">{project.project_description}</p>
                </div>
                <div className={styles.projectImageContainer}>
                  <Image
                    src={project.project_screenshot}
                    alt={project.project_title}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Portfolio;