import type { NextPage } from "next";
import styles from "./header.module.scss";
import headerTabs from "../constants/headerTabs";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Tab } from "../constants/headerTabs";
import Image from "next/image";
import Link from "next/link";

const currentHoverTabInitialState: Tab = {
  links: [],
  tabName: "",
  id: 0,
  path: "",
};

const Header: NextPage = () => {
  const [currentHoverTab, setCurrentHoverTab] = useState<Tab>(
    currentHoverTabInitialState
  );
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={styles.header}
      >
        <div className={styles.logoContainer}>
          <h3>Logo</h3>
        </div>
        <div className={styles.tabsContainer}>
          {headerTabs &&
            headerTabs.map((tab) => {
              const { id, tabName, links } = tab;
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
                              <Image
                                src={link.iconSrc}
                                alt={link.name}
                                width={25}
                                height={25}
                              />
                              <Link
                                href={link.path}
                                className={styles.hoverTabTitle}
                              >
                                {link.name}
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
        </div>
        <div className={styles.logoContainer}>
          <Button text="Get In Touch" className={styles.headerButton} />
        </div>
      </motion.header>
    </>
  );
};

export default Header;
