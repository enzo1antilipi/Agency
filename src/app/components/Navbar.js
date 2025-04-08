'use client'

import styles from '../Styles/Navbar.module.css'
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link"


export default function Navbar(){
 const [scrolling, setScrolling] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
    return(
      <nav  className={`${styles.navbar} ${scrolling ? styles.scrolled : ""}`}>
        <div className={styles.navContainer}>
            <h1 className={styles.logo}>Pixel&Code</h1>
               <button className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            <Link className={styles.navLink} href="/">Inicio</Link>
            <Link className={styles.navLink} href="/about">Quienes somos</Link>
            <Link className={styles.navLink} href="/proyects">Proyectos</Link>
            <Link className={styles.navLink} href="/servicios">Servicios</Link>
            <Link className={styles.navLink} href="/contact">Contacto</Link>
            </ul>
        </div>
    </nav>
    )
}