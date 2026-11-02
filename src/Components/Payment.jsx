import { CiSettings } from "react-icons/ci";
import { IoCard } from "react-icons/io5";
import CheckoutModal from "./CheckoutModal"
import { useState } from "react";


export default function Payment(){

    const [showCheckout, setShowCheckout] = useState(false);
    return (
        <section>
            <div>
                <aside
                    className="rounded-md h-[518px] flex flex-col justify-between pl-[14px] bg-[#E0E7E71A] p-6 md:max-lg:ml-auto md:max-lg:max-w-md lg:sticky "
                >
                    <h2
                        className="mt-[47px] font-bold text-[24px] leading-[120%] tracking-[-1%] text-[#4E5050]"
                    >
                        Order Summary
                    </h2>
                    <dl className="mt-5">
                        <div className="flex justify-between gap-4 my-5">
                            <dt className="font-normal text-[18px] leading-[120%] font-Montserrat tracking-[-1%] text-[#4E5050]">Subtotal</dt>
                            <dd

                                className="font-bold text-[18px] leading-[160%] font-Montserrat tracking-[-1%] font-Montserrat text-[#001616]"
                            >
                                ₦ 4,000.00
                            </dd>
                        </div>
                        <div className="flex justify-between gap-4 my-5">
                            <dt className="font-normal text-[18px] leading-[120%] font-Montserrat tracking-[-1%] text-[#4E5050]">Delivery </dt>
                            <dd

                                className="font-bold text-[18px] leading-[160%] font-Montserrat tracking-[-1%] font-Montserrat text-[#001616]"
                            >
                                ₦ 1,500.00
                            </dd>
                        </div>
                        <div className="flex justify-between gap-4 my-5">
                            <dt className="font-normal text-[18px] leading-[120%] font-Montserrat tracking-[-1%] text-[#4E5050]">Zip</dt>
                            <dd

                                className="font-bold text-[18px] leading-[160%] font-Montserrat tracking-[-1%] font-Montserrat text-[#001616]"
                            >
                                ₦ 1,000.00
                            </dd>
                        </div>
                        <div className="flex justify-between gap-4 my-5">
                            <dt className="font-normal text-[18px] leading-[120%] font-Montserrat tracking-[-1%] text-[#4E5050]">Front & Back Designs </dt>
                            <dd

                                className="font-bold text-[18px] leading-[160%] font-Montserrat tracking-[-1%] font-Montserrat text-[#001616]"
                            >
                                ₦ 1,000.00
                            </dd>
                        </div>
                        <div className="flex items-center justify-between gap-4 border-t border-neutral-950/10 pt-3 dark:border-neutral-800">
                            <dt className="font-bold text-[24px] leading-[120%] tracking-[-1%] font-Raleway">
                                Total
                            </dt>
                            <dd

                                className="font-bold text-[18px] leading-[160%] font-Montserrat tracking-[-1%] font-Montserrat text-[#001616]"
                            >
                                ₦ 7,500.00
                            </dd>
                        </div>
                    </dl>
                    <div className='border-b border-neutral-950/10 pt-3 dark:border-neutral-800'></div>
                    <div className="mt-5 flex gap-4 justify-between">
                        <span><CiSettings size={23} text={"#939898"} /></span>
                        <p className='text-[15.79px] leading-[160%]'>Please your totebag will be delivered in three to five working days.  </p>

                    </div>
                    <div className="mt-6 max-lg:fixed max-lg:inset-x-0 max-lg:bottom-0 max-lg:z-30 max-lg:flex max-lg:justify-center max-lg:border-t max-lg:border-neutral-200 max-lg:bg-white max-lg:px-4 max-lg:pt-3 max-lg:pb-[max(0.75rem,env(safe-area-inset-bottom))] md:max-lg:justify-end md:max-lg:px-8 dark:max-lg:border-neutral-800 dark:max-lg:bg-neutral-950">

                    </div>


                </aside>
                <button

                    type="button"
                    onClick={() => setShowCheckout(true)}
                    className="inline-flex h-[54px] w-full cursor-pointer items-center rounded-[8.01px] bg-[#001616] px-5 text-[16px] font-medium whitespace-nowrap gap-[10.29px] text-white "
                >
                    Payment options <span><IoCard /></span>
                </button>
                {/* <PaymentModal/> */}
            </div>
            {showCheckout && (
                <CheckoutModal
                    onClose={() => setShowCheckout(false)}
                />
            )}
        </section>
    )
}