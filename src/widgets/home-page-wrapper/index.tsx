import styles from './styles.module.scss'

export default function HomepageWrapper(props: React.PropsWithChildren) {
  return (
    <main className={styles.homepage}>{props.children}</main>
  )
}