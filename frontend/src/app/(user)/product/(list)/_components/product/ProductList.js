import api from "@/services/api"

export const dynamic = "force-dynamic";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function ProductList() {
    // await delay(3000);
    const {data}=await api.get(`/product/list`)
    const {products}=data?.data||[]
    console.log(products);
    return(
        products?.map(p=><p key={p?._id}>{p?.title}</p>)
    )
}