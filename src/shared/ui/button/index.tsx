import styles from './styles.module.scss'

export default function Button({
  children,
  ...props
}: React.PropsWithChildren) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}