import React from 'react'
import styles from './styles.module.scss'
import { QuoteModel, HITLER, SOLOVYEV } from '@/features/questions/model'
import { Person } from '@/entities/person'
import { generateQuote } from '@/features/questions/lib/generate-quote'
import cx from 'classnames'
import Hitler from '@/assets/persons/Hitler.jpeg'
import Solovyev from '@/assets/persons/Solovyev.jpeg'

export function QuestionBody() {
  const [quote, setQuote] = React.useState<QuoteModel>(() => generateQuote())
  const [hoverOn, setHoverOn] = React.useState<null | typeof HITLER | typeof SOLOVYEV>(null)

  const handleAnswer = (answer: typeof HITLER | typeof SOLOVYEV) => () => {
    setQuote(generateQuote())
  }

  return (
    <div className={styles.container} onPointerLeave={() => setHoverOn(null)}>
      <Person
        image={Hitler}
        alt='Гитлер'
        isHovered={hoverOn === HITLER}
        onHover={() => setHoverOn(HITLER)}
        onSelect={handleAnswer(HITLER)}
      />
      <Person
        image={Solovyev}
        alt='Соловьев'
        isHovered={hoverOn === SOLOVYEV}
        onHover={() => setHoverOn(SOLOVYEV)}
        onSelect={handleAnswer(SOLOVYEV)}
      />
      <span className={cx(styles.quote, { 
        [styles.slideLeft]: hoverOn === HITLER,
        [styles.slideRight]: hoverOn === SOLOVYEV,
      })}>{quote.quote}</span>
    </div>
  )
}