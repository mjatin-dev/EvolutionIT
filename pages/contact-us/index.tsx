import { NextPage } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./style.module.scss";
import contactUsBackground from "../../assets/images/contact-us.jpg";
import contactUsImage from "../../assets/images/contact-us-image.svg";
import Footer from "../../components/Footer";
const ContactUs: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.contactUsHeroPage}>
          <p className="normal-text">Let&apos;s build something</p>
          <p className="primary-heading">Great Together</p>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsData}>
            <p className="secondary-heading">Get in Touch</p>
            <p className="secondary-text">Write to us</p>
            <p className="normal-text">
              There are ideas and then there&apos;s execution. It&apos;s very
              difficult to find them both in one organization but we with our
              upskill innovations keep our workforce creative and talented both.
              Get in touch to get going.
            </p>
            <p className="normal-text inline">Email us @</p>
            <a href="mailto:hr@logiczephyr.com">
              <p className="secondary-text my-4 inline ml-1">
                hr@logiczephyr.com
              </p>
            </a>
          </div>
          <div className={styles.detailsData}>
            <Image src={contactUsImage} alt="contact-us" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
