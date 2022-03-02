import { ServiceCardPropsInterface } from "../constants/technologies";
import { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";

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

export default ServiceCard;
