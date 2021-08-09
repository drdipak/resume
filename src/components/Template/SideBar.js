import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dr. Dipak Pinjari</h2>
        <p><a href="mailto:dpinjari@gmail.com">dpinjari@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Dr. Dipak Pinjari.
        Dr. Dipak V. Pinjari is an UGC Assistant Professor in Engineering Sciences
        at Institute of Chemical Technology (ICT), Mumbai where he was instrumental in
        setting up the laboratory for process intensification and sustainable engineering.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dipak Pinjari <Link to="/">drdipak.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
