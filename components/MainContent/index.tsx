import { motion } from "framer-motion";
import type { NextPage } from "next";
import styles from "./mainContent.module.scss";
import Typical from "react-typical";
const MainContent: NextPage = () => {
  return (
    <motion.div
      className={styles.mainBackground}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className={styles.container}>
        <motion.p
          className={styles.mainHeading}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: -12,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
          }}
        >
          We Zephyr&apos;s Success For You With Our{" "}
        </motion.p>
        <motion.p
          className={styles.mainHeading}
          initial="hidden"
          animate="visible"
          style={{ color: "#2196f3" }}
          variants={{
            hidden: {
              x: -12,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
          }}
        >
          <Typical
            steps={[
              "Exceptional Skills",
              1000,
              "Experience",
              1000,
              "Success",
              1000,
            ]}
            wrapper="span"
            loop={Infinity}
          />
        </motion.p>
        {/* <div className={styles.typedOut}>Web Developer</div> */}
      </div>
    </motion.div>
  );
};

export default MainContent;
