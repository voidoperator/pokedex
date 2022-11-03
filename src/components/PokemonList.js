import React from 'react';
import PokemonListItem from './PokemonListItem';

class PokemonList extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>Pokedex</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.pokeList.map((pokemon) => {
              const pokeName = pokemon.name;
              return (
                <PokemonListItem
                  key={pokemon.name}
                  name={pokeName.toUpperCase()}
                  url={pokemon.url}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PokemonList;
