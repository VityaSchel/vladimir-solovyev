import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import cx from 'classnames'

export function Person({ image, alt, isHovered, onHover, onSelect }: {
  image: StaticImageData
  alt: string
  isHovered: boolean
  onHover: () => any
  onSelect: () => any
}) {
  return (
    <button
      className={styles.container}
      onPointerEnter={onHover}
      onClick={onSelect}
    >
      <Image
        className={cx({ [styles.hover]: isHovered })}
        src={image}
        alt={alt}
        fill
      />
    </button>
  )
}