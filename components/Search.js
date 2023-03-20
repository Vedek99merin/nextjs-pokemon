import React, { useState } from 'react'
import search from '../styles/Search.module.css'
import Pokemons from './Pokemons';

function Search() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

  return (
    <div className={search.container}>
        <h1>Search</h1>
        <div>
            <input onChange={inputHandler} value={inputText} className={search.input} placeholder='Find your pokemon' type="text" />
        </div>
        <Pokemons input={inputText} />
    </div>
  )

}

export default Search