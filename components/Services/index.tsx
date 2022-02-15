import { NextPage } from "next";
import styles from "./services.module.scss";
import servicesImageIcon from "../../assets/icons/briefcase.gif";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Services: NextPage = () => {
  const x = useMotionValue(0);
  const input = [-200, 300, 300];
  const output = [0, 1, 1];
  const opacity = useTransform(x, input, output);
  return (
    <section className={styles.servicesContainer}>
      <div className="container">
        <motion.div drag="x" style={{ x, opacity }} className={styles.row}>
          <Image
            src={servicesImageIcon}
            alt="services-icon"
            width={30}
            height={30}
          />
          <p className={`${styles.servicesMainHeading} secondary-heading`}>
            Services
          </p>
        </motion.div>
        <p className="primary-text">What’s Brewing In The Code Brew Lab?</p>
      </div>
    </section>
  );
};

export default Services;
