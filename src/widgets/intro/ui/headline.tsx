import styles from './styles.module.scss'

export default function Headline() {
  return (
    <h1 className={styles.headline}>
      <span>Соловьев</span> или <span>Гитлер</span>?
    </h1>
  )
}