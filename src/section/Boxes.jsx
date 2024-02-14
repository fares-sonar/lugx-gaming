/* eslint-disable react/jsx-key */
import Box from '../components/Box'
import BoxInfo from '../data/BoxData';

const Boxes = () => {
  const card = BoxInfo.map((box) => <Box key={box.h3} image={box.img} paragraph={box.h3} />)
  return (
    <>
      <section className= " mx-auto max-w-[1200px] flex flex-col md:flex md:flex-row flex-wrap justify-center items-center gap-4 px-4 -mt-[100px] pt-10 z-[2]">
        {card}
      </section>
    </>
  )
}

export default Boxes