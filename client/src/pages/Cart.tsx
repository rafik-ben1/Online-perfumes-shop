import CartSummary from "@/features/cart/CartSummary"
import CartTable from "@/features/cart/CartTable"

const Cart = () => {
  return (
    <section className="p-6 mt-4 flex flex-col justify-start m-4  gap-6 mx-auto " >
     <h2 className=" text-slate-700 text-3xl font-medium text-center pb-3   " > Your cart </h2>
     <div className="flex flex-col w-full sm:w-[80%] md:w-[70%] mx-auto gap-10  " >
     <CartTable/>
     <CartSummary />
    </div>
    </section>
  )
}

export default Cart