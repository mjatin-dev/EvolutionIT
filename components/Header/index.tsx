import type { NextPage } from "next";
import styles from "./header.module.scss";
import headerTabs from "../constants/headerTabs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Tab } from "../constants/headerTabs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import hamburgerMenuIcon from "../../assets/icons/hamburger-menu.png";
import closeIcon from "../../assets/icons/close-icon.png";
import logoIcon from "../../static/favicon.png";

const currentHoverTabInitialState: Tab = {
  links: [],
  tabName: "",
  id: 0,
};

const Header: NextPage = () => {
  const [currentHoverTab, setCurrentHoverTab] = useState<Tab>(
    currentHoverTabInitialState
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={styles.header}
      >
        <div
          className={styles.hamburgerContainer}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src={hamburgerMenuIcon}
            alt="hamburger-menu"
            width={20}
            height={20}
          />
        </div>
        <div className={styles.logoContainer} onClick={() => router.push("/")}>
          <Image src={logoIcon} width={30} height={30} alt="logo" />
          <h3>Logic Zephyr</h3>
        </div>
        <motion.div className={styles.tabsContainer}>
          <div
            className={styles.closeIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={closeIcon} alt="close-icon" width={20} height={20} />
          </div>
          {headerTabs &&
            headerTabs.map((tab) => {
              const { id, tabName, links, href } = tab;
              return (
                <motion.div
                  onHoverStart={(e) => {
                    setCurrentHoverTab(tab);
                  }}
                  onHoverEnd={(e) => {
                    setCurrentHoverTab(currentHoverTabInitialState);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={styles.tab}
                  key={id}
                  onClick={() => href && router.push(href)}
                >
                  <span>{tabName}</span>
                  <AnimatePresence>
                    {currentHoverTab.id === id && links && links.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`${styles.hoverTabContainer} grid grid-cols-2`}
                        key={`header-tab-${id}`}
                      >
                        {links.map((link) => {
                          return (
                            <div key={link.name} className={styles.hoverTab}>
                              <Link href={link.url} passHref>
                                <span className={styles.hoverTabTitle}>
                                  {link.name}
                                </span>
                              </Link>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
        </motion.div>
        <motion.div
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          className={styles.mobileBackdrop}
        >
          <motion.div
            animate={{ x: isMenuOpen ? 0 : -300 }}
            className={styles.tabsContainerMobile}
          >
            <div
              className={styles.closeIcon}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={closeIcon} alt="close-icon" width={20} height={20} />
            </div>
            {headerTabs &&
              headerTabs.map((tab) => {
                const { id, tabName, links } = tab;
                return (
                  <motion.div
                    onHoverStart={(e) => {
                      setCurrentHoverTab(tab);
                      console.log(tab);
                    }}
                    onHoverEnd={(e) => {
                      setCurrentHoverTab(currentHoverTabInitialState);
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={styles.tab}
                    key={id}
                  >
                    <span>{tabName}</span>
                    <AnimatePresence>
                      {currentHoverTab.id === id && links && links.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={styles.hoverTabContainer}
                          key={`header-tab-${id}`}
                        >
                          {links.map((link) => {
                            return (
                              <div key={link.name} className={styles.hoverTab}>
                                <Link href={link.url} passHref>
                                  <span className={styles.hoverTabTitle}>
                                    {link.name}
                                  </span>
                                </Link>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
          </motion.div>
        </motion.div>
        {/* <div
          className={`${styles.logoContainer} ${styles.headerButtonContainer}`}
        >
          <Button text="Get In Touch" className={styles.headerButton} />
        </div> */}
      </motion.header>
    </>
  );
};

export default Header;
