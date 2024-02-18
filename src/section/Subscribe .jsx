import Btn from '../components/Btn'
import Button from '../components/Button'
const Subscribe  = () => {
  return (
    <>
      <section className=' relative max-w-[1200px] my-28 mx-auto justify-between items-center lg:items-end gap-4 p-4 flex flex-col md:flex md:flex-row flex-wrap before:content-[url("/src/images/cta-bg.jpg")] before:absolute before:-z-10 before:left-[25%] before:-top-[70px]   before:rounded-[25px] before:overflow-hidden before:hidden lg:before:block '>
        <div className='bg-gray-100 rounded-3xl p-6 md:p-20 w-full md:w-fit '>
          <div className='space-y-8 '>
            <h3 className='text-lightRed uppercase font-bold'>our shop</h3>
            <h2 className='text-4xl leading-10 font-bold'>Go Pre-Order Buy <br /> & Get Best <span className='text-bsBlue'>Prices</span> <br /> For You!</h2>
            <p className='font-medium text-lg my-10'>Lorem ipsum dolor consectetur adipiscing, <br /> sed do eiusmod tempor incididunt.</p>
            <Btn text='shop now'/>
          </div>
        </div>

        <div className='bg-gray-100 rounded-3xl p-4 md:p-16 h-fit w-full md:w-fit'>
          <div className='space-y-4 '>
            <h3 className='text-lightRed uppercase font-bold'>NEWSLETTER</h3>
            <h2 className='text-4xl leading-10 font-bold'>Get Up To $100 Off <br /> Just Buy <span className='text-bsBlue'>Subscribe </span> <br /> Newsletter!</h2>
            
          <form className="flex flex-col md:flex md:flex-row  gap-4 md:gap-0 justify-between items-center bg-transparent md:bg-white rounded-full max-w-[450px] w-full mt-12 ">
            <input type="text" placeholder="Type Something" className="border-none w-full md:w-[100px] rounded-full md:rounded-none outline-none bg-white text-black ml-4 p-3" />
            <Button text="subscribe now"/>
        </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscribe 