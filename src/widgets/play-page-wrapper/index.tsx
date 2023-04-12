import styles from './styles.module.scss'

export default function PlayPageWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.playPage}>{children}</main>
  )
}