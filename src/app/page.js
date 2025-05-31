'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Poppins,Inter } from "next/font/google"
import { useState,useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const poppins = Poppins({
  subsets: ["latin"], // Idiomas compatibles
  weight: "700", // Peso disponible para Italianno
});

const inter = Inter({
  subsets: ["latin"], // Idiomas compatibles
  weight: "500", // Peso disponible para Italianno
});
export default function Home() {

 const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected ] = useState(null);
  const sliderRef = useRef(null);
  const handleSelect = (index)=>{
    setSelected(index);
  }
  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 300; // Ajustá esto según tu diseño
    if (direction === "left") container.scrollLeft -= scrollAmount;
    else container.scrollLeft += scrollAmount;
  };
// Ejemplo en React + Tailwind
const services = [
  {
    title: "Diseño web",
    description: "Sitios web modernos, visualmente potentes y optimizados para atraer más visitas desde el día uno.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48"><path fill="currentColor" d="M12.081 5.113c.436.199.72.63.731 1.109c.04 1.782.67 2.787 1.395 3.791l.202.278c.7.951 1.591 2.162 1.591 3.957a5.5 5.5 0 0 1-2.221 4.416c.637.563 1.082 1.27 1.395 2.005c.7 1.649.826 3.665.826 5.278c0 2.64-.408 6.68-1.156 10.08c-.373 1.693-.845 3.3-1.43 4.513c-.29.603-.641 1.177-1.073 1.616c-.435.442-1.052.844-1.837.844s-1.402-.401-1.837-.843c-.432-.44-.783-1.013-1.074-1.616c-.586-1.213-1.06-2.82-1.433-4.513c-.75-3.4-1.16-7.44-1.16-10.08c0-1.615.128-3.631.831-5.28c.313-.735.758-1.44 1.394-2.001A5.5 5.5 0 0 1 5 14.247c0-1.316.168-2.579 1.059-4.05c.846-1.398 2.307-2.919 4.705-4.909a1.25 1.25 0 0 1 1.317-.175m-3.884 6.38c-.58.956-.697 1.725-.697 2.755a3 3 0 0 0 6 0c0-.947-.411-1.515-1.166-2.558l-.155-.215c-.537-.745-1.121-1.622-1.49-2.808c-1.282 1.181-2.038 2.076-2.492 2.825m-.066 10.155c-.493 1.155-.631 2.738-.631 4.3c0 2.451.389 6.312 1.101 9.54c.358 1.622.782 3.01 1.243 3.965c.232.48.442.784.606.95q.03.031.054.052q.024-.02.054-.051c.163-.167.373-.47.604-.95c.46-.955.884-2.343 1.24-3.965c.711-3.229 1.098-7.09 1.098-9.542c0-1.563-.136-3.145-.627-4.3c-.238-.56-.534-.957-.882-1.217c-.334-.249-.796-.43-1.487-.43s-1.154.181-1.49.43c-.348.26-.645.66-.883 1.218M21 9.5a9.5 9.5 0 0 0-4.085.92a14 14 0 0 0-.896-1.319l-.19-.257a11 11 0 0 1-.347-.503A11.95 11.95 0 0 1 21 7c6.29 0 11.45 4.84 11.959 11h3.791A6.25 6.25 0 0 1 43 24.25v10.5A6.25 6.25 0 0 1 36.75 41h-10.5A6.25 6.25 0 0 1 20 34.75v-3.791a12 12 0 0 1-2.27-.41a54 54 0 0 0 .208-2.553a9.4 9.4 0 0 0 2.062.452V24.25A6.25 6.25 0 0 1 26.25 18h4.198c-.5-4.777-4.539-8.5-9.448-8.5m15.75 11h-3.843A12.006 12.006 0 0 1 22.5 30.907v3.843a3.75 3.75 0 0 0 3.75 3.75h10.5a3.75 3.75 0 0 0 3.75-3.75v-10.5a3.75 3.75 0 0 0-3.75-3.75M22.5 28.382a9.51 9.51 0 0 0 7.882-7.882H26.25a3.75 3.75 0 0 0-3.75 3.75z"/></svg>
      
    ),
  },
  {
    title: "Desarrollo de Software",
    description: "Creamos plataformas a medida, funcionales y escalables, usando tecnología de última generación.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 32 32"><path fill="currentColor" d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4zm8 12H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2v-6h-2zM6 6h12V4H6a2 2 0 0 0-2 2v6h2zm4 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m0 14H4V16h6z"/></svg>
    
    ),
  },
  {
    title: "Automatización de tareas",
    description: "Digitalizamos y automatizamos tus procesos administrativos para que trabajes menos y produzcas más.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13 20.693c-.905.628-2.36.292-2.675-1.01a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492.362 1.716 2.219.674 3.03"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 10l5-3l-5-3z"/></g></svg>
    ),
  },
  {
    title: "Aplicaciones Mobile",
    description: "Apps móviles ágiles, estables y con un diseño que enamora desde el primer toque.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z"/></g></svg>

    ),
  },
  {
    title: "Consultoría tecnológica",
    description: "Te asesoramos con claridad para que tomes decisiones tecnológicas seguras, inteligentes y rentables.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 32 32"><path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"/><path fill="currentColor" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"/></svg>
    ),
  },
  {
    title: "Mantenimiento y soporte",
    description: "Nos encargamos del soporte técnico y mantenimiento para que el sistema este en optimas condiciones",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M11.53 22h-1.06c-3.992 0-5.989 0-7.23-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.24-6.828C4.481 2 6.478 2 10.47 2h1.06c3.993 0 5.989 0 7.23 1.172C20 4.343 20 6.229 20 10v.5M7 7h8m-8 5h5"/><path d="M18 20.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 20.713a3.36 3.36 0 0 0 2.774-1.43M18 14.285c1.157 0 2.176.568 2.774 1.43M18 14.287a3.36 3.36 0 0 0-2.774 1.43M18 14.287V13m4 1.929l-1.226.788M14 20.07l1.226-.788M14 14.93l1.226.788M22 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"/></g></svg>
    ),
  },
];

  return (
    <div >
      <main >
      <div className={styles.imgContainer}>
         {/* <Image
           className={styles.imgHome}
            src="/imghome2.jpg"
            alt=""
            layout="responsive"
            width={2040}
            height={1550}
            priority
          /> */}
          <video className={styles.imgHome}
              src="/videcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/home.png"
              ></video>
            <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={poppins.className} style={{fontSize:"40px"}}>Transformamos ideas en experiencias digitales únicas</h1>
          {/* <h3 className={inter.className}>Diseño web creativo y desarrollo de software a medida para impulsar tu negocio.</h3> */}
          <p className={`${styles.cursor} ${styles.typewriterAnimation}`}>Agencia digital especializada en diseño web y desarrollo de software. </p>
          <p className={`${styles.cursorMobile} ${styles.typewriterAnimationMobile}`}>Diseño web y software a medida.</p>
          <div className={styles.buttonContainer}>
            <Link href="/proyectswebs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`${styles.button} ${inter.className}`}
            >
              Ver proyectos
            </motion.button>
            {/* <button className={`${styles.button} ${inter.className}`} >Ver proyectos</button> */}
            </Link>
            <Link href="#contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`${styles.buttonContact} ${inter.className}`}
            >
              Contactar
            </motion.button>
            {/* <button className={`${styles.buttonContact} ${inter.className}`}>Contactar</button> */}
            </Link>
            
        </div>
       </div>
      </div>
      <section className={styles.SectionService} id="servicios">
          <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Servicios</h3>
          <h1 className={inter.className} style={{marginTop:"0px"}}> Esto es lo que hacemos mejor</h1>
          <div className={styles.sliderWrapper}>
        <button onClick={() => scroll("left")} className={styles.arrow}>
          <ChevronLeft size={36} />
        </button>

        <div className={styles.slider} ref={sliderRef}>
        {services.map((service, i) => (
            <div className={styles.box} key={i}>
              <div>{service.icon}</div>
              <h3 className={inter.className}> {service.title}</h3>
              <p className={inter.className}> {service.description}.</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className={styles.arrow}>
          <ChevronRight size={36} />
        </button>
      </div>
          {/* <div className={styles.boxContainer}>
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
          </div> */}
      </section>
      {/* seccion de nosotros */}
      <section className={styles.SectionProyects}  id="proyectos">
          <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Proyectos</h3>
          <h1 className={inter.className}>Nuestro trabajo habla por nosotros</h1>  

          <div className={styles.projectsContainer}>
            {/* Tarjeta 1 */}
            <div className={styles.projectCard} >
              <img src="/proyecto1.jpg" alt="Proyecto 1" className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h2 className={inter.className}>Webs</h2>
                <p className={inter.className}>Diseño web</p>
                <p className={inter.className} style={{fontSize:"16px"}} > Creamos sitios web a medida para potenciar tu negocio o perfil profesional, adaptados a tus objetivos y con tecnología moderna.</p>
                 
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className={styles.projectCard}>
              <img src="/proyecto2.jpg" alt="Proyecto 2" className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h2 className={inter.className}>Apps</h2>
                <p className={inter.className}>Desarrollo App</p>
                <p className={inter.className} style={{fontSize:"16px"}} >Desarrollamos aplicaciones intuitivas y funcionales, pensadas para optimizar procesos o mejorar la experiencia de tus usuarios.</p>
              </div>
            </div>

            {/* Tarjeta 3 */}
              <div className={styles.projectCard}>
                <img src="/proyecto3.jpg" alt="Proyecto 3" className={styles.projectImage} />
                <div className={styles.projectInfo}>
                  <h2 className={inter.className}>Software</h2>
                  <p className={inter.className}>Desarrollo Software</p>
                  <p className={inter.className} style={{fontSize:"16px"}} >Construimos software personalizado que se integra a tu flujo de trabajo, resolviendo necesidades específicas con soluciones escalables.</p>
               
                </div>
              
           

              </div>
             

            </div>
            <Link href="/proyectswebs">
            <button className={styles.buttonProyects}>Ver proyectos</button>
            </Link>
          </section>


      {/*  */}
      <section className={styles.SectionAbout}  id="nosotros">
        <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Quienes somos?</h3>
        <h1 className={inter.className} style={{marginTop:"0px"}}>El equipo detras de las soluciones digitales</h1>
         {/* Imagen del desarrollador */}

     <div className={styles.profileContainer}>
 
      <div className={styles.imageContainer}>
        <img src="/foto_enzo.png" alt="Nombre del desarrollador" className={styles.profileImage} />
      </div>
      
      {/* Información del desarrollador */}
      <div className={styles.profileInfo}>
        <h2 className={inter.className} style={{color:"white"}}>Enzo Antilipi</h2>
        <h4 className={inter.className}>Desarrollo de Software</h4>
        <p className={inter.className}>
          Lidero el desarrollo de soluciones tecnológicas a medida para empresas y profesionales que buscan destacarse.
Con experiencia como Fullstack Developer y visión estratégica, combino tecnología, automatización y diseño funcional para transformar ideas en productos reales y efectivos.
Trabajo con equipos y clientes alineando objetivos técnicos y comerciales para que cada proyecto genere impacto y resultados concretos.
        </p>
        
        {/* Redes sociales */}
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/enzo-antilipi-978097218/" target="_blank">LinkedIn</a>
          <a href="https://portfolio-seven-teal-27.vercel.app/" target="_blank">Portafolio</a>
          <a href="https://github.com/enzo1antilipi" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
      
     <div className={styles.profileContainer}>
     
      
      {/* Información del desarrollador */}
      <div className={styles.profileInfo}>
        <h2 className={inter.className} style={{color:"white"}}>Romina Yudica</h2>
        <h4 className={inter.className}>Diseñadora Gráfica especializada en Web</h4>
        <p className={inter.className}>
          Apasionada por el diseño digital. Con más de 8 años de experiencia, fusiono estética y funcionalidad para potenciar proyectos. Me especializo en diseño web y UX/UI, creando experiencias visuales únicas que conectan con los usuarios y generan resultados.
        </p>
        
        {/* Redes sociales */}
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/romiyudica/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com/rooyudica/" target="_blank">Instagram</a>
          <a href="https://twitter.com" target="_blank">Behance</a>
        </div>
      </div>
       <div className={styles.imageContainer}>
        <img src="/fotoRomi.jpg" alt="Nombre del desarrollador" className={styles.profileImage} />
      </div>
    </div>
      </section>

      
      <section className={styles.sectionContact} id="contacto">
      <div className={styles.sectionContactTitle}>
        <h1 className={inter.className} >¿Listos para crear algo increíble juntos?</h1>
        <h3 className={inter.className} style={{color:"rgba(124, 124, 124, 1)" }}>Estamos aqui para ayudarte a llevar tu marca al siguiente nivel <br/>Escríbenos y conversamos sobre tu proyecto </h3>
      </div>
      <div className={styles.containerContact}>
      <div className={styles.containerProfiles}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
              <img src="/fotoRomi.jpg" alt="Nombre del desarrollador" className={styles.profileImageContact} />
            </div>
          <p className={`${inter.className} ${styles.contacto}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g></svg>hola@romiyudica.com.ar</p>
          <p className={`${inter.className} ${styles.contacto}`}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="green" d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1m-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2q.3-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5s-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9s.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1"/></svg>2804649512</p>
        </div>
        <div className={styles.profile}>
           <div className={styles.imageContainer}>
                <img src="/foto_enzo.png" alt="Nombre del desarrollador" className={styles.profileImageContact} />
              </div>
          <p className={`${inter.className} ${styles.contacto}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g></svg>enzoantilipi1@gmail.com</p>
          <a  href="https://wa.me/5492945638804" target="_blank" rel="noopener noreferrer" className={`${inter.className} ${styles.contacto}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20"><path fill="green" d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1m-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2q.3-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5s-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9s.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1"/></svg>2945638804</a>
        </div>
      </div>

      <div  className={styles.containerForm}> 
        <div className={styles.form}> 
              {/* Encabezado con botones */}
              <div className={styles.header}>
                <div className={styles.buttonContainerInput}>
                <button className={`${inter.className} ${styles.buttonInput} ${selected === 0 ? styles.selected : ""}`}
                  onClick={() => handleSelect(0)}>Desarrollo web</button>
                <button className={`${inter.className} ${styles.buttonInput} ${selected === 1 ? styles.selected : ""}`}
                  onClick={() => handleSelect(1)}>Desarrollo de Software </button>
                </div>
                <div className={styles.buttonContainerInput}>
                <button className={`${inter.className} ${styles.buttonInput} ${selected === 2 ? styles.selected : ""}`}
                  onClick={() => handleSelect(2)}>Desarrollado de Apps</button>
                <button className={`${inter.className} ${styles.buttonInput} ${selected === 3 ? styles.selected : ""}`}
                  onClick={() => handleSelect(3)}>Otros</button>
                </div>
                {/* {["Desarrollo Web", "Desarrollo de Software", "Desarrollo de Apps", "Otros"].map((item) => (
                  <button key={item} className={styles.button}>
                    {item}
                  </button>
                ))} */}
              </div>

              {/* Formulario */}
              <form className={styles.form}>
                <div className={styles.inputGroup}>
                  <input type="text" className={styles.input}  placeholder="Nombre"/>
                  <label className={styles.label} >Nombre</label>
                </div>

                <div className={styles.inputGroup}>
                  <input type="email" className={styles.input}  placeholder="Email"/>
                   <label className={styles.label}  >Email</label>
                </div>

                <div className={styles.inputGroup}>
                  <textarea className={styles.textarea} ></textarea>
                  <label className={styles.label}>Mensaje</label>
                
                </div>

                <button type="submit" className={styles.submitButton}>
                  Enviar
                </button>
              </form>
            
        </div>
      </div>
      <div className={styles.containerProfilesMobile}>
        <div className={styles.profileMobile}>
          <div className={styles.imageContainer}>
              <img src="/fotoRomi.jpg" alt="Romina Yudica" className={styles.profileImageContact} />
            </div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <p className={`${inter.className} ${styles.contacto}`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g></svg>hola@romiyudica.com.ar</p>
            <p className={`${inter.className} ${styles.contacto}`}> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="black" d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1m-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2q.3-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5s-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9s.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1"/></svg>2804649512</p>
        </div>
        </div>
        <div className={styles.profileMobile}>
           <div className={styles.imageContainer}>
                <img src="/foto_enzo.png" alt="Enzo Antilipi" className={styles.profileImageContact} />
              </div>
            <div style={{display:"flex", flexDirection:"column"}}>
          <p className={`${inter.className} ${styles.contacto}`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g></svg>:enzoantilipi1@gmail.com</p>
          <a  href="https://wa.me/5492945638804" target="_blank" rel="noopener noreferrer" className={`${inter.className} ${styles.contacto}`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="black" d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2C2 5.5.8 10.5 3.2 14.2l.2.3l-.8 3l3-.8l.3.2c1.3.7 2.7 1.1 4.1 1.1c1.5 0 3-.4 4.3-1.2c3.7-2.4 4.8-7.3 2.5-11.1m-2.1 7.7c-.4.6-.9 1-1.6 1.1c-.4 0-.9.2-2.9-.6c-1.7-.8-3.1-2.1-4.1-3.6c-.6-.7-.9-1.6-1-2.5c0-.8.3-1.5.8-2q.3-.3.6-.3H7c.2 0 .4 0 .5.4c.2.5.7 1.7.7 1.8c.1.1.1.3 0 .4c.1.2 0 .4-.1.5s-.2.3-.3.4c-.2.1-.3.3-.2.5c.4.6.9 1.2 1.4 1.7c.6.5 1.2.9 1.9 1.2c.2.1.4.1.5-.1s.6-.7.8-.9s.3-.2.5-.1l1.6.8c.2.1.4.2.5.3c.1.3.1.7-.1 1"/></svg>:2945638804</a>
        </div>
        </div>
      </div>
      </div>
      </section>

            
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
