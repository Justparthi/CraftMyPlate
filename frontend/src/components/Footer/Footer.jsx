import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ullam blanditiis fuga consectetur architecto est quod. Perspiciatis debitis dolore tempore libero animi quos numquam, cum et nesciunt adipisci eligendi sit.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className="footer-content-right">
                <h2>Get In touch</h2>
                <ul>
                    <li>+1-123-421-3221</li>
                    <li>Contact@panda.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2023 @ panda.com - all rights reserved.</p>
    </div>
  )
}

export default Footer
