import React, { useEffect, useState } from 'react'
import { CardPokemon } from './components/CardPokemon'
import { Col, Row } from 'react-bootstrap'
import { FilterPokemon } from './components/FilterPokemon'

const Pokemon = () => {

    const [pokemon, setpokemon] = useState(null)
    const [filter, setfilter] = useState(null)
    const [cantidad, setCantidad] = useState(100)
    const [loading, setLoading] = useState(false)



    const handleSearchPokemon = (e) => {

        const { value } = e.target;
        let pokemonCopy = pokemon;
        pokemonCopy = pokemonCopy.filter(values => values.name.toLowerCase().match(value.toLowerCase()));
        setfilter(pokemonCopy)
    }

    const handleCantidadPokemon = (e) => {

        const { value } = e.target;
        setCantidad(value)

    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidad}`)
            .then(response => response.json())
            .then(data => {
                setpokemon(data.results)
                setfilter(data.results)
            })
        setLoading(false);
    }, [cantidad])


    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <React.Fragment>
            <h1
                style={{ fontFamily: 'Brush Script MT, cursive' }}
                className='text-center text-white font-weight-bold bg-danger p-4'>Card Pokemones</h1>
            <FilterPokemon
                handleSearchPokemon={handleSearchPokemon}
                handleCantidadPokemon={handleCantidadPokemon}
                cantidad={cantidad}
            />
            <div className='App p-4'>
                <Row>
                    {
                        filter?.map((values, index) => (
                            <Col
                                sm={2}
                                // md={4}
                                // lg={4}
                                key={index}
                                className='py-2'
                            >
                                <CardPokemon {...values} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </React.Fragment>
    )
}

export default Pokemon