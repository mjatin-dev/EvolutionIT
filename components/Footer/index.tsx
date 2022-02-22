import type { NextPage } from "next";
import styles from "./footer.module.scss";

const Footer: NextPage = () => {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.footerCopyRight} container`}>
          <div>
            <p>
              © Copyright {new Date().getFullYear()} Logic Zephyr | All Rights
              Reserved
            </p>
          </div>
          <div>
            <a>Privacy Policy </a> |<a>Terms & conditions </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
