import React, { useState, useEffect } from "react"
import { Row, Col, Button, Card } from 'react-bootstrap'
import useBebidas from "../hook/useBebidas"
const Favoritos = () => {
  
  const {favoritos,handleRemoveFavoritos} = useBebidas()
  return (
    <div>
      <h1>Mis favoritos</h1>
      <Row>
        {Object.keys(favoritos).length > 0 ? favoritos.map((favorito,id) =>
          <React.Fragment key={id}>
            <Col xs={1} md={3} lg={3}>
              <Card className='mt-5'>
                <Card.Img variant="top" src={favorito.strDrinkThumb} className='rounded-circle' />
                <Card.Body>
                  <Card.Title>{favorito.strDrink}</Card.Title>
                  <Card.Text>
                    <Button className="w-100" variant="outline-danger" onClick={()=> {
                      handleRemoveFavoritos(favorito.idDrink)
                    }}>Remover</Button>
                  </Card.Text>  
                </Card.Body>
              </Card>
            </Col>
          </React.Fragment>

        ) : 'No has agregado ningún favorito'}
      </Row>

    </div >
  )
}

export default Favoritos