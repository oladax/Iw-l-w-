import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook,faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Headercontainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menu = () => {
    let dropdown_content = document.querySelector(".Menu-dropdown");
    let links = document.querySelectorAll(".Links a")
    dropdown_content.classList.toggle("toggle");
    links.forEach((link) => link.classList.toggle("toggle"))
    setIsMenuOpen(!isMenuOpen);
    

  }
  

  const element = <FontAwesomeIcon icon={faBook}/>
  return (
    <div>
      



      <div className="header-main">
        <header>
      <div className="header-container">
      <h1>{element}Iwèlẹ̀wà</h1>

<nav>
    <NavLink exact to="/" className="NavLink">Home</NavLink>
    <NavLink to="/About" className="NavLink">About</NavLink>
    <NavLink to="/Developer" className="NavLink">Developer</NavLink>
    <NavLink to="/Book" className="NavLink">Books</NavLink>

</nav>

<section className="dropdown-container">
  <div className="dropdown">
    <button className="dropbtn" onClick={menu}>  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
</button>
   
  </div>
</section>
      </div>

        </header>
      </div>
      <div className='Menu-dropdown'>
       <div className="link-con">
       <div className="Links">
        <NavLink exact to="/" onClick={menu} className="NavLink">Home</NavLink>
        <NavLink to="/About" onClick={menu} className="NavLink">About</NavLink>
        <NavLink to="/Developer" onClick={menu} className="NavLink">Developer</NavLink>
        <NavLink to="/Book" onClick={menu} className="NavLink">Books</NavLink>
        </div>
        <div className='social-media-container'>
            <a href='https://web.facebook.com/olamide.daniel.581/?_rdc=1&_rdr' class="social-media-link">
    <FontAwesomeIcon icon={faFacebook}/>
  </a>
  <a href='mailto:danielolamide141@gmail.com ' class="social-media-link">
    <FontAwesomeIcon icon={faGoogle}/>
  </a>
  <a href='https://www.linkedin.com/in/olamide-daniel-812039243?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBgGEK%2BqMSaqM3amwcmgV2Q%3D%3D' class="social-media-link">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
  <a href='https://api.whatsapp.com/message/MQX3O3MI2UR4L1?autoload=1&app_absent=0' class="social-media-link">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
            </div>
       </div>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Headercontainer