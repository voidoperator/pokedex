import React from 'react';

class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: '',
      types: [],
      pokemonId: '',
    };
  }

  fetchPokemon = async () => {
    const endpoint = this.props.url;
    const response = await fetch(`${endpoint}`);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        imgUrl: data.sprites.other.dream_world.front_default,
        types: data.types,
        pokemonId: data.id,
      });
      this.props.isOpen
        ? this.props.setOpen('')
        : this.props.setOpen(this.props.name);
    }
  };

  render() {
    return (
      <tr>
        <td>
          <button onClick={this.fetchPokemon}>{this.props.name}</button>
          {this.props.isOpen && (
            <div className="pokemon-card">
              <div className="type-wrapper">
                {this.state.types.map((slot) => {
                  return (
                    <h4
                      key={`${slot.type.name}-${this.state.pokemonId}`}
                      className={slot.type.name}
                    >
                      {slot.type.name}
                    </h4>
                  );
                })}
              </div>
              <img
                key={this.state.pokemonId}
                src={this.state.imgUrl}
                alt={this.props.name}
                title={this.props.name}
              />
              <h5>No. {this.state.pokemonId}</h5>
            </div>
          )}
        </td>
      </tr>
    );
  }
}

export default PokemonListItem;
