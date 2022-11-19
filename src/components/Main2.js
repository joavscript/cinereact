import movies from '../json/movies.json'
import Cartelera from "./Cartelera"
import { Container, Row } from "react-bootstrap"

export default function() {
    return(
        <Container>
        <Row>
          <h1>Películas</h1>
          <div className='destacadas'>
          {movies.map((peli, i) =>
            <Cartelera
              key={i}
              img={peli.img}
              titulo={peli.titulo}
              descripcion={peli.descripcion}
            ></Cartelera>
          )}
          </div>
        </Row>
      </Container>
    )
}