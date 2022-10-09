import React from 'react'
import { Col, Form, FormLabel, InputGroup, Row } from 'react-bootstrap'

export const FilterPokemon = ({
    handleSearchPokemon,
    handleCantidadPokemon,
    cantidad
}) => {
    return (
        <div className='p-3'>
            <Row>
                <Col>
                    <label>Buscar pokemon</label>
                    <InputGroup>
                        <input
                            type='search'
                            placeholder='Buscar pokemon'
                            onChange={handleSearchPokemon}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <label>Mostrar</label>
                    <InputGroup>
                        <Form.Select
                            onChange={handleCantidadPokemon}
                            value={cantidad}
                        >
                            <option value={10}>10</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                        </Form.Select>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
}
