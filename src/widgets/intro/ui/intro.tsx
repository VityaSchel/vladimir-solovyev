import styles from './styles.module.scss'
import Headline from './headline'
import Paragraph from './paragraph'
import StartButton from '@/features/start-button'

export default function Intro() {
  return (
    <div className={styles.intro}>
      <Headline />
      <Paragraph />
      <StartButton />
    </div>
  )
}