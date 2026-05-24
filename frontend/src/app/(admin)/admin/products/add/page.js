import ProductForm from "../_components/ProductForm"

const page = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">ایجاد محصول</span>
      </h3>
      <ProductForm />
    </div>
  )
}

export default page