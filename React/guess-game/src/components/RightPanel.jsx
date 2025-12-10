export default function RightPanel({ msg, score, highScore }) {
  return (
    <section className="right">
      <p className="message">{msg}</p>

      <p className="label-score">💯 Score: {score}</p>

      <p className="label-highscore">🥇 Highscore: {highScore}</p>
    </section>
  );
}
