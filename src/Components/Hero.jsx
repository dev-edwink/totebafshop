import woman1 from "../assets/woman1.png";
import woman2 from "../assets/woman2.png";

function Hero() {
  return (
    <section className="w-full mx-auto px-5 mt-10 md:flex items-center px-24 hidden md:block">
      <div className="max-w-329.5 flex flex-col mx-auto">
        <div>
          <p className="font-semibold text-[25px] font-Raleway">
            Shop your favourite totebag.
          </p>
          <p className="font-light font-montserrat text-[16px] text-[#333]">
            Select the totebag that matches your fashion.
          </p>
        </div>

        <div className="max-w-328 h-113.5 mt-5 rounded-[37px] bg-[#FFFFFF] border mx-auto relative overflow-hidden ">
          <div className="flex items-center justify-between h-full px-10">
            <div className="absolute top-8 left-10 flex gap-2">
              <div className="w-5 h-2 rounded-full bg-black"></div>
              <div className="w-10 h-2 rounded-full bg-gray-300"></div>
              <div className="w-5 h-2 rounded-full bg-black"></div>
              <div className="w-5 h-2 rounded-full bg-black"></div>
            </div>

            <div className="w-75 shrink-0">
              <p className="text-sm font-light tracking-wide text-[#333]">
                TRENDING TOTEBAGS
              </p>
              <p className="text-4xl font-medium text-[#001515] mt-1">
                Leather Totebags
              </p>
              <p className="text-sm font-light text-[#333] mt-3">
                Totebag’s made with leather fabric. This fabric is usually
                stronger than the others.{" "}
              </p>
            </div>

            <img className=" w-150 relative right-30 bottom-18" src={woman1} alt="Woman1" />
            <img className="h-3/4 object-contain relative bottom-0 top-15" src={woman2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
