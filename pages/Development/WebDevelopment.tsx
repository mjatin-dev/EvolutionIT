import type { NextPage } from "next";
import { motion } from "framer-motion";
import styles from "./development.module.scss";

import Header from "../../components/Header";

const WebDevelopment: NextPage = () => {
  return (
    <>
      <Header />
      <motion.div
        className={styles.webDevelopment}
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
            Web Development
          </motion.p>
          <motion.p
            className={styles.mainSubHeading}
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
                  delay: 1.5,
                },
              },
            }}
          >
            Helping organizations weave a captivating story
          </motion.p>
          {/* <div className={styles.typedOut}>Web Developer</div> */}
        </div>

        <div className={styles.webDevelopmentContent}>
          <div className={styles.progressiveWebContent}>
            <h1>Progressive Web Apps</h1>
            <p>
              We build progressive web applications which are fast, accessible,
              intuitive and secure. Whether it’s just a website about your
              business or your clients, a CRM for your internal use or a whole
              database and operations management system to automate a business
              process, we build them all.
            </p>
          </div>

          <div className={styles.enterpriseWebDevelopment}>
            <div>
              <motion.div
                className={styles.enterpriseWebDevelopmentPortal}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div
                className={styles.enterpriseWebDevelopmentPortal}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div
                className={styles.enterpriseWebDevelopmentPortal}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WebDevelopment;
