import { NextPage } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import companyData from "../../components/constants/company";
import portfolioBackground from "../../assets/images/logic-logo.png";
import ServiceCard from "../../components/ServiceCard";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";

const Company: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <Image src={companyData.image} alt="company" height={600} />
        </div>
        <h1 className="text-center mt-7 text-3xl">How we are?</h1>
        <div className="flex justify-center">
          <div className="mt-7">
            <p className="p-3 text-slate-500 hover:text-[#43a6f5]">
              Logic Zephyr is a global IT solution company providing full-cycle
              services in areas of custom web design, web development, mobile
              app development, SEO, hosting & support. Combining our solid
              business domain experience, technical expertise, profound
              knowledge of latest industry trends and quality-driven delivery
              model we offer progressive end-to-end solutions.
            </p>
          </div>

          <div className="mt-6">
            <Image src="/favicon.png" alt="image" width={220} height={220} />
          </div>
        </div>
        <div>
          <p className="text-center mt-12 text-2xl">WHY HIRE US?</p>

          <div className={styles.technologiesGrid}>
            {companyData.quality.map((item) => {
              return (
                <>
                  <div>
                    <ServiceCard
                      key={`technologies-card-1}`}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Company;
