import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  
  return (
    <div className='footer-container'>
      <section className='footer-logo' style={{width:'100%',display:'grid',gridTemplateColumns:'20% 60% 20%'}}>
            <Link to='/' className='social-logo'>
              AMC
            </Link>
            <h1 style={{color:'white',fontFamily:'quicksand',display:'flex',justifyContent:'center',fontSize:'2rem'}}>FIND US HERE</h1>

          </section>
    
      <section class='social-media'>
        <div class='social-media-wrap' style={{display:'flex',justifyContent:'center'}}>
      
          <div class='social-icons' >
            
            <a href='https://www.youtube.com/channel/UCm2KEG44_Uroi-eTzEVYurw'>
              <i class="fab fa-youtube fa-4x" />
            </a>
            <a href='https://www.facebook.com/amc.iitbhu/'>
              <i class="fab fa-facebook fa-4x" />
            </a>
            <a href='https://www.instagram.com/amc.iitbhu/'>
              <i class="fab fa-instagram fa-4x" />
            </a>
            <a href='https://github.com/AMC-IITBHU/AMC-IITBHU.github.io'>
              <i class="fab fa-github fa-4x" />
            </a>
            <a href='https://in.linkedin.com/company/amc-rocks'>
              <i class="fab fa-linkedin fa-4x" />
            </a>
          </div>
        </div>
      </section>
      <small class='website-rights' style={{paddingTop:'1rem'}}>&copy;{new Date().getFullYear()} AMC IIT(BHU) | All Rights Reserved</small>

    </div>
  );
}

export default Footer;
