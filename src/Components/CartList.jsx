
import Payment from "./Payment"
import CartItem from "./CartItem"

export default function CartList() {
  return (
    <div>
          <div className="mt-8  grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_24rem]  xl:gap-x-16">
              <section>
                

                  <ul className="flex flex-col">
                      
                      <CartItem/>
                      <CartItem/>
                      <CartItem/>
                      <CartItem/>
                      
                  </ul>

              </section>
              <Payment/>
          </div>
    </div>
  )
}
