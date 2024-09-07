import { FaCirclePlay } from "react-icons/fa6"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Api from "./components/Api/Api"
import { Route, Routes } from "react-router-dom"
import Show from "./components/Api/Show"
import Create from "./components/Api/Create"
import Update from "./components/Api/Update"



const App = () => {
  const logo = { img: "/assets/img/logo.png", text: "QuickStart" }
  const items = [
    {
      id: "Home",
      name: "Home"
    },
    {
      id: "About",
      name: "About"
    },
    {
      id: "Features",
      name: "Features"
    },
    {
      id: "Services",
      name: "Services"
    },
    {
      id: "Pricing",
      name: "Pricing"
    },
    {
      id: "Contact",
      name: "Contact"
    }
  ]
  return (
    <>
{/*       <NavBar logo={logo} items={items} btn="Get Strated" />
      <Hero bgImg="/assets/img/hero-bg-light.webp" img="/assets/img/hero-services-img.webp" title={{ first: " Welcome to", sec: "QuickStart" }} desc="Quickly start your project now and set the stage for success" firstBtn="Get Started" secBtn="Watch Video" >
        <FaCirclePlay />
      </Hero> */}
      <Routes>
        <Route path="/" element ={<Api/>} />
        <Route path="/show/:id" element ={<Show/>} />
        <Route path="/create" element ={<Create/>} />
        <Route path="/update/:id" element ={<Update/>} />
      </Routes>
    </>
  )
}

export default App
