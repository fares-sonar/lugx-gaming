const Heading = (prop) => {
  return (
    <>
      <div className="bg-[url('/src/images/page-heading-bg.jpg')] bg-no-repeat bg-cover w-full h-[45vh] flex flex-col gap-12 justify-center items-center rounded-b-[135px] mb-28 ">
        <h1 className="text-white text-5xl font-extrabold uppercase">{prop.title}</h1>
        <p className="text-white font-medium text-lg">Home &gt; <span className="capitalize">{prop.text}</span></p>
      </div>
    </>
  )
}

export default Heading