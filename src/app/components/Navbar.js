'use client'

import styles from '../Styles/Navbar.module.css'
import { useState, useEffect } from "react";

export default function Navbar(){
 const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
      <nav  className={`${styles.navbar} ${scrolling ? styles.scrolled : ""}`}>
        <div className={styles.navContainer}>
            <h1 className={styles.logo}>Pixel&Code</h1>
            <ul className={styles.navLinks}>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#home">Quiénes somos</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#about">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    </nav>
    )
}