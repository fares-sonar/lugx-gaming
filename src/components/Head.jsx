import Btn from "./Btn"
const Head = (prop) => {

  return (
    <>
    <div className="flex justify-center md:justify-between items-center p-4">
      <div>
      <h3 className="uppercase text-lightRed text-sm font-bold">{prop.title}</h3>
      <h2 className="text-4xl font-bold my-8 capitalize">{prop.text}</h2>
      </div>
      <Btn text="VIEW ALL"/>
    </div>
    </>
  )
}

export default Head