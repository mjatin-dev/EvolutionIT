import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Header from "../../components/Header";
import styles from "./style.module.scss";
import servicesIcon from "../../assets/icons/briefcase.png";
import positions from "../../components/constants/careers";
import Footer from "../../components/Footer";
const tabs: Array<string> = ["Jobs"];
const Careers: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.pageDescription}>
          <p className="secondary-heading">Work with us</p>
          <p className="normal-text">
            Be a part of the change, we at apps maven believe in individual
            growth first, which helps us bring the best out of our assets and
            resources. Our team is our backbone and they are treated with
            paramount respect at all times, we understand the different
            requirements needed in order to relax and work at your best.
          </p>
        </div>
        <div className={styles.jobsSection}>
          <p className={`${styles.bottomLine} secondary-heading`}>
            Open positions
          </p>
          <div className={styles.tabs}>
            {tabs.map((tab) => {
              return (
                <>
                  <p
                    className={`${styles.tab} ${
                      activeTab === tab ? styles.tabActive : ""
                    } secondary-text`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </p>
                </>
              );
            })}
          </div>
          <div className={styles.positionsListContianer}>
            {positions &&
              positions.map((position) => {
                const { jobId, jobTitle, experienceRequired } = position;
                return (
                  <div
                    key={`jobId-${jobId}`}
                    className={styles.positionContainer}
                  >
                    <div>
                      <p className={styles.jobTitle}>{jobTitle}</p>
                      <Image
                        src={servicesIcon}
                        alt="experience"
                        width={10}
                        height={10}
                      />
                      <span className={styles.jobExperienceText}>
                        {experienceRequired}
                      </span>
                    </div>
                    <a href={`mailto:hr@logiczephyr.com?subject=${jobTitle}`}>
                      <button className={styles.learnMoreButton}>
                        Submit CV
                      </button>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
