import React from 'react';
import ReactDOM from 'react-dom';

import { fetchAllPokemon } from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions'

document.addEventListener('DOMContentLoaded', () => {

    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;

    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
})