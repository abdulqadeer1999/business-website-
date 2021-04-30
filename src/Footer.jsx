import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div  >
{/* 
            <section>

            </section>
            <footer className="w-100 bg-light  text-center">
               
        <p> &#169;Abdul Qadeer.All Rights Reserved || Terms and Conditions Apply </p>
            </footer> */}
            
		<footer className="footer-distributed">

<div className="footer-left">

    <h3>Company<span>logo</span></h3>

    {/* <p className="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Blog</a>
        ·
        <a href="#">Pricing</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
    </p> */}
          <br/>
          <br />
    <p className="footer-company-name">AQ Technologies &copy; 2021</p>
</div>

<div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>21 Office Civic Center</span> Khairpur Mir's</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>03058875502</p>
    </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><Link to="aqsolangi009@gmail.com">aqsolangi009@gmail.com</Link></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div className="footer-icons">

        <a href ="https://web.facebook.com/A-Q-Technologies-101644422077375" target="_blank"><i class="fa fa-facebook"></i></a>
        <a href ="#"><i class="fa fa-twitter"></i></a>
        <a href ="https://www.linkedin.com/in/abdul-qadeer-solangi-406035143/" target="_blank"><i class="fa fa-linkedin"></i></a>
         <a  href="https://github.com/abdulqadeer1999" target="_blank" ><i class="fa fa-github" ></i></a>

    </div>

</div>

</footer>
        </div>
    )
}


export default Footer ;