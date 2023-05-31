import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const message = "Who developed Iwèlẹ̀wà?";
    let i = 0;
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const [sun, setSun] = useState(false)

  const handlesun = () => {
    const body = document.getElementById("body");
    const navLinks = document.querySelectorAll(".NavLink");
    const getbook = document.querySelector(".getbook");

    body.classList.toggle("changemode");
    getbook.classList.toggle("changemode");
    navLinks.forEach((link) => link.classList.toggle("changemode"));
    setSun(!sun)

  };

  return (
    <main>
      <section>
        <div className="home-content-container">
          <div className="introduction-con">
            <h2>{text}</h2>
            <p>
            {text} Oladax designed and developed Iwèlẹ̀wà. For more information, you can reach out to him on his social contacts.<br>
      </br>   Thank you! 
            </p>

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
            <blockquote>
              "The best best way to destroy illusions and superstitions is by analysing every books you read."
            </blockquote>
            <div className="author">
              <span className="author-name">Oladax Oladax</span>
              <NavLink to="/Book" className="getbook">Books</NavLink>
            </div>
          </div>
          <div className="Oladax">
            <div className="mode">
              <button onClick={handlesun}>
              <FontAwesomeIcon icon={sun ? faSun : faMoon}/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
