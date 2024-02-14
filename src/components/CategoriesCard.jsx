/* eslint-disable react/jsx-key */
import CategoriesInfo from '../data/CategoriesData'
const CategoriesCard = () => {
  return (
    <>
    <div className="flex flex-col flex-wrap md:flex-nowrap md:flex md:flex-row gap-4 p-4">
    {CategoriesInfo.map((category) => {
      return (
        <div key={category.id} className='bg-bsBlue text-center rounded-3xl w-full md:w-[2500px]  md:mb-0'>
        <h3 className='font-medium text-lg text-white my-5'>{category.h3}</h3>
        <a href="#">
          <img src={category.img} alt="category" className='rounded-3xl w-full' />
        </a>
      </div>
      )
    })}
    </div>
    </>
  )
}

export default CategoriesCard