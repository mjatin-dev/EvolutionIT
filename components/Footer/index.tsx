import type { NextPage } from "next";
import styles from "./footer.module.scss";
import headerTabs from "../constants/headerTabs";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <>
      <div className={`${styles.footer} mt-36 relative pt-24 pb-6`}>
        <div
          className={`${styles.footerMessageContainer} w-2/3 -mt-24 mx-auto flex flex-col justify-center align-center absolute rounded-3xl p-6`}
        >
          <h3 className="text-2xl text-[#ad91ec]">Ready to get started?</h3>
          <h3 className="text-2xl text-[#6653bc]">Talk to us today</h3>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-4 sm:px-24 px-12 mt-6">
          <div className="sm:col-span-1 col-span-6">
            <h3 className="text-[#2196f3] text-2xl text-center mt-12 mb-6 sm:m-0">
              Logic Zeyphr
            </h3>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-center sm:text-left mb-4 text-[#60677a] font-medium text-base uppercase">
              About Us
            </p>
            <p className="text-center sm:text-left text-[#99a0ab] capitalize text-sm mb-2">
              Home
            </p>
            <p className="text-center sm:text-left text-[#99a0ab] capitalize text-sm mb-2">
              Get In Touch
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-center sm:text-left text-[#60677a] font-medium text-base uppercase mb-4">
              Pages
            </p>
            {headerTabs?.map((tab) => {
              const { id, tabName, href } = tab;
              return (
                <>
                  {href && (
                    <Link key={`footer-link-${id}`} href={href} passHref>
                      <p className="text-center sm:text-left text-[#99a0ab] capitalize text-sm mb-2">
                        {tabName}
                      </p>
                    </Link>
                  )}
                </>
              );
            })}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-center sm:text-left mb-4 text-[#60677a] font-medium text-base uppercase">
              Social
            </p>
            <p className="text-center sm:text-left text-[#99a0ab] capitalize text-sm mb-2">
              Linked In
            </p>
            <p className="text-center sm:text-left text-[#99a0ab] capitalize text-sm mb-2">
              Instagram
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
