import React from 'react'
import { Card, Row } from 'react-bootstrap'

export const CardPokemon = ({
    name,
    url
}) => {
    let id = url.split('/')[6] || 1;
    return (
        <Card>
            <Card.Img variant='top' alt='imagen' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <Card.Body  className='text-center'>
                <Card.Title>{name}</Card.Title>
                <a className='btn btn-warning text-white' href={url} >detalle</a>
            </Card.Body>
        </Card>
    )
}
