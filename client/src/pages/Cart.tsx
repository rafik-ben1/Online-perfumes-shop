import CartTable from "@/features/cart/CartTable"

const Cart = () => {
  return (
    <section className="p-6 mt-4 flex flex-col justify-start border m-4  gap-6 mx-auto " >
     <h2 className=" text-slate-600 text-xl font-medium   " > Your cart </h2>
     <CartTable/>
    </section>
  )
}

export default Cart