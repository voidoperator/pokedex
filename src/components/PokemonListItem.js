import React from 'react';

class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      types: [],
    };
  }

  fetchPokemon = async (event) => {
    const endpoint = event.target.value;
    const response = await fetch(`${endpoint}`);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        imgUrl: data.sprites.other.dream_world.front_default,
        types: data.types,
      });
    }
  };

  render() {
    return (
      <tr>
        <td>
          <button onClick={this.fetchPokemon} value={this.props.url}>
            {this.props.name}
          </button>
        </td>
      </tr>
    );
  }
}

export default PokemonListItem;
