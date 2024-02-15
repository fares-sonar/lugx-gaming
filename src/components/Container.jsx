import {Hero} from "../section/index"
const Container = () => {
  return (
    <>
      <section className=" relative bg-[url('./dist/images/banner-bg.jpg')] bg-no-repeat bg-cover h-[150vh] md:h-[100vh] rounded-b-[135px] -z-10">
        <Hero/>
      </section>
    </>
  )
}

export default Container