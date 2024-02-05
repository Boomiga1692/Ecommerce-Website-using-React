import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return(
        <div className="footer">
         <div className="footer_logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPIN</p>
         </div>
         <ul className="footer-links">
           <a href=""><li>Company</li></a> 
           <a href=""><li>Products</li></a> 
           <a href=""><li>Offices</li></a> 
           <a href=""><li>About</li></a> 
           <a href=""><li>Contact</li></a> 
         </ul>
         <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href=""><img src={instagram_icon} alt="" /></a>
            </div>

            <div className="footer-icons-container">
                <a href=""><img src={pintester_icon} alt="" /></a>
            </div>

            <div className="footer-icons-container">
                <a href=""><img src={whatsapp_icon} alt="" /></a>
            </div>
         </div>
         <div className="footer-copyrights">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
         </div>
        </div>
    )
}

export default Footer;