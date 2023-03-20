import React, { useState, useEffect } from "react"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Pokemons = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemon() {
        const resp = await fetch ("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
        setPokemon(await resp.json())
        }
        getPokemon();
    }, []);

    const filteredData = pokemon.filter((el) => {
        if (props.input === '') {
            return el;
        }else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className={styles.grid}>
            {filteredData.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
                <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
                <a>
                    <img className={styles.img} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt="" />
                    <h3>{pokemon.name}</h3>
                </a>
                </Link>
            </div>
            ))}
        </div>
    )
}

export default Pokemons