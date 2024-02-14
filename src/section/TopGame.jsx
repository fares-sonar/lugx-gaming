import Head from '../components/Head'
import GameCards from '../components/GameCards'
const TopGame = () => {
  return (
    <section className=" bg-gray-100 rounded-[100px] my-20">
      <div className='max-w-[1200px] mx-auto py-20'>
      <Head text="most played" title="top game" />
      <GameCards/>
      </div>
    </section>
  )
}

export default TopGame