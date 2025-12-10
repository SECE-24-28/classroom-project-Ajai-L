export default function LeftPanel({ guess, setGuess, checkBtn }) {
  return (
    <section className="left">
      <input
        type="number"
        className="guess"
        placeholder="?"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button className="btn check" onClick={checkBtn}>
        Check!
      </button>
    </section>
  );
}
