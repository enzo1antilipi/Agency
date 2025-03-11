import styles from '../Styles/Footer.module.css'

export default function Footer(){
   
    
    return(
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Pixel&Code. Todos los derechos reservados.</p>
    </footer>   
    )
}