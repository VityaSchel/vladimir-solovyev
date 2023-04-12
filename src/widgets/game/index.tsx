import styles from './styles.module.scss'
import Score from '@/features/score'
import { Questions } from '@/features/questions/ui'

export default function Game() {
  return (
    <section className={styles.game}>
      <Score />
      <Questions />
    </section>
  )
}