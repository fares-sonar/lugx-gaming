const Container = (prop) => {
  return (
    <>
      <section className=" relative bg-[url('./images/banner-bg.jpg')] bg-no-repeat bg-cover h-[150vh] md:h-[100vh] rounded-b-[135px] -z-10">
        {prop.children}
      </section>
    </>
  )
}

export default Container