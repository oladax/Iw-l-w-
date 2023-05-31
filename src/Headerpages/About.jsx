import React, { useState, useEffect } from 'react';
import img from './wole_soyinka-removebg-preview.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function About() {
  const [text, setText] = useState('');

  useEffect(() => {
    const message = "The main objective of Iwèlẹ̀wà.";
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
            <p>Welcome to our bookstore, a haven for book lovers and avid readers. We are passionate about literature and believe in the power of books to inspire, educate, and entertain. Our mission is to provide a curated collection of books that cater to diverse interests and genres.</p>
      <p>At our bookstore, you'll find an extensive range of titles, from timeless classics to contemporary bestsellers. Whether you're seeking fiction, non-fiction, poetry, or self-help books, we have something for everyone.</p>
      <p>Thank you for choosing our bookstore as your literary destination. We look forward to being a part of your reading journey and helping you discover the joy of books.</p>
      <blockquote>
        "A tiger doesn't proclaim its tigritude, it pounces."
      </blockquote>
            <div className="author">
              <span className="author-name">Wole Soyinka</span>
              <NavLink to="/Developer" className="getbook">Developer</NavLink>
            </div>
          </div>
          <div className="wole">
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

export default About;
