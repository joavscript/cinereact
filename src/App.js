import { Container, Form, Row } from 'react-bootstrap';
//import './App.css';
import Movie from './components/Movie';
import movies from './json/movies.json'



function App() {
  return (

    <Container>
      <Row>
        <h1>Películas</h1>
        {movies.map(peli =>
          <Movie
            img={peli.img}
            titulo={peli.titulo}
            descripcion={peli.descripcion}
          ></Movie>
        )}

      </Row>
    </Container>


  )
}
export default App;