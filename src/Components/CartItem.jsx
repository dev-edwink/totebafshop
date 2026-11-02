import Minimalist from '../assets/minimalist.jpeg'
import { FaStar } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function CartItem() {
    return (
        <div>
            <li className='my-10 border-b-[0.5px] border-[#BAC0C0] p-3'>
                <div className="flex justify-between gap-20 sm:gap-6">

                    <img
                        src={Minimalist}
                        alt=""
                        className="w-[128px] h-[140px] md:flex hidden"
                    />

                    <div className="flex min-w-0 grow items-center justify-between gap-4">
                        <div>
                            <div className="min-w-0 flex flex-col h-[80px] md:h-[140px] justify-between">
                                <h3>
                                    <p
                                        className="font-Raleway font-medium text-[16px] md:text-[28px] leading-[120%] text-[#001616]"
                                    >Plane totebag
                                    </p>
                                </h3>
                                <p className="text-[#4E5050] font-Raleway font-normal leading-[120%] text-[18px]">
                                    thetotebag1500
                                </p>

                                <div className="w-[184px] md:flex hidden justify-between">
                                    <div className="size-[28px] rounded-[6.22px] bg-[#001616] flex items-center justify-center">
                                        <FaStar className="text-[#DBB800] text-[15.557587623596191px]" />

                                    </div>

                                    <div className="size-[28px] rounded-[6.22px]  bg-[#001616] flex items-center justify-center">
                                        <FaStar className="text-[#DBB800] text-[15.557587623596191px]" />

                                    </div>

                                    <div className="size-[28px] rounded-[6.22px] bg-[#001616] flex items-center justify-center">
                                        <FaStar className="text-[#DBB800] text-[15.557587623596191px]" />

                                    </div>

                                    <div className="size-[28px] rounded-[6.22px] bg-[#001616] flex items-center justify-center">
                                        <FaStar className="text-[#DBB800] text-[15.557587623596191px]" />

                                    </div>

                                    <div className="size-[28px] rounded-[6.22px] bg-[#001616] flex items-center justify-center">
                                        <CiStar className="text-[#DBB800] text-[15.557587623596191px]" />

                                    </div>


                                </div>
                                <p>
                                    <span className="text-[#B9BFBF] font-medium text-[12px] md:text-[20px] leading-[120%] font-Montserrat">Color:</span>
                                    <span className="font-medium text-[12px] md:text-[18px] leading-[120%] text-[#001515]">
                                        Cream
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-3 sm:col-span-1 sm:flex-col sm:p-2 sm:justify-start sm:gap-2.5">
                            <div className="flex items-center rounded-lg border border-[#E0E7E7]">
                                <button
                                    className="inline-flex size-4 md:size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-neutral-600 transition-colors duration-150 hover:text-neutral-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-zinc-950 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-neutral-600 motion-reduce:transition-none dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50 dark:disabled:hover:text-neutral-400"
                                >
                                    <FaPlus />

                                </button>
                                <label
                                    htmlFor="cart-page-qty-field-high"
                                    className="sr-only"
                                >
                                    Quantity of Field High
                                </label>
                                <input
                                    placeholder='1'
                                    className="border border-[#E0E7E7] size-4 md:size-[24.854372024536133px] rounded-sm flex-1 text-[#6B6F6B] bg-transparent text-center text-[18.64px] font-medium "
                                />
                                <button
                                    className="inline-flex size-4 md:size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-neutral-600 transition-colors duration-150 hover:text-neutral-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-zinc-950 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-neutral-600 motion-reduce:transition-none dark:text-neutral-400 dark:hover:text-neutral-50 dark:focus-visible:outline-zinc-50 dark:disabled:hover:text-neutral-400"
                                >
                                    <FaMinus />
                                </button>
                            </div>

                        </div>
                        <div>
                            <p

                                className="font-bold font-Montserrat text-[12px] md:text-[25.33px] leading-[160%] tracking-[-1%] text-[#001616]"
                            >
                                ₦ 4000
                            </p>

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div className='w-[48px] h-[48px] flex items-center justify-center bg-[#001616]'><RiDeleteBinLine color='white' size={21} /></div>
                        </div>
                    </div>

                </div>

            </li>
        </div>
    )
}
