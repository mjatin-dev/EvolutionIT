import { NextPage } from "next";
import styles from "./services.module.scss";
import servicesImageIcon from "../../assets/icons/briefcase.gif";
import Image from "next/image";
import technologiesUsed, {
  ServiceCardPropsInterface,
} from "../constants/technologies";
import blockchainImage from "../../assets/images/blockchain.png";
import qaImage from "../../assets/images/qa.png";
import iotImage from "../../assets/images/iot.png";
import cryptocurrencyImage from "../../assets/images/Cryptocurrency.png";
import marketing from "../../assets/images/Marketing.png";
import ServiceCard from "../ServiceCard";
const Services: NextPage = () => {
  return (
    <>
      <section className={`${styles.technologiesContainer} pt-12`}>
        <div className="container">
          <div className={styles.row}>
            <Image
              src={servicesImageIcon}
              alt="services-icon"
              width={30}
              height={30}
            />
            <p
              className={`${styles.technologiesMainHeading} secondary-heading`}
            >
              Our Core Service
            </p>
          </div>
          <div className={styles.technologiesGrid}>
            {technologiesUsed &&
              technologiesUsed.length > 0 &&
              technologiesUsed.map((card, index) => {
                const { icon, title, description } = card;
                return (
                  <ServiceCard
                    key={`technologies-card-${index}`}
                    icon={icon}
                    title={title}
                    description={description}
                  />
                );
              })}
          </div>
        </div>
      </section>

      <section className="my-14">
        <div className="container grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative overflow-hidden lg:col-span-2 pt-24 col-span-1 p-4 bg-[linear-gradient(41deg,#12aaef,#0084ff)]">
              <p className="text-white mb-4 text-xl font-medium">Blockchain</p>
              <div className="absolute top-1 right-6 hover:scale-150 duration-500">
                <Image
                  src={blockchainImage}
                  alt="blockchain"
                  width={200}
                  height={190}
                />
              </div>
              <p className="text-white w-3/4">
                Enhance security & transparency by creating a decentralized
                ecosystem for your brand.
              </p>
            </div>
            <div className="relative pt-24 overflow-hidden col-span-1 p-4 bg-[linear-gradient(54deg,#8529bc,#ff7c00)]">
              <div className="absolute top-1 right-2 hover:scale-150 duration-500">
                <Image
                  src={cryptocurrencyImage}
                  alt="blockchain"
                  width={150}
                  height={100}
                />
              </div>
              <h1 className="text-white mb-4 text-xl font-medium">
                Cryptocurrency
              </h1>
              <p className="text-white">
                Maximize the chances of your business growth & ROI with
                strongest marketing operations.
              </p>
            </div>
            <div className="relative overflow-hidden pt-24 col-span-1 p-4 bg-[linear-gradient(54deg,#8529bc,#ff7c00)]">
              <div className="absolute top-1 right-6 hover:scale-150 duration-500">
                <Image
                  src={qaImage}
                  alt="blockchain"
                  width={150}
                  height={100}
                />
              </div>
              <p className="text-white mb-4 text-xl font-medium">QA</p>
              <p className="text-white">
                Get a bug-free & highly functional product with comprehensive
                mobile app quality assurance.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative overflow-hidden pt-24  col-span-1 p-4 bg-[#004c77]">
              <div className="absolute -top-1 right-8 hover:scale-150 duration-500">
                <Image
                  src={iotImage}
                  alt="blockchain"
                  width={130}
                  height={120}
                />
              </div>
              <p className="mb-4 text-white text-xl font-medium">IoT</p>
              <p className="text-white">
                Enjoy better productivity & customer experience by minimizing
                downtime & risk factors with IoT technology.
              </p>
            </div>
            <div className="relative overflow-hidden pt-24 col-span-1 p-4 bg-[#def0ff]">
              <div className="z-0 absolute top-1 right-0 hover:scale-150 duration-500">
                <Image
                  src={marketing}
                  alt="blockchain"
                  width={130}
                  height={120}
                />
              </div>
              <h1 className="text-black mb-4 text-xl font-medium">Marketing</h1>
              <p className=" text-black">
                Maximize the chances of your business growth & ROI with
                strongest marketing operations.
              </p>
            </div>
            <div className="relative overflow-hidden pt-24 lg:col-span-2 col-span-1 p-4 bg-[linear-gradient(90deg,#1b298f,#6f86d3)]">
              <p className="text-white mb-4 text-xl font-medium">
                Web Development
              </p>
              <p className="text-white">
                Build the finest customer experienced with the help of highly
                customized web development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
