import React from "react";
import Card from "./Card";
import '../assets/Estilos/Estilo.css'


import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'




const cards = [

  {
    
    id: 1,
    title: "PERIFERICOS",
    image: image1,
    button:'/about'
  
  },
  {
    id: 2,
    title: "OFERTAS",
    image: image2,
    button: '/contact',
  },
  {
    id: 3,
    title: "GAMERS",
    image: image3,
    button: '/Gamers',
  },

];

function Cards() {
  return (
    <div className="lol">
    <div className="container  ">
      <div className="row">
        {cards.map(({ title, image,  button, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title}  button={ button} />
          </div>
         
        ))}
      </div>
      </div>
    </div>
    
  );
 
}


export default Cards;
