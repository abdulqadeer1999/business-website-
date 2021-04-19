import { NavLink } from "react-router-dom";
import images from "../src/images/home1.png"
import Common from "./Common"

const Home = () => {
  return (
    <div>
      {/* <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

             

              <div className ="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Grow your business with <strong className="brand-name">Abdul Qadeer</strong></h1>
              <h2 className="my-3">
                We are the team of talented developers making websites
              </h2>
              <div className="mt-3">
                 <NavLink to="/service" className="btn-get-started">Get started</NavLink>
              </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
               <img src= {images} className="img-fluid animated " alt="home img" style={{width:"550px",marginTop:"20px"}} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Common name= "Grow your business with"
       imgsrc={images} 
       visit= "/service"
        btname="Get Started" />
    </div>
  )
}

export default Home;