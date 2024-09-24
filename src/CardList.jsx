import { Card } from "./Card";

export function CardList({
  pokemons,
  setScore,
  setBestScore,
  selectedPokemons,
  setSeletedPokemons,
}) {
  shuffle(pokemons);
  return (
    <>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
}
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
