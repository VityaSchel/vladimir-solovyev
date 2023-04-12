import React from 'react'
import styles from './styles.module.scss'
import { QuoteModel, HITLER, SOLOVYEV } from '@/features/questions/model'
import { Person } from '@/entities/person'
import { generateQuote } from '@/features/questions/lib/generate-quote'
import cx from 'classnames'
import Hitler from '@/assets/persons/Hitler.jpeg'
import Solovyev from '@/assets/persons/Solovyev.jpeg'
import Button from '@/shared/ui/button'
import { useDispatch } from 'react-redux'
import { correctAnswer, wrongAnswer } from '@/shared/store/reducers/score'

export function QuestionBody() {
  const [quote, setQuote] = React.useState<null | QuoteModel>(null)
  const [hoverOn, setHoverOn] = React.useState<null | typeof HITLER | typeof SOLOVYEV>(null)
  const [answered, setAnswered] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    setQuote(generateQuote())
  }, [])

  const handleAnswer = (answer: typeof HITLER | typeof SOLOVYEV) => () => {
    if(!answered && quote) {
      setAnswered(true)
      const correct = answer === quote.person
      if(correct) {
        dispatch(correctAnswer())
      } else {
        dispatch(wrongAnswer())
      }
    }
  }

  const handleReset = () => {
    setAnswered(false)
    setQuote(generateQuote())
  }

  return (
    <>
      {quote && <div className={styles.container} onPointerLeave={() => setHoverOn(null)}>
        <Person
          image={Hitler}
          alt='Гитлер'
          highlighted={answered ? quote.person === HITLER : hoverOn === HITLER}
          active={!answered}
          onHover={() => setHoverOn(HITLER)}
          onSelect={handleAnswer(HITLER)}
        />
        <Person
          image={Solovyev}
          alt='Соловьев'
          highlighted={answered ? quote.person === SOLOVYEV : hoverOn === SOLOVYEV}
          active={!answered}
          onHover={() => setHoverOn(SOLOVYEV)}
          onSelect={handleAnswer(SOLOVYEV)}
        />
        <span 
          className={cx(styles.quote, {
            [styles.answerIsHitler]: answered && quote.person === HITLER,
            [styles.answerIsSolovyev]: answered && quote.person === SOLOVYEV,
            [styles.slideToHitler]: hoverOn === HITLER,
            [styles.slideToSolovyev]: hoverOn === SOLOVYEV,
          })}
        >
          {quote.quote}
          {answered && <div className={styles.button}>
            <Button onClick={handleReset}>Далее</Button>
          </div>}
        </span>
      </div>}
    </>
  )
}