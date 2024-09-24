import "./Card.css";

export function Card({
  pokemon,
  score,
  setScore,
  bestScore,
  setBestScore,
  selectedPokemons,
  setSelectedPokemons,
  hasWon,
  setHasWon,
}) {
  function handleCardClick(pokemon) {
    if (selectedPokemons.includes(pokemon)) {
      setSelectedPokemons([]);
      if (score + 1 > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    } else {
      setSelectedPokemons([...selectedPokemons, pokemon]);
      if (score === 5) {
        setHasWon(true);
      }
      setScore(++score);
      if (score + 1 > bestScore + 1) {
        setBestScore(++bestScore);
      }
    }
  }
  return (
    <>
      {!hasWon && (
        <div className="card" onClick={() => handleCardClick(pokemon)}>
          <img src={pokemon.sprites.front_default} alt="" />
          <div>{pokemon.name}</div>
        </div>
      )}
    </>
  );
}
