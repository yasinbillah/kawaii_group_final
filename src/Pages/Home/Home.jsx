// Home.jsx
import React from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Banner from "../../components/Banner/Banner";
import AppStore from "../../components/AppStore/AppStore";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/Footer/Footer";
import StatCount from "../../components/StatCount/StatCount";

const Home = () => {
  return (
    <>
      <Hero />
      <StatCount/>
      <Services />
      <Banner />
      {/* <AppStore /> */}
      <Testimonial />
    </>
  );
};

export default Home;
