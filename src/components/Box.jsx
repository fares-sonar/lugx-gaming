/* eslint-disable react/prop-types */
const Box = (props) => {
  return (  
    <>
      <div className="bg-white shadow-shadow  rounded-[25px] w-full md:w-[280px]">
      <a href="#" className="p-8 flex flex-col items-center justify-center">
        <div className="bg-bsBlue rounded-full w-24 h-24 flex items-center justify-center hover:bg-lightRed">
          <img src={props.image} alt="featured-1" />
        </div>
          <h3 className="font-bold text-lg uppercase mt-4">{props.paragraph}</h3>
      </a>
    </div>
        
    </>
  )
}

export default Box