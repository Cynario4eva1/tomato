import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
         <Link to='/'><img src={assets.logo} alt="" /></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam provident voluptatibus fuga iusto. Ad nihil laudantium voluptatem commodi porro. Explicabo enim fugit architecto assumenda cupiditate inventore neque recusandae.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>233-597-555-0000</li>
            <li>contact@tomato.com</li>
            <li> Design By <span>Cynario4eva</span> </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
       Copyright 2024 © tomato.com - All Rights Reserved 
      </p>
      
    </div>
  )
}

export default Footer

