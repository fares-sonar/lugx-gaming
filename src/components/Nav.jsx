/* eslint-disable no-undef */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";


const Nav = () => {
  let navItems = [
    {title: "Home", id: "home", link:'/'},
    {title: "Our Shop", id: "our-shop", link:'/our shop'},
    {title: "Product Details", id: "product-details", link:'/Product Details'},
    {title: "Contact Us", id: "contact-us", link:'/Contact Us'},
  ];
  const [open, setOpen] = useState(false);
  const [scrollY,setScrollY] = useState(0);

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrollY(window.scrollY)
    }

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // CleanUp: remove event listeners when component unmounts
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[]);
  return (
    <>
    
    <div className={` fixed w-full px-4 ${scrollY > 200 ? 'bg-bsBlue' : 'bg-transparent'} rounded-bl-[50px] rounded-br-[50px] transition-all duration-200 z-10`}>
        <nav className="mx-auto max-w-[1200px] flex items-center justify-between py-4">
        <Link to="/" >
          <img src='./images/logo.png' alt="logo" className="w-28 md:w-40"/>
        </Link>
      <div className="flex items-center gap-2">
      <ul className={` absolute md:static flex flex-col md:flex md:flex-row left-1/2 gap-4 md:gap-10 -translate-x-1/2 md:translate-x-0  bg-white md:bg-transparent text-black md:text-white text-center md:items-center mt-8 md:mt-0 rounded-b-3xl w-[500px] md:w-full [&>*:not(:last-child)]:border-b md:[&>*:not(:last-child)]:border-none [&>*:nth-child(5)]:btn [&>*:nth(5)]:ml-6  ${open ? "top-20":"top-[-250px]"}`}>
          {navItems.map((item) => (
            <li key={item.id} className=" rounded-full py-0 px-0 md:py-2 md:px-4  md:hover:bg-[rgba(255,255,255,0.10)] transition-all duration-[.3s] ease-in-out">
                <Link to={item.link} className=" font-normal hover:text-bsPink md:hover:text-white md:rounded-3xl ">
                {item.title}
                </Link>
            </li>
          ))}
          <Button text="sign in"/>
        </ul>
        <div onClick={()=> setOpen(!open)}>
            <FontAwesomeIcon className="text-white text-lg md:hidden"
            icon = {open ? faXmark:faBars}
            />
        </div>
      </div>
        </nav>
    </div>
    
    </>
  )
}

export default Nav