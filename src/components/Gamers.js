import React from 'react'
import 'animate.css';
import '../assets/Estilos/Gameresti.css'

import IM from '../assets/guno.jpg'
import IM1 from '../assets/gdos.jpg'
import IM2 from '../assets/gcuatro.jpg'
import IM3 from '../assets/gtres.jpg'
import IM4 from '../assets/g5.jpg'
import IM5 from '../assets/g6.jpg'
import IM6 from '../assets/g7.jpg'
import IM7 from '../assets/g8.jpg'
import IM8 from '../assets/g9.jpg'
import IM9 from '../assets/g10.jpg'
import Footer from './Footer';
function Gamers() {
  return (
  
       <div>
        <div className="carddd animate__animated animate__heartBeat" >
  <img src={IM} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark ">Pirates of Black Cove </p>
  </div>
  <div>
  
  <img src={IM1} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark">Urban Trial Freestyle </p>
  </div>
</div>
</div>
<div className="carddd animate__animated animate__heartBeat" >
  <img src={IM2} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark">Imperivm</p>
  </div>
  <div>
  
  <img src={IM3} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark ">Cabela's African Safari </p>
  </div>
</div>
</div>
<div className="carddd animate__animated animate__heartBeat" >
  <img src={IM4} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark ">God of War </p>
  </div>
  <div>
  
  <img src={IM5} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark">Rainbow Six Extraction </p>
  </div>
</div>
</div>
<div className="carddd animate__animated animate__heartBeat" >
  <img src={IM6} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark ">Lost Ark </p>
  </div>
  <div>
  
  <img src={IM7} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark">The King of Fighters XV </p>
  </div>
</div>
</div>
<div className="carddd animate__animated animate__heartBeat" >
  <img src={IM8} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark ">Monark </p>
  </div>
  <div>
  
  <img src={IM9} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text text-white bg-dark">Grid Legends </p>
  </div>
</div>
</div>
</div>






      
  )
}

export default Gamers