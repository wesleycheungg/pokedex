import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";

const pokemonReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let nextState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            // return Object.assign({}, action.pokemon, state);
            nextState = action.pokemon
            return nextState;
        default:
            return oldState;        
    }
}

export default pokemonReducer;