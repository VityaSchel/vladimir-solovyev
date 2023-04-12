export default function ScoreCounter({ 
  guesses, 
  questions 
}: { guesses: number, questions: number }) {
  return (
    <span>Правильно: <b>{guesses}</b> из <b>{questions}</b></span>
  )
}