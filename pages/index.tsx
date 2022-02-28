import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Milestones from "../components/Milestones";
import Services from "../components/Services";
import Script from "next/script";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Services />
      <Milestones />
      <Footer />
      <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
      <script>AOS.init();</script>
    </>
  );
};

export default Home;
