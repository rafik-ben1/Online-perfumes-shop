import Spinner from "@/components/Spinner"
import ProductCard from "@/features/products/ProductCard"
import { useProducts } from "@/features/products/productServices"

const Shop = () => {
  const {data,isLoading} = useProducts()
  if(isLoading) return <Spinner />
  return (
  <section className=" p-6 grid w-full border md:px-4 mx-auto md:grid-cols-3 grid-cols-1 gap-4 md:gap-6  lg:grid-cols-4  sm:grid-cols-2  " >
   {data?.map(product => <ProductCard product={product} /> )}
  </section>
    )
}

export default Shop