/* eslint-disable react/jsx-key */
import cardInfo from "../data/GameCardsData"
const GameCards = () => {
  return (
      <section className="flex flex-col md:flex md:flex-row gap-4 p-4">
        {cardInfo.map((card)=> {
          return(
            <div key={card.id} className="flex flex-col justify-center items-center bg-white shadow-shadow rounded-3xl w-full md:w-[200px] ">
              <img src={card.img} alt="game" className="rounded-3xl mb-3 w-full" />
              <div className="text-center">
                <span>{card.span}</span>
                <h3 className="font-bold text-lg my-2 hover:text-bsBlue">{card.h3}</h3>
                <button className="-mb-12">
                  {card.link}
                </button>
              </div>
            </div>
          )
        })}
      </section>
  )
}

export default GameCards