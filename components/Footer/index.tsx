import type { NextPage } from "next";
import Image from "next/image";
import styles from "./footer.module.scss";
import FooterImage from "../../assets/images/footer.svg";
import ContactUsImage from "../../assets/icons/contactus.png";

const Footer: NextPage = () => {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <div className={styles.contactUs}>
            <Image
              src={ContactUsImage}
              alt="contactus"
              width={50}
              height={50}
            />
            <h3>Contact Us</h3>
          </div>
          <h1>Let’s Fire Up Your Business!</h1>
          <h2>Team Up With Us Today For An Unforgettable Service Experience</h2>
          <h3>Address</h3>
          <h5 className="secondary-text">
            Plot no 10 # Building, <br />
            Plot no 10 # Building,{" "}
          </h5>
          <div>
            {" "}
            <p>test@test.com</p>
            <p>test@test.com</p>
          </div>
        </div>
        <div>
          <Image src={FooterImage} alt="Footer" width={500} height={500} />
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        <div>
          <p>© Copyright 2022 Code Brew Labs | All Rights Reserved</p>
        </div>
        <div>
          <a>Privacy Policy </a> |<a>Terms & conditions </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
