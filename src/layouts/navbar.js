import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import IM from '../assets/boto.png'
import Footer from "../components/Footer"
import Repons from "../components/Repons"
const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navbar ms-auto navbar-expand-lg navbar-dark bg-dark">
        <Container>
            <Navbar.Brand as={Link} to="/Home" ><img src= {IM} width='70'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" >INICO</Nav.Link>
                <Nav.Link as={Link} to="/about">PRODUCTOS</Nav.Link>
                <Nav.Link as={Link} to="/contact">OFERTAS</Nav.Link> 
                <Nav.Link as={Link} to="/Gamers">JUEGOS</Nav.Link>                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
        <Footer/>
        
       </> 
    )
}
export default NavBarExample