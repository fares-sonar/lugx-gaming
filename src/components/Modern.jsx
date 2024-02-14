/* eslint-disable react/no-unescaped-entities */
import { FaBagShopping } from "react-icons/fa6";
import {Categories}  from "../section";
import {Head}  from "../components";
import singleGame from '../images/single-game.jpg'
const Modern = () => {
  return (
    <>
      <section className="max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex md:flex-row justify-center  mb-10 gap-8">
          <picture className="flex-0 md:flex-1">
            <img src={singleGame} alt="game" className=" w-full md:w-full" />
          </picture >
          <div className="flex-0 md:flex-1">
            <h2 className="text-3xl font-bold">Call of Duty®: Modern Warfare® II</h2>
            <p className="mt-4 mb-8 text-bsBlue font-bold text-3xl"><span className="text-sm text-gray-400 line-through">$28</span> $22</p>
            <p className="my-14">LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
            <form className="flex items-center gap-4 my-10" >
              <input defaultValue={"1"} type="number" className="w-20 p-3 rounded-full text-center bg-gray-100"/>
              <a href="#" className="flex items-center gap-2 font-medium uppercase bg-lightRed hover:bg-bsBlue text-white p-3 rounded-full">
              <FaBagShopping />
                add to cart
              </a>
            </form>

            <ul className="space-y-8 mt-10">
              <li className="uppercase text-bsBlue"><span className="text-gray-400 text-sm w-32 inline-block">Game ID: </span>cod mmi</li>
              <li className="uppercase text-bsBlue"><span className="text-gray-400 text-sm w-32 inline-block">Genre: </span>action, team, single</li>
              <li className="uppercase text-bsBlue"><span className="text-gray-400 text-sm w-32 inline-block">Multi-tags: </span>war, Battle, Royal</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-6 my-20 rounded-2xl">
          <h2 className="text-bsBlue text-2xl font-medium">Description | <span className="text-black">Reviews (3)</span></h2>
          <p className="my-10">You can search for more templates on Google Search using keywords such as "template digital marketing", "template one-page", "template gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
          <p>Coloring book air plant shabby chic, crucifix normale raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
        </div>
        <div className="my-20">
          <Head text="Related Games" title="ACTION" />
          <Categories showButton={false}/>
        </div>  
      </section>
    </>
  )
}

export default Modern