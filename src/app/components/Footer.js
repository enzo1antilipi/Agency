import styles from '../Styles/Footer.module.css'

export default function Footer(){
   
    
    return(
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Pixel&Code. Todos los derechos reservados.</p>
      </div>
    </footer>
    )
}