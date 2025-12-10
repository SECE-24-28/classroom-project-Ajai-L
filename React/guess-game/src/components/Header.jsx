export default function Header({ init, randomNumber }) {
  return (
    <header>
      <h1>Guess My Number!</h1>

      <p className="between">(Between 1 and 20)</p>

      <button className="btn again" onClick={init}>
        Again!
      </button>

      <div className="number">?</div>
    </header>
  );
}
