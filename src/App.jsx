import {Nav,Footer, Home} from './components/index';
import {OurShop, ProductsDetails, ContactUs} from './section/index';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
const  App = () =>{
  return (
    <>
      <Router basename='/lugx-gaming' >
        <Nav/>
        <Routes>
          
          <Route path='*' element={<Home />}/>
          <Route path='/our-shop' element={<OurShop />}/>
          <Route path='/product-details' element={<ProductsDetails />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
        </Routes>
        <Footer/> 
      </Router>
    </>
  )
}

export default App
