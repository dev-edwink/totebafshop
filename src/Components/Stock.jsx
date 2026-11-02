import Card from "./Card";
import monoclebag from "../assets/monoclebag.jpg"
import colorful from "../assets/colorful.jpeg"
import happybag from "../assets/happybag.jpg"
import peachbag from "../assets/peachbasket.jpeg"
import minimalist from "../assets/minimalist.jpeg"
import bag from "../assets/images (1).jpeg"
import zero from "../assets/zero-waste.png"
import angel from "../assets/angel.jpeg"
import jeans from "../assets/jeans.jpeg"
import Header from "./Header";


function Stock() {
  return (
    <section className="max-w-329.5 w-full mx-auto mt-10">

      <Header title={"Available Stock"} desc={"These totebags are currently available for sales"}/>
    

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
        <Card   img={monoclebag} />
        <Card   img={colorful} />
        <Card img={bag}/>
        <Card   img={happybag} />
        <Card   img={peachbag} />
        <Card img={minimalist} />
        <Card   img={zero}/>
        <Card   img={angel} />
        <Card   img={monoclebag}  />
        <Card   img={bag} />
        <Card   img={jeans} />
        <Card   img={happybag} />
      </div>
    </section>
  );
}
export default Stock;
