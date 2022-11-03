import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pokemonCount: '',
      pokeList: [],
      offset: 0,
    };
  }

  fetchPokemon = async () => {
    const baseUrl = 'https://pokeapi.co/api/v2';
    const queryParams = `/pokemon?limit=10&offset=${this.state.offset}`;
    const response = await fetch(`${baseUrl}${queryParams}`);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        pokeList: data.results,
        pokemonCount: data.count,
        isLoading: false,
      });
    }
  };

  async componentDidMount() {
    this.fetchPokemon();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.offset !== this.state.offset) {
      this.fetchPokemon();
    }
  }
  handlePrev = () => {
    let currentOffset = this.state.offset;
    if (currentOffset > 0) {
      this.setState({ offset: this.state.offset - 10 });
    }
  };

  handleNext = () => {
    let currentOffset = this.state.offset;
    if (currentOffset <= this.state.pokemonCount) {
      this.setState({ offset: this.state.offset + 10 });
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && <h1>Loading...</h1>}
        <PokemonList pokeList={this.state.pokeList} />
        <div className="pagination-btn">
          {!this.state.offset || (
            <button onClick={this.handlePrev}>Previous Page</button>
          )}
          <button onClick={this.handleNext}>Next Page</button>
        </div>
      </>
    );
  }
}

export default Pokedex;
