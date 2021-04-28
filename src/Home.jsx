import { NavLink } from "react-router-dom";
// import images from "../src/images/home1.png"
import images from "../src/images/s3.svg"
import Common from "./Common"

const Home = () => {
  return (
    <div>
    
      <Common name= "Grow your business with"
       imgsrc={images} 
       visit= "/service"
        btname="Get Started" />
        
       
    </div>
  )
}

export default Home;