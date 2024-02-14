import CategoriesCard from '../components/CategoriesCard'
const Categories = (prop) => {
  return (
    <>
    <div className="max-w-[1200px] mx-auto py-10">
      {prop.showButton && 
        <div className="text-center ">
        <h3 className="uppercase text-lightRed text-sm font-bold">CATEGORIES</h3>
        <h2 className="text-4xl font-bold my-8 capitalize">Top Categories</h2>
      </div>
      }
      <CategoriesCard/>
    </div>
    </>
  )
}

export default Categories