import minimalist from "../assets/minimalist.jpeg";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaStarHalfStroke } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";




function CheckOut() {
  return (
    <section className="bg-[#FAFFFF]">
      <div className="w-full max-w-[1317px] mx-auto px-5 mt-10 min-h-0 ">
          <div className="w-full max-w-[873px] min-h-0 flex items-center justify-center mb-10">
            <div className="max-w-[332px] flex gap-5">
              <div className="w-[128px]">
                <img
                  src={minimalist}
                  alt="minimalist"
                  className="object-contain "
                />
              </div>

              <div className="max-w-[184px] flex justify-between flex-col mb-3">
                <div className="w-[184px] h-[100px] flex flex-col gap-3 ">
                  <p className="font-Raleway font-medium text-[28px] text-[#001616]">
                    Plane totebag
                  </p>
                  <p className="font-Raleway text-[18px] text-[#4E5050]">
                    thetotebag1500
                  </p>

                  <div className="w-[154px] h-[28px] flex gap-1">
                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStar className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStar className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStar className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStarHalfStroke className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <CiStar className="text-[#DBB800] text-2xl" />
                    </div>
                  </div>
    
                </div>

                <div className="w-[123px] h-[24px] flex items-center gap-3">
                    <p className="text-[#B9BFBF] font-medium text-[20px]">
                      Color:
                    </p>
                    <p className="font-Raleway text-[18px] text-[#001515]">
                      Cream
                    </p>
                  </div>
              </div>
            </div>

            <div className="w-full max-w-[421px] h-[48px] flex items-center justify-between">
                <div className="w-full max-w-[107px] h-[40px] flex gap-3 items-center border-[0.5px] border-[#6B6F6B] rounded-sm justify-center">
                    <TiPlus className="max-w-[20px] h-[20px]"/>

                    <div className="max-w-[24px] h-[24px] border rounded-sm flex items-center justify-center ">
                        <p className="text-[#6B6F6B] font-meduim text-[18px]">1</p>
                    </div>

                    <TiMinus className="max-w-[20px] h-[20px]"/>
                </div>

                <div className="w-[100px] h-[41px] hidden md:flex items-center justify-center">
                    <p className="font-bold text-[25px] font-Montserrat">N 4,000</p>
                </div>

                <div className="w-[48px] h-[48px] bg-[#001616] flex items-center justify-center rounded-sm">
                    <RiDeleteBin6Line className="text-[#FAFFFF] text-2xl"/>
                </div>
            </div>
          </div>

          {/* card two */}

          <div className="w-full max-w-[873px] min-h-0 flex items-center justify-center mt-10">
            <div className="max-w-[332px] flex gap-5">
              <div className="w-[128px]">
                <img
                  src={minimalist}
                  alt="minimalist"
                  className="object-contain "
                />
              </div>

              <div className="max-w-[184px] flex justify-between flex-col mb-3">
                <div className="w-[184px] h-[100px] flex flex-col gap-3 ">
                  <p className="font-Raleway font-medium text-[28px] text-[#001616]">
                    Plane totebag
                  </p>
                  <p className="font-Raleway text-[18px] text-[#4E5050]">
                    thetotebag1500
                  </p>

                  <div className="w-[154px] h-[28px] flex gap-1">
                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStar className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStar className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStar className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <FaStarHalfStroke className="text-[#DBB800] text-2xl" />
                    </div>

                    <div className="w-[35px] h-[35px] rounded-[8px] bg-[#001616] flex items-center justify-center">
                      <CiStar className="text-[#DBB800] text-2xl" />
                    </div>
                  </div>
    
                </div>

                <div className="w-[123px] h-[24px] flex items-center gap-3">
                    <p className="text-[#B9BFBF] font-medium text-[20px]">
                      Color:
                    </p>
                    <p className="font-Raleway text-[18px] text-[#001515]">
                      Cream
                    </p>
                  </div>
              </div>
            </div>

            <div className="w-full max-w-[421px] h-[48px] flex items-center justify-between">
                <div className="w-full max-w-[107px] h-[40px] flex gap-3 items-center border-[0.5px] border-[#6B6F6B] rounded-sm justify-center">
                    <TiPlus className="max-w-[20px] h-5"/>

                    <div className="w-6 h-6 border rounded-sm flex items-center justify-center ">
                        <p className="text-[#6B6F6B] font-meduim text-[18px]">1</p>
                    </div>

                    <TiMinus className="max-w-5 h-5"/>
                </div>

                <div className="w-[100px] h-[41px] hidden md:flex items-center justify-center">
                    <p className="font-bold text-[25px] font-Montserrat">N 4,000</p>
                </div>

                <div className="w-[48px] h-[48px] bg-[#001616] flex items-center justify-center rounded-sm">
                    <RiDeleteBin6Line className="text-[#FAFFFF] text-2xl"/>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default CheckOut;


