import React from 'react'
import ScoreCounter from '@/entities/score-counter'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { selectScore } from '@/shared/store/reducers/score'

export default function Score() {
  const score = useSelector(selectScore)

  React.useEffect(() => {
    fetch('/api/reportProgress', {
      method: 'POST',
      body: JSON.stringify({
        correct: score.correct,
        questions: score.correct + score.wrong
      }),
      headers: { 'content-type': 'application/json' }
    })
  }, [score])

  return (
    <div className={styles.score}>
      <ScoreCounter 
        guesses={score.correct}
        questions={score.correct + score.wrong}
      />
    </div>
  )
}