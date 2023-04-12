import ScoreCounter from '@/entities/score-counter'
import styles from './styles.module.scss'

export default function Score() {
  const score = { right: 10, wrong: 5 }//useSelector(selectScore)

  return (
    <div className={styles.score}>
      <ScoreCounter 
        guesses={score.right}
        questions={score.right + score.wrong}
      />
    </div>
  )
}