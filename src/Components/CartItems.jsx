import CartList from './CartList'

function CartItems() {
    return (
        <>
            <div id="cart-page" className="px-4 w-full max-w-329.5 mx-auto  pt-10 pb-28 md:px-0 md:pt-16 lg:pb-16 ">
                <div className="flex flex-wrap  items-end justify-between gap-x-6 gap-y-3">
                    <div>
                        <h1 className="leading-[120%] font-Raleway text-[#001616] text-[40px] font-semibold h-[48px] my-[16px]">
                            Shopping Cart.
                        </h1>
                        <p
                            className="text-[18px] font-medium leading-[120%] text-[#2F3131] font-Raleway h-[22px]"
                        >
                            Effortlessly manage your purchases and checkout with ease.
                        </p>
                    </div>

                </div>
                <CartList />
            </div>

            

        </>
    )
}

export default CartItems