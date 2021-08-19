import React from 'react'

export default function PokemonList({pokemonList}) {
    
    return (
        <div>
            {pokemonList.map(p => {
                return <div key={p}>{p}</div>                
            })}
        </div>
    );
}