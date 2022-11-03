# Pokedex

A starter project bootstrapped with React. Shows a list of 10 Pokemon, uses pagination to browse through all 1154 of them. Click any of them to see their details!

## Overview

### `App`

App.js shows loading screen while it fetches and awaits the Pokemon list from https://pokeapi.co/api/v2 and then handles pagination. Sets its state as the data received. Imports PokemonList instance and passes its state as props to PokemonList component.

### `PokemonList`

Component class that maps the table of Pokemon from our received props. Imports PokemonListItem component and passes the individual Pokemon data as props to it.

### `PokemonListItem`

Fetches the individual data of the Pokemon selected as passed in by the props. It expands the table into a card with the Pokemon information.
