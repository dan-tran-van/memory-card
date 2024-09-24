export function Header({ score, bestScore }) {
  return (
    <>
      <h1>Memory card</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </>
  );
}
