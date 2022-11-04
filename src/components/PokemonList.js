import React from 'react';
import PokemonListItem from './PokemonListItem';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonOpen: '',
    };
  }

  handleCard = (pokemonName) => {
    this.setState({ pokemonOpen: pokemonName });
  };

  render() {
    console.log();
    return (
      <div className="main-container">
        <table>
          <tbody>
            {this.props.pokeList.map((pokemon) => {
              return (
                <PokemonListItem
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  isOpen={this.state.pokemonOpen === pokemon.name}
                  setOpen={this.handleCard}
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
