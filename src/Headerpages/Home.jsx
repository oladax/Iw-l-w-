import React, { useState, useEffect } from 'react';
import img from './CNA4-e1624224608694-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const message = "Iwèlẹ̀wà, books are beauty!";
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
    const btn = document.querySelector(".dropbtn");
    const mode = document.querySelectorAll(".mode button");
    btn.classList.toggle("changemode");
    body.classList.toggle("changemode");
    getbook.classList.toggle("changemode");
    mode.forEach((link) => link.classList.toggle("changemode"));

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
              In the realm of books, we embark on a journey of infinite
              possibilities. Each page is a gateway to new worlds, where dreams
              become tangible and ideas take flight. Books are the compasses
              that guide us through the labyrinth of life, illuminating our
              path and expanding our horizons.
            </p>
            <blockquote>
              "One of the reasons why we crave love, and seek it so desperately,
              is that love is the only cure for loneliness, and shame, and
              sorrow. But some feelings sink so deep into the heart that only
              loneliness can help you find them again. Some truths about
              yourself are so painful that only shame can help you live with
              them. And some things are just so sad that only your soul can do
              the crying for you."
            </blockquote>
            <div className="author">
              <span className="author-name">Chimamanda Ngozi Adichie</span>
              <NavLink to="/About" className="getbook">About</NavLink>
            </div>
          </div>
          <div className="image-con">
            <img src={img} alt={img} />
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
