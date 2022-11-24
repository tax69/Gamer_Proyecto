import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import link1 from '../components/about'
import link2 from '../components/home'

const Footer=()=> {
  return (
    <div>
        <footer className='text-white py-4 bg-dark '>
            <div className='container'>
                <div className='row'>
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-cente'>
                        <img src={logo} className='mx-2' height='120'/>
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>GAMERS UNA FORMA MAS</li>
                        <li className='text-center'>Mi proyecto trata de componentes juegos y mas todo para el mundo gamer.</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>LINK</li>
                    <li>
                        <Link to={link1}>JUEGOS</Link>
                    </li>
                    <li>
                        <Link to={link2}>INICIO</Link>
                    </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2'>SIGUENOS</li>
                        <il className='d-flex justify-content-between'>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-twitch"></i>
                        <i class="bi bi-youtube"></i>

                        </il>
                     
                        <li>
                        


                    </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer