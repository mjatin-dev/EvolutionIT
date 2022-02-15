import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
