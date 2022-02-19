import { NextPage } from "next";
import styles from "./services.module.scss";
import servicesImageIcon from "../../assets/icons/briefcase.gif";
import service1 from "../../assets/images/mobile_development.webp";
import service2 from "../../assets/images/web_development.jpg";
import Image from "next/image";
import technologiesUsed, {
  ServiceCardPropsInterface,
} from "../constants/technologies";
const Services: NextPage = () => {
  return (
    <>
      {" "}
      <section className={styles.servicesContainer}>
        <div className="container">
          <div className={styles.row}>
            <Image
              src={servicesImageIcon}
              alt="services-icon"
              width={30}
              height={30}
            />
            <p className={`${styles.servicesMainHeading} secondary-heading`}>
              Services
            </p>
          </div>
          <p className="primary-text">What’s Brewing In The Code Brew Lab?</p>
          <div className={styles.servicesGrid}>
            <div className={styles.servicesCol}>
              {/* <div className={styles.servicesBox}>
                <p className="primary-text">Mobile App Development</p>
                <ul>
                  <li className="secondary-text">iOS App</li>
                  <li className="secondary-text">Android App</li>
                  <li className="secondary-text">Native App</li>
                  <li className="secondary-text">Hybrid App</li>
                </ul>
              </div>
              <div className={styles.servicesBox}>
                <Image
                  src={service1}
                  alt="web development"
                  className={styles.serviceImage}
                />
              </div> */}
              <div className={styles.servicesListContainer}>
                <p className="primary-text">Mobile App Development</p>
                <ul>
                  <li className="secondary-text">iOS App</li>
                  <li className="secondary-text">Android App</li>
                  <li className="secondary-text">Native App</li>
                  <li className="secondary-text">Hybrid App</li>
                </ul>
              </div>
              <div className={styles.servicesColImageContianer}>
                <Image
                  src={service1}
                  alt="web development"
                  className={styles.serviceImage}
                />
              </div>
            </div>
            <div className={styles.servicesCol}>
              <div
                className={`${styles.servicesListContainer} ${styles.greenBackground}`}
              >
                <p className="primary-text">UI & UX Design</p>
                <ul>
                  <li className="secondary-text">Mobile & Web Design</li>
                  <li className="secondary-text">Product Design</li>
                  <li className="secondary-text">Brand & Logo Design</li>
                  <li className="secondary-text">Visual Design</li>
                </ul>
              </div>
              <div className={styles.servicesColImageContianer}>
                <Image
                  src={service2}
                  alt="web development"
                  className={styles.serviceImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.technologiesContainer}>
        <div className="container">
          <div className={styles.row}>
            <Image
              src={servicesImageIcon}
              alt="services-icon"
              width={30}
              height={30}
            />
            <p
              className={`${styles.technologiesMainHeading} secondary-heading`}
            >
              Our Core Service
            </p>
          </div>
          <div className={styles.technologiesGrid}>
            {technologiesUsed &&
              technologiesUsed.length > 0 &&
              technologiesUsed.map((card, index) => {
                const { icon, title, description } = card;
                return (
                  <ServiceCard
                    key={`technologies-card-${index}`}
                    icon={icon}
                    title={title}
                    description={description}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard: NextPage<ServiceCardPropsInterface> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.servicesCard}>
      <div className={`${styles.servicesCardImageContainer} ${styles.blob}`}>
        <Image
          src={icon}
          alt="icon"
          className={styles.servicesCardImage}
          width={50}
          height={50}
        />
      </div>
      <p className="secondary-text">{title}</p>
      <p className="normal-text">{description}</p>
    </div>
  );
};

export default Services;
