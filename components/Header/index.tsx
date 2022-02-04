import type { NextPage } from "next";
import styles from "./header.module.scss";
import headerTabs from "../constants/headerTabs";
import Button from "../Button";

const Header: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h3>Logo</h3>
        </div>
        <div className={styles.tabsContainer}>
          {headerTabs &&
            headerTabs.map((tab) => {
              const { id, tabName } = tab;
              return (
                <div className={styles.tab} key={id}>
                  <span>{tabName}</span>
                </div>
              );
            })}
        </div>
        <div className={styles.logoContainer}>
          <Button text="Get In Touch" className={styles.headerButton} />
        </div>
      </header>
      <div className={styles.mainBackground}>
        <div className={styles.container}>
          <h3>We are evolution</h3>
          <div className={styles.typedOut}>Web Developer</div>
        </div>
      </div>
    </>
  );
};

export default Header;
