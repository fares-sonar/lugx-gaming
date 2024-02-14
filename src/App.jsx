import {Nav,Container,Head,TrendingCards,Footer,Heading, Modern} from './components/index';
import {Hero,Boxes,Trending,TopGame,Categories,Subscribe,OurShop,Filter,GameShop, ProductsDetails, ContactUs, ContactForm} from './section/index';
import { Route, Routes } from "react-router-dom";
const  App = () =>{
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={
          <>
            <Container>
            <Hero/>
          </Container>
            <Boxes />
          <Trending>
            <Head text="trending" title="Trending Games"/>
            <TrendingCards/>
          </Trending>
          <TopGame/>
          <Categories showButton={true}/>
          <Subscribe/>
          </>
        }/>
        <Route path='/our shop' element={<OurShop>
          <Heading title="our shop" text="our shop"/>
          <Filter/>
          <GameShop/>
        </OurShop>}/>
        <Route path='/product details' element={<ProductsDetails>
          <Heading title="MODERN WARFARE® II" text="Products Details"/>
          <Modern/>
        </ProductsDetails>}/>
        <Route path='/contact us' element={<ContactUs>
          <Heading title="Contact Us" text="Contact Us"/>
          <ContactForm/>
        </ContactUs>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
