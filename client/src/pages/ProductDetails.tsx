import { useSingleProduct } from "@/features/products/productServices"

const ProductDetails = () => {
    const {data,isLoading} = useSingleProduct()
    console.log(data)
  return (
<section>
hey you
</section>
    )
}

export default ProductDetails