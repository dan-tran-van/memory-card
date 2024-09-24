import { Card } from "./Card";
import "./CardList.css";

export function CardList({
  pokemons,
  score,
  setScore,
  bestScore,
  setBestScore,
  selectedPokemons,
  setSelectedPokemons,
  hasWon,
  setHasWon,
}) {
  shuffle(pokemons);
  return (
    <>
      <div id="card-list">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
            selectedPokemons={selectedPokemons}
            setSelectedPokemons={setSelectedPokemons}
            hasWon={hasWon}
            setHasWon={setHasWon}
          />
        ))}
      </div>
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
