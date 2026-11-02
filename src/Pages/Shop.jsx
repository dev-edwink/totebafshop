// import { useState } from 'react'
import Nav from "../Components/Nav";
import Search from "../Components/Search";
import Description from "../Components/Description";
// import Stock from "./Components/Stock";
import Header from "../Components/Header";

import Footer from "../Components/Footer";


function Shop() {
  return (
    <>

    <section className="bg-[#FAFFFF]">
      <Nav />

    <Search />

    <Description />

    <Header />

    <Footer />
  
    </section>
    
    </>
  );
}

export default Shop;
