import styles from '../Styles/Footer.module.css'

export default function Footer(){
   
    
    return(
<footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Presencia en Argentina</h4>
            <p className={styles.provincias}>
              Buenos Aires · CABA · Córdoba · Santa Fe · Mendoza · Tucumán · Salta · Entre Ríos · Chubut · Río Negro · Neuquén ·
              La Pampa · San Juan · San Luis · Catamarca · La Rioja · Corrientes · Misiones · Formosa · Chaco · Santiago del Estero · Jujuy · Tierra del Fuego · Santa Cruz
            </p>
          </div>
          <div className={styles.column}>
            <h4>Pixel&Code</h4>
            <p>Desarrollamos software a medida para transformar ideas en soluciones reales.</p>
            <p>Webs modernas, apps funcionales y herramientas digitales para potenciar tu negocio.</p>
          </div>
          <div className={styles.column}>
            <h4>Contacto</h4>
            <p>Correo: enzoantilipi1@gmail.com</p>
            {/* <p>Instagram: @pixelycode</p> */}
            <p>Teléfono: +54 9 2945 638804</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Pixel&Code. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>


    // <footer className={styles.footer}>
    //   <div className={styles.container}>
    //     <p>&copy; {new Date().getFullYear()} Pixel&Code. Todos los derechos reservados.</p>
    //   </div>
    // </footer>
    )
}