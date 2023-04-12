import styles from './styles.module.scss'

export default function Button({
  children,
  ...props
}: React.PropsWithChildren & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}