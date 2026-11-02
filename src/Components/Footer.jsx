
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#080808] text-[#D0D0D0]  ">
      <section className="w-full max-w-329.5 mx-auto p-8 md:py-40 min-h-[560px]">

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.55fr_1fr] gap-12 md:gap-16">

          <div className="max-w-[500px] flex flex-col">
            <p className="font-Raleway text-[16px] leading-[25px] mb-8">
              We provide comfy tote bags that won't mess up your style and have
              plenty of space for all your stuff.
            </p>

            <div className="mb-8 flex items-center justify-start">
              <a
                href="#"
                className="font-Raleway font-light text-3xl md:text-6xl text-[#D0D0D0] whitespace-nowrap"
              >
                thetotebagshop<sup className="text-xl">®</sup>
              </a>
            </div>

            <div className="flex items-center gap-6 text-xl justify-start">
              <FaTiktok />
              <FiInstagram />
            </div>
          </div>

          <div>
            <p className="font-Raleway font-bold text-2xl mb-6">
              Quick links
            </p>
            <div className="flex flex-col gap-5 font-Raleway text-md">
              <p>Terms &amp; Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
              <p>Terms of Service</p>
              <p>Refund policy</p>
            </div>
          </div>

          <div>
            <p className="font-Raleway font-bold text-xl mb-6">
              Connect with Us
            </p>
            <p className="font-Raleway text-md leading-[23px] mb-12">
              Subscribe to our Newsletter to be the first to beware of recent
              production and other production offers.
            </p>

            <div className="w-full h-[58px] bg-[#292929] rounded-xl flex items-center p-3">
              <input
                type="email"
                className="flex-1 min-w-0  text-white text-sm focus:outline-none focus:ring-0 placeholder:text-[#777777]"
                placeholder="Enter email address"
              />
              <button className="w-11 h-9 rounded-lg bg-[#171717] flex items-center justify-center">
                <FaArrowRight />
              </button>
            </div>
          </div>

        </div>
      </section>
    </footer>
  );
}

export default Footer;


