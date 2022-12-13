import { useState } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import useCategorias from '../hook/useCategorias'
import useBebidas from '../hook/useBebidas'
import { useEffect } from 'react'

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        bebida: '',
        categoria: ''
    })
    const { categorias } = useCategorias()
    const {consultarBebidas} = useBebidas()
    const [error, setError] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(Object.values(busqueda).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        consultarBebidas(busqueda)
        setError('')
    }

   


    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant='danger' className='text-center p-2 fw-bolder'>{error}</Alert>}
            <Row>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label htmlFor='bebida'>Nombre bebida</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='EJ: Vodka,Mojito'
                            name='bebida'
                            id='bebida'
                            onChange={(e) => {
                                setBusqueda({
                                    ...busqueda,
                                    [e.target.name]: e.target.value
                                })
                            }}
                            value={busqueda.bebida}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label htmlFor='categoria'>Categoria</Form.Label>
                        <Form.Select onChange={
                            (e) => {
                                setBusqueda({
                                    ...busqueda,
                                    [e.target.name]: e.target.value
                                })
                            }}
                            value={busqueda.categoria}
                            id='categoria'
                            name='categoria'>
                            <option value="">-- Seleccione una categoria --</option>
                            {categorias && categorias.map((categoria, id) =>
                                <option key={categoria.strCategory} value={categoria.strCategory}>
                                    {categoria.strCategory}
                                </option>
                            )}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Label>&nbsp;</Form.Label>
                    <Button variant='warning' className='w-100 text-uppercase fw-bolder' type='submit'>Buscar</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario