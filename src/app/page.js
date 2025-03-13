import Image from "next/image";
import styles from "./page.module.css";
import { Poppins,Inter } from "next/font/google"


const poppins = Poppins({
  subsets: ["latin"], // Idiomas compatibles
  weight: "700", // Peso disponible para Italianno
});

const inter = Inter({
  subsets: ["latin"], // Idiomas compatibles
  weight: "500", // Peso disponible para Italianno
});
export default function Home() {



  return (
    <div >
      <main >
      <div className={styles.imgContainer}>
         <Image
           className="imgHome"
            src="/imghome2.jpg"
            alt=""
            layout="responsive"
            width={2040}
            height={1550}
            priority
          />
            <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={poppins.className} style={{fontSize:"50px"}}>Transformamos ideas en experiencias digitales únicas</h1>
          <h3 className={inter.className}>Diseño web creativo y desarrollo de software a medida para impulsar tu negocio.</h3>
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${inter.className}`} >Ver proyectos</button>
            <button className={`${styles.buttonContact} ${inter.className}`}>Contactar</button>
        </div>
       </div>
      </div>
      <section className={styles.SectionService}>
          <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Servicios</h3>
          <h1 className={inter.className} style={{marginTop:"0px"}}> Esto es lo que hacemos mejor</h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48"><path fill="currentColor" d="M12.081 5.113c.436.199.72.63.731 1.109c.04 1.782.67 2.787 1.395 3.791l.202.278c.7.951 1.591 2.162 1.591 3.957a5.5 5.5 0 0 1-2.221 4.416c.637.563 1.082 1.27 1.395 2.005c.7 1.649.826 3.665.826 5.278c0 2.64-.408 6.68-1.156 10.08c-.373 1.693-.845 3.3-1.43 4.513c-.29.603-.641 1.177-1.073 1.616c-.435.442-1.052.844-1.837.844s-1.402-.401-1.837-.843c-.432-.44-.783-1.013-1.074-1.616c-.586-1.213-1.06-2.82-1.433-4.513c-.75-3.4-1.16-7.44-1.16-10.08c0-1.615.128-3.631.831-5.28c.313-.735.758-1.44 1.394-2.001A5.5 5.5 0 0 1 5 14.247c0-1.316.168-2.579 1.059-4.05c.846-1.398 2.307-2.919 4.705-4.909a1.25 1.25 0 0 1 1.317-.175m-3.884 6.38c-.58.956-.697 1.725-.697 2.755a3 3 0 0 0 6 0c0-.947-.411-1.515-1.166-2.558l-.155-.215c-.537-.745-1.121-1.622-1.49-2.808c-1.282 1.181-2.038 2.076-2.492 2.825m-.066 10.155c-.493 1.155-.631 2.738-.631 4.3c0 2.451.389 6.312 1.101 9.54c.358 1.622.782 3.01 1.243 3.965c.232.48.442.784.606.95q.03.031.054.052q.024-.02.054-.051c.163-.167.373-.47.604-.95c.46-.955.884-2.343 1.24-3.965c.711-3.229 1.098-7.09 1.098-9.542c0-1.563-.136-3.145-.627-4.3c-.238-.56-.534-.957-.882-1.217c-.334-.249-.796-.43-1.487-.43s-1.154.181-1.49.43c-.348.26-.645.66-.883 1.218M21 9.5a9.5 9.5 0 0 0-4.085.92a14 14 0 0 0-.896-1.319l-.19-.257a11 11 0 0 1-.347-.503A11.95 11.95 0 0 1 21 7c6.29 0 11.45 4.84 11.959 11h3.791A6.25 6.25 0 0 1 43 24.25v10.5A6.25 6.25 0 0 1 36.75 41h-10.5A6.25 6.25 0 0 1 20 34.75v-3.791a12 12 0 0 1-2.27-.41a54 54 0 0 0 .208-2.553a9.4 9.4 0 0 0 2.062.452V24.25A6.25 6.25 0 0 1 26.25 18h4.198c-.5-4.777-4.539-8.5-9.448-8.5m15.75 11h-3.843A12.006 12.006 0 0 1 22.5 30.907v3.843a3.75 3.75 0 0 0 3.75 3.75h10.5a3.75 3.75 0 0 0 3.75-3.75v-10.5a3.75 3.75 0 0 0-3.75-3.75M22.5 28.382a9.51 9.51 0 0 0 7.882-7.882H26.25a3.75 3.75 0 0 0-3.75 3.75z"/></svg>
              <h3>Diseño web</h3>
              <p>Creacion de sitios web modernos responsive y optimizados</p>
            </div>
            <div className={styles.box}>
              <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z"/></g></svg>
              <h3>Desarrollo de Software</h3>
              <p>Aplicaciones web, integraciones y automatizacion de procesos</p>
            </div>
            <div className={styles.box}>
              <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 32 32"><path fill="currentColor" d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4zm8 12H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2v-6h-2zM6 6h12V4H6a2 2 0 0 0-2 2v6h2zm4 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m0 14H4V16h6z"/></svg>
             <h3>Desarrollo de Apps</h3>
             <p>Aplicacion moviles intuitivas y funcionales para iOS y Android.</p>
            </div>
          </div>
      </section>
      <section className={styles.SectionAbout}>
        <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Quienes somos?</h3>
        <h1 className={inter.className} style={{marginTop:"0px"}}>El equipo detras de las soluciones digitales</h1>
         {/* Imagen del desarrollador */}

     <div className={styles.profileContainer}>
 
      <div className={styles.imageContainer}>
        <img src="/imgHome.jpg" alt="Nombre del desarrollador" className={styles.profileImage} />
      </div>
      
      {/* Información del desarrollador */}
      <div className={styles.profileInfo}>
        <h2 className={inter.className} style={{color:"white"}}>Enzo Antilipi</h2>
        <h4 className={inter.className}>Desarrollador de Software</h4>
        <p className={inter.className}>
          Lorem ipsum dolor sit amet. Sed expedita illum non alias ipsam non dolores assumenda non commodi officia ex fuga earum sit nostrum eaque cum unde laboriosam. Cum dolore dolorum eum galisum corporis sit maiores.
        </p>
        
        {/* Redes sociales */}
        <div className={styles.socialLinks}>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
      
     <div className={styles.profileContainer}>
     
      
      {/* Información del desarrollador */}
      <div className={styles.profileInfo}>
        <h2 className={inter.className} style={{color:"white"}}>Romina Yudica</h2>
        <h4 className={inter.className}>Diseñadora Gráfica especializada en Web</h4>
        <p className={inter.className}>
          Lorem ipsum dolor sit amet. Sed expedita illum non alias ipsam non dolores assumenda non commodi officia ex fuga earum sit nostrum eaque cum unde laboriosam. Cum dolore dolorum eum galisum corporis sit maiores.
        </p>
        
        {/* Redes sociales */}
        <div className={styles.socialLinks}>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>
       <div className={styles.imageContainer}>
        <img src="/fotoRomi.jpg" alt="Nombre del desarrollador" className={styles.profileImage} />
      </div>
    </div>
        
        
      </section>
      <section className={styles.SectionProyects}>
  <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Proyectos</h3>
  <h1 className={inter.className}>Nuestro trabajo habla por nosotros</h1>  

  <div className={styles.projectsContainer}>
    {/* Tarjeta 1 */}
    <div className={styles.projectCard}>
      <img src="/proyecto1.jpg" alt="Proyecto 1" className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h2 className={inter.className}>Web Bruno Pas</h2>
        <p className={inter.className}>Diseño web</p>
        <p className={inter.className} style={{fontSize:"16px"}} > Descripción breve del proyecto. Explica su propósito y tecnología usada.</p>
      </div>
    </div>

    {/* Tarjeta 2 */}
    <div className={styles.projectCard}>
      <img src="/proyecto2.jpg" alt="Proyecto 2" className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h2 className={inter.className}>App Join</h2>
        <p className={inter.className}>Desarrollo App</p>
        <p className={inter.className} style={{fontSize:"16px"}} >Descripción breve del proyecto. Explica su propósito y tecnología usada.</p>
      </div>
    </div>

    {/* Tarjeta 3 */}
      <div className={styles.projectCard}>
        <img src="/proyecto3.jpg" alt="Proyecto 3" className={styles.projectImage} />
        <div className={styles.projectInfo}>
          <h2 className={inter.className}>Brickcontrol Software</h2>
          <p className={inter.className}>Desarrollo Software</p>
          <p className={inter.className} style={{fontSize:"16px"}} >Descripción breve del proyecto. Explica su propósito y tecnología usada.</p>
        </div>
      </div>
    </div>
    <button className={styles.buttonProyects}>Ver mas proyectos</button>
  </section>

            
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
