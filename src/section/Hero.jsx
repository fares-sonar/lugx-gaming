import Button from '../components/Button';
import bannerImg from '../images/banner-image.jpg';
const Hero = () => {
  return (
    <>
    <section className="mx-auto max-w-[1200px] px-4 flex flex-col max-md:flex md:flex-row items-center justify-between text-white pt-[180px] md:pt-[255px] ">

      <div className="flex flex-col  md:w-1/2 items-center md:items-start mb-6 md:mb-0 ">

        <h2 className="text-2xl font-medium ">WELCOME TO LUGX</h2>

        <h1 className="text-5xl font-bold my-8 leading-tight text-center md:text-start">BEST <span className="relative after:absolute after:content-[url('./images/caption-dec.png')] after:left-0 after:top-7">GAMING</span> SITE EVER!</h1>

        <p className=" my-4 text-center md:text-start">LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>

        <form className="flex justify-between items-center bg-white rounded-full max-w-[450px] w-full mt-12 ">
          <input disabled type="text" placeholder="Type Something" className="border-none outline-none bg-transparent text-black p-2 ml-4" />
          <Button text="search now"/>
        </form>
        
      </div>

      <picture className="relative">
        <img src={bannerImg} alt="banner-image" className="rounded-3xl w-full md:w-[400px] " />
        <span className="absolute top-4 right-2 bg-bsBlue py-1 px-3 rounded-full font-extrabold text-lg ">$22</span>
        <span className="absolute -bottom-6 -left-8 bg-lightRed w-24 h-24 flex justify-center items-center rounded-full font-extrabold text-3xl">-40%</span>
      </picture>

    </section>
    </>
  )
}

export default Hero