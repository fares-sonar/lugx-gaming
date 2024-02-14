import TrendingCards from '../components/TrendingCards'
const GameShop = () => {
  const pages = [
    {num:'<'},
    {num:'1'},
    {num:'2'},
    {num:'3'},
    {num:'>'},
  ]
  return (
    <>
      <section className="flex flex-wrap flex-col items-center justify-center gap-4 my-10">
        <TrendingCards/>
        <TrendingCards/>
        <TrendingCards/>
        <ul className='my-10'>
          {pages.map((page) => (
            <li key={page.num} className='bg-gray-100 hover:bg-bsBlue hover:text-white inline text-center px-3 py-2 rounded-full mr-6'>
              <a href="#" className='font-bold text-lg'>{page.num}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default GameShop