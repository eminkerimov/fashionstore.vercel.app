import React, { useState } from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ManSection from "../components/ManSection";
import WomanSection from "../components/WomanSection";
import NewSection from "../components/NewSection";
import Blog from "../components/Blog";
import Link from "../components/Link";

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  return (
    <>
      <Header {...{ toggleMobile }} />
      <Main {...{ mobileOpen }} />
      <Link/>
      <Category />
      <ManSection/>
      <WomanSection/>
      <NewSection/>
      <Blog/>
      <Footer />
    </>
  );
};

export default Home;
