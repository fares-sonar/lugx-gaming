import {Container} from '../components/index';
import {Boxes,Trending,TopGame,Categories,Subscribe} from '../section/index';
const Home = () => {
  return (
    <>
      <Container />
      <Boxes />
      <Trending/>
      <TopGame/>
      <Categories showButton={true}/>
      <Subscribe/>
    </>
  )
}

export default Home