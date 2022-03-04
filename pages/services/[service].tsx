import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Header from "../../components/Header";
import styles from "./web-development.module.scss";
import services, {
  TechSectionInterface,
  ServiceInterface,
  Category,
} from "../../components/constants/services";
import Image from "next/image";
import Footer from "../../components/Footer";

export const getStaticPaths = async () => {
  const paths =
    services &&
    services.length > 0 &&
    services.map((data, index) => ({
      params: { service: data.path },
    }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { service: string };
}) => {
  const service = services.find((element) => element.path === params.service);
  return {
    props: {
      ...service,
    },
  };
};

const Service: NextPage<ServiceInterface> = ({
  name,
  smallDescription,
  techDetails,
  serviceCategories,
  backgroundImage,
}) => {
  console.log(backgroundImage);
  return (
    <>
      <Header />

      <div
        className={`${styles.heroSection} w-full`}
        style={{
          background: `url("${backgroundImage}") no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="secondary-heading">{name}</p>
        <p className="normal-text">{smallDescription}</p>
      </div>
      {serviceCategories && (
        <div className={`${styles.serviceCategoriesSection}`}>
          <div className="container">
            <p className="secondary-heading color-white">
              {serviceCategories.title}
            </p>
            <p className="secondary-text color-white">
              {serviceCategories.shortDescription}
            </p>
            <div className={styles.serviceCategoriesContainer}>
              {serviceCategories &&
                serviceCategories.categories.length > 0 &&
                serviceCategories.categories.map(
                  ({ title, icon, description }: Category) => {
                    return (
                      <div key={title} className={styles.serviceCategory}>
                        <div className={styles.categoryImageContianer}>
                          <img src={icon} alt={title} />
                        </div>
                        <p className="secondary-text">{title}</p>
                        <p className="normal-text">{description}</p>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      )}
      {techDetails &&
        techDetails.length > 0 &&
        techDetails.map((service, index) => {
          return (
            <TechSection key={`tech-section-detail-${index}`} {...service} />
          );
        })}
      <Footer />
    </>
  );
};

const TechSection: NextPage<TechSectionInterface> = ({
  image,
  title,
  description,
}) => {
  return (
    <>
      <div className={styles.techSectionContainer}>
        <div className={`${styles.techSectionAlternateBackground} container`}>
          <div className={styles.techSectionImageSection}>
            <div className={styles.techSectionImageContainer}>
              {/* <Image
                src={image}
                alt="tech"
                className={styles.techSectionImage}
              /> */}
              <img src={image} alt={title} />
            </div>
          </div>
          <div className={styles.techSectionDetails}>
            <p className="secondary-text">{title}</p>
            <p className="normal-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
