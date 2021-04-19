import { NavLink } from "react-router-dom";
import images from "../src/images/s3.svg"
import Common from "./Common"

const About = () => {
  return (
    <div>
      <Common name= "Welcome About Page"
       imgsrc={images} 
       visit= "/contact"
        btname="Contact Now" />
    </div>
  )
}

export default About;