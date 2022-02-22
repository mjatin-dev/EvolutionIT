import { motion } from "framer-motion";
import type { NextPage } from "next";
import styles from "./mainContent.module.scss";
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
          We are <span>Zephyr&apos;s </span>Success For You With Our Exceptional
          Skills.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default MainContent;
