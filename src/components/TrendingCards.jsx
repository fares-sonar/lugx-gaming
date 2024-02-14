/* eslint-disable react/jsx-key */
import TrendingInfo from "../data/TrendingCardsData"
const TrendingCards = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row flex-wrap justify-center items-center gap-4 p-4 md:-0">
      {TrendingInfo.map((card) =>{ return(
      <div key={card.id} className="relative bg-gray-100 w-full md:w-[280px] rounded-l-[25px] rounded-r-[25px] overflow-hidden">
        <img src={card.img} alt="trending-img" className="w-full" />
        <div className="flex items-center justify-between p-5 ">
          <div className="hover:*:text-bsBlue">
          <h4 className="text-base text-gray-500">{card.h4}</h4>
          <h3 className="font-medium text-lg">{card.h3}</h3>
          </div>
          <a href="#" className="bg-lightRed hover:bg-bsBlue p-3 rounded-full text-white">
            {card.icon}
          </a>
        </div>
        <div className="absolute top-4 right-1 font-bold text-lg text-white bg-bsBlue py-2 px-4 rounded-lg">
          <p className="line-through">{card.discount}</p>
          <p>{card.price}</p>
        </div>
      </div>
    )
    })}
    </div>
  )
}

export default TrendingCards