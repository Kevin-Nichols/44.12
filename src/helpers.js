import {v1 as uuid} from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

//Assigns data from the API to the card.
function assignCardData(data) {
  return {image: data.cards[0].image, id: uuid()};
}

//Assigns data from the API to the Pokemon.
function assignPokeData(data) {
  return {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  };
}

export { choice, assignCardData, assignPokeData };