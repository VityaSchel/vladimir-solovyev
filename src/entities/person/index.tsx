import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import cx from 'classnames'

export function Person({ image, alt, highlighted, active, onHover, onSelect }: {
  image: StaticImageData
  alt: string
  highlighted: boolean
  active: boolean
  onHover: () => any
  onSelect: () => any
}) {
  return (
    <button
      className={cx(styles.container, { [styles.active]: active })}
      onPointerEnter={onHover}
      onClick={onSelect}
      disabled={!active}
    >
      <Image
        placeholder='blur'
        className={cx({ [styles.highlighted]: highlighted })}
        src={image}
        alt={alt}
        fill
      />
    </button>
  )
}
