import styles from './styles.module.scss'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <div className={styles.disclaimer}>
      <span>Автор сайта осуждает Адольфа Гитлера и фашистскую идеологию.</span>
      {' '}
      <Link href='https://github.com/VityaSchel/vladimir-solovyev/tree/new-react'>Код на GitHub</Link>
    </div>
  )
}
