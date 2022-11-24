import React from "react"

import imagen1 from '../assets/uno.jpg'
import imagen2 from '../assets/dos.avif'
import imagen3 from '../assets/tres.jpg'
import '../assets/Estilos/Estiloprodu.css'
const About = () => {
    return(
        <div>
         
            <div className='todo'>
        <div className="card text-center bg-dark animate__animated animate__bounce">
            <div className='overflow'>
    <img src={imagen1} alt ="" className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'> AUDIFONOS GAMER</h4>
        <p className='card-text text-secondary'>       
        AUDIFONOS GAMER PROFESIONAL CON MICROFONO
        Diseño LED
        Es inalámbrico : No
        Principio de vocalismo : Dinámico
        Control de volumen : Sí
        Botón de control : Sí</p>

        <a href='#!' className='btn btn-outline-secondary rounded-0'>
                COMPRAR
        </a>
    </div>   

</div> 

</div>
<div className="otross">
<div className="card text-center bg-dark animate__animated animate__bounce">
            <div className='overflow'>
<img src={imagen2} alt ="" className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'> KIT GAMER 4</h4>
        <p className='card-text text-secondary'>       
        Kit Gamer 4 en1 3DFX Teclado / Mouse / Audífonos / Mousepad Taranis
        * Sensor óptico de alta precisión
     Resolution: 1200 / 2400 /4800 /7200dpi
     Iluminado
     5 Botones de acción
     Conector USB
     Largo del cable 1.5mt
     Características Mouse Pad:</p>

        <a href='#!' className='btn btn-outline-secondary rounded-0'>
                COMPRAR
        </a>
    </div>   
    </div> 
    </div> 

    <div className="otross">
<div className="card text-center bg-dark animate__animated animate__bounce">
            <div className='overflow'>
<img src={imagen3} alt ="" className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'> MOUSE PRIMUS GAMING</h4>
        <p className='card-text text-secondary'>       
    PRIMUS GAMING MSE GLADIUS 32000P.
Número de botones: 12.
Botones programables: Mediante software.
Tipo de interruptor: Omron.
Frecuencia de imagen: 10000FPS.
Velocidad máxima: 400IPS.
Aceleración máxima: 50G.</p>

        <a href='#!' className='btn btn-outline-secondary rounded-0'>
                COMPRAR
        </a>
    </div>   
    </div> 
    </div> 

    <div className="otross">
<div className="card text-center bg-dark animate__animated animate__bounce">
            <div className='overflow'>
<img src={imagen2} alt ="" className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'> MONITOR GAMER REDRAGON</h4>
        <p className='card-text text-secondary'>       
        MONITOR GAMER REDRAGON EMERALD 27' FHD 165HZ SLIM 1MS IPS
        27 PULGADAS
        PANEL IPS
        Alto (cm) 10.0
        Ancho (cm) 40.0
        Largo (cm)	60.0
        eso (kg) 5 
        Conectividad	HDMI
        Modelo	GM270F165
        Número Puertos HDMI	2
        </p>

        <a href='#!' className='btn btn-outline-secondary rounded-0'>
                COMPRAR
        </a>
    </div>   
    </div> 
    </div> 
    <div className="otross">
<div className="card text-center bg-dark animate__animated animate__bounce">
            <div className='overflow'>
<img src={imagen2} alt ="" className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'> SILLA GAMER</h4>
        <p className='card-text text-secondary'>       
        SILLA GAMER NITRO 3
        Apoyabrazos 2D.
        Mecanismo de mariposa.
        Elevación de gas clase 4 de 80 mm.
        Base de nylon de 350 mm.
        Ruedas de PU.
    Ajustador de reclinación 180 grados.
        </p>

        <a href='#!' className='btn btn-outline-secondary rounded-0'>
                COMPRAR
        </a>
    </div>   
    </div> 
    </div> 

</div>
  
        




        
    )
}
export default About