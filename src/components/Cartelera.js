import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/css/Estilos2.css"

function Cartelera(props) {
  return (

    <Card className='cartas'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Button variant="primary">Ver más...</Button>
      </Card.Body>
    </Card>



  );
}

export default Cartelera;