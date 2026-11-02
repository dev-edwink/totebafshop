import zero from "../assets/zero-waste.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiEBike2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";
import Button from "./Button"
import Header from "./Header";
import Card from "./Card";
import monoclebag from "../assets/monoclebag.jpg"
import colorful from "../assets/colorful.jpeg"
import happybag from "../assets/happybag.jpg"
import peachbag from "../assets/peachbasket.jpeg"
import minimalist from "../assets/minimalist.jpeg"
import bag from "../assets/images (1).jpeg"
import angel from "../assets/angel.jpeg"

// import Footer from "./Footer";



function Description() {
  return (
    <section className="w-full max-w-329.5 mx-auto px-4 sm:px-5 my-10">
      <div className="max-w-[486px] mb-5">
        <p className="font-Raleway font-semibold text-2xl">Your Cart.</p>
        <p className="text-sm text-[#2F3131]">Review and manage the items in your shopping cart.</p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full min-w-0">
          <div className="w-full aspect-square overflow-hidden bg-[#EEEEEE]">
            <img
              src={zero}
              alt="zero bag"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full max-w-[400px] mx-auto flex flex-col items-center gap-5 mt-6">
            <div className="w-full  grid grid-cols-3 gap-3">
              <div className="w-[125px]">
                <img src={zero} alt="zero waste" className="w-full" />
                <p className="font-Raleway text-[20px] text-center">WHITE</p>
              </div>

              <div className="w-[125px]">
                <img src={zero} alt="zero waste" className="w-full" />
                <p className="font-Raleway text-[20px] text-center">BLACK</p>
              </div>

              <div className="w-[125px]">
                <img src={zero} alt="zero waste" className="w-full" />
                <p className="font-Raleway text-[20px] text-center">GREY</p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 items-center justify-center">
              <div className="bg-[#FFFFFF] w-full min-h-[48px] shadow px-3 py-2 flex flex-wrap justify-center gap-3 text-[#111212]">
                <div className="w-[45px] flex items-center gap-1">
                  <IoIosCheckmarkCircleOutline />
                  <p>Zip</p>
                </div>

                <div className="w-[60px] flex items-center gap-1">
                  <IoIosCheckmarkCircleOutline />
                  <p>Button</p>
                </div>

                <div className="w-[120px] flex items-center gap-1">
                  <IoIosCheckmarkCircleOutline />
                  <p>Zip or Button</p>
                </div>

                <div className="w-[60px] flex items-center gap-1">
                  <IoIosCheckmarkCircleOutline />
                  <p>None</p>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <p className="text-sm font-Raleway text-[#4E5050]">
                  Zip cost N1,000.00 extra while button cost N500.00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-w-0">
          <div className="w-full">
            <p className="text-[18px] text-[#001616] font-Raleway">Product</p>
            <div className="w-[300px] h-[48px] p-3 flex border-0.5 bg-[#EBF7F7] items-center justify-between mx-auto">
              <RiEBike2Fill className="text-[24px]" />
              <p className="text-[24px]">Delivery fee</p>
              <div className="w-[60px] h-[27px] rounded-[4px] bg-[#001414] flex items-center justify-center">
                <p className="font-medium text-[14px] h-[27.907394409179688px] flex items-center font-Montserrat text-[#FFFFFF]">
                  1500
                </p>
              </div>
            </div>

            <div className="w-[352px] flex flex-col gap-[16px] mt-6">
              <p className="font-Ralaway font-medium text-[32px] text-[#001616]">
                Cream colored totebag
              </p>

              <div className="w-[275px] flex gap-[8px]">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                  <FaStar className="text-[#DBB800] text-[22px]"/>

                </div>

                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                  <FaStar className="text-[#DBB800] text-[22px]"/>

                </div>

                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                  <FaStar className="text-[#DBB800] text-[22px]"/>

                </div>

                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                  <FaStar className="text-[#DBB800] text-[22px]"/>

                </div>

                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                    <CiStar className="text-[#DBB800] text-[22px]"/>

                </div>

                <div className="w-[50px] h-[40px] rounded-[8px] border flex items-center justify-center">
                    2.4
                </div>
                
              </div>
            </div>
          </div>

            <div className="w-full max-w-[645px] h-[144px] mt-10 overflow-hidden">
                <div className="w-full flex flex-wrap  gap-5">
                    <div className="w-[185px] h-[45px] flex justify-between items-center">
                        <p className="font-Raleway font-semibold text-[20px] text-[#000000]">Price:</p>
                        <p className="font-bold text-[24px] text-[#001616] w-[120px] border flex items-center justify-center rounded-[4px]">N 4,000</p>
                    </div>
                    <div className="border-[3px] hidden md:block text-[#D4D4D4] rounded-[16px]"></div>

                    <div className="w-[185px] h-[40px] flex items-center gap-3">
                        <p className="font-Raleway font-semibold text-[18px] text-[#000000]">Quantity:</p>
                        <div className="w-[100px] h-[40px] rounded-[4px] flex items-center justify-between border p-1">
                            <TiPlus className="text-[#292D32]"/>

                            <div className="w-[24px] h-[24px] border flex items-center justify-center rounded-[6px] ">
                                <p className="font-medium font-Ubuntu text-[18px] text-[#6B6F6B]">1</p>
                            </div>

                            <TiMinus className="text-[#292D32]"/>
                        </div>
                    </div>

                </div>

                <p className="font-Raleway text-[18px] text-[#4E5050] mt-3">The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish, it's perfect for any occasion, offering comfort and sophistication. The tote features sturdy, reinforced handles for added durability, ensuring it can carry heavier items without compromising on style. Inside, multiple pockets provide organized storage, making it easy to find your keys, phone, or wallet. The classic cream color pairs effortlessly with any outfit, making it a versatile accessory for both casual and formal settings. Whether you're heading to work, running errands, or enjoying a night out, this tote bag elevates your look while providing practical storage solutions.</p>

            </div>

            <div className="w-full  mt-7 flex flex-col gap-3">
                <Button name={"Buy Now"} className={"w-full h-[71px] border rounded-[5px] font-semibold text-[20px] text-[#111212]"}/>

                <Button name={"Add to chart"} className={"w-full h-[71px] border rounded-[5px] font-semibold text-[20px] text-[#E1E8E8] bg-[#001212]"}/>
            </div>

            <div className="w-full min-h-[87px] border border-[#81BDBD] flex items-center justify-between p-5 mt-15 bg-[#E0E7E7] rounded-[8px]">
                <p className="font-Raleway text-[27px] text-[#005A59]">Select your location</p>
                <div>
                    <RiArrowDropDownLine className="text-[#000000]  text-4xl"/>
                </div>
            </div>
          
        </div>
      </div>

      <div className="w-full mt-10">
        <p className="font-semibold text-[20px] text-[#000000]">Description</p>
        <p className="font-Raleway text-[16px] text-[#4E5050]">The Cream-Colored Totebag is a blend of elegance and functionality. Crafted from luxurious fabric, its spacious interior accommodates daily essentials. Lightweight and stylish, it's perfect for any occasion, offering comfort and sophistication. The tote features sturdy, reinforced handles for added durability, ensuring it can carry heavier items without compromising on style. Inside, multiple pockets provide organized storage, making it easy to find your keys, phone, or wallet. The classic cream color pairs effortlessly with any outfit, making it a versatile accessory for both casual and formal settings. Whether you're heading to work, running errands, or enjoying a night out, this tote bag elevates your look while providing practical storage solutions.</p>
      </div>

        <div className="mt-10">
            <Header title={"Totebags you may like"} desc={"Totebags you may like"}/>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 mt-5 max-sm:gap-2">
            <Card   img={monoclebag} />
        <Card   img={colorful} />
        <Card img={bag}/>
        <Card   img={happybag} />
        <Card   img={peachbag} />
        <Card img={minimalist} />
        <Card   img={zero}/>
        <Card   img={angel} />
        </div>
    </section>
  );
}

export default Description;
