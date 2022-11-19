//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../components/css/normalize.css"
import "../components/css/Estilos1.css"


export default function NavBar() {
    return (
        <div>
            <Navbar className='nav container'>

                <div className="nav__logo">
                    <h2 className="nav__title">CINEFILOSOS</h2>
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
                    
                    <Nav.Link href='#'>Suscríbete</Nav.Link>
                    <Nav.Link href="/Peliculas">Peliculas</Nav.Link>
                    <Nav.Link href='#'>Series</Nav.Link>
                </Nav>

            </Navbar>
        </div>

    )
};