import { useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import useBebidas from "../hook/useBebidas"

import fav_black from './../assets/images/favorite-svgrepo-com-bla.svg'
import fav_yellow from './../assets/images/favorite-svgrepo-com-yell.svg'
const Bebidas = ({ bebida }) => {
    const { handleModalClick, handleIdBebidaClick, guardarFavoritos, setAgregaFavoritos,agregaFavoritos } = useBebidas()
    const { idDrink, strDrinkThumb, strDrink } = bebida



    return (
        <Col md={3} lg={4} className="mb-3">
            <Card>
                <Card.Img variant="top" src={strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{strDrink}</Card.Title>
                    <Card.Text>{strDrink}</Card.Text>
                    <Button variant="warning" className="w-100 text-uppercase fw-bold" onClick={() => {
                        handleModalClick()
                        handleIdBebidaClick(idDrink)
                    }}>Ver receta</Button>

                    <Card.Footer className="text-center mt-3">
                        <Card.Link style={{ cursor: 'pointer' }}
                            onClick={() => {
                                guardarFavoritos(bebida) 
                            }}>
                            <img src={fav_black} width={45} height={45}  />
                        </Card.Link>
                        {/* <Card.Link href="#">
                            <img src={fav_yellow} width={45} height={45} />
                        </Card.Link> */}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebidas