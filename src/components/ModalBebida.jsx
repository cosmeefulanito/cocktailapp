import { Card, Image, Modal } from "react-bootstrap"
import useBebidas from "../hook/useBebidas"

const ModalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBebidas()
  const { strDrink, dateModified, strDrinkThumb, strInstructions } = receta

  const obtieneIngredientes = () => {
    let arrIngredientes = [];

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        arrIngredientes.push(
          <li>{receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}</li>
        )
      }
      // strIngredient1
      // strMeasure1
    }

    return arrIngredientes;
  }

  return (
    !cargando && (<Modal show={modal} onHide={handleModalClick}>
      <Image
        src={strDrinkThumb}
        alt={`Imagen receta ${strDrink} }`}
      />
      <Modal.Header>
        <Modal.Title>{strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Title className="mb-3">Ingredientes</Card.Title>
        <Card.Text>{obtieneIngredientes()}</Card.Text>
        <Card.Title>Preparacion</Card.Title>
        <Card.Text>{strInstructions}</Card.Text>
      </Modal.Body>
      {/* <Modal.Footer>{dateModified}</Modal.Footer> */}
    </Modal>)

  )
}

export default ModalBebida