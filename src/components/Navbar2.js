//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../components/css/normalize.css"
import "../components/css/Estilos1.css"


export default function NavBar2() {
    return (
        <div>
            <Navbar className='nav container'>

                <div className="nav__logo">
                    <h2 className="nav__title">Ver Peliculas</h2>
                </div>
                {/* <Navbar.Brand href="#home">
                        <img
                            alt="image-nav"
                            src={img}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand> */}
                <Nav className="nav__link nav__link--menu">
                    
                    <Nav.Link href='/'>Inicio</Nav.Link>
                    <Nav.Link href="#">Categorías</Nav.Link>
                    <Nav.Link href='#'>Próximamente</Nav.Link>
                    <Nav.Link href='#'>Series</Nav.Link>
                </Nav>

            </Navbar>
        </div>

    )
};