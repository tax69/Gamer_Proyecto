import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import '../assets/Estilos/Carrusel.css'

import Img1 from '../assets/Galeri/img13.jpg'
import Img2 from '../assets/Galeri/img14.jpg'
import Img3 from '../assets/Galeri/img11.jpg'


 
 
 export default function Galeria() {
    return (
        <div className="mt-5">
          <Carousel interval={2500} fade={true}>
            <Carousel.Item>
              <img src={Img1}  />
              <Carousel.Caption>
                <h3>Oferta 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Img2}  />
              <Carousel.Caption>
                <h3>Oferta 2</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Img3} />
              <Carousel.Caption>
                <h3>Oferta 3</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      )
 }
 
    
