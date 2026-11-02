// import { useState } from 'react'
import Nav from "../Components/Nav";
import Search from "../Components/Search";
import Filter from "../Components/filter";
import Hero from "../Components/Hero";
import Stock from "../Components/Stock";
import Post from "../Components/Post";
import Card from "../Components/Card";
import monoclebag from "../assets/monoclebag.jpg";
import colorful from "../assets/colorful.jpeg";
import happybag from "../assets/happybag.jpg";
import peachbag from "../assets/peachbasket.jpeg";
import minimalist from "../assets/minimalist.jpeg";
import bag from "../assets/images (1).jpeg";
import Footer from "../Components/Footer";


function Home() {
  return (
    <>
      <section className="bg-[#FAFFFF] mx-auto">
        <Nav />
        <Search />
        <Filter />
        <Hero />
        <Stock title={"Available Stock"} desc={"These totebags are currently available for sales"} />
        <Post />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6 max-w-329.5 w-full mx-auto">
          <Card img={monoclebag} />
          <Card img={colorful} />
          <Card img={bag} />
          <Card img={happybag} />
          <Card img={peachbag} />
          <Card img={minimalist} />
          <Card img={monoclebag} />
          <Card img={bag} />
        </div>

        <Footer className={"max-w-full"} />
      </section>
    </>
  );
}

export default Home;
