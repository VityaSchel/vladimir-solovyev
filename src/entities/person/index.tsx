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
    <div 
      className={styles.container}
      onPointerEnter={onHover}
      onClick={onSelect}
      tabIndex={1}
    >
      <Image
        className={cx({ [styles.hover]: isHovered })}
        src={image}
        alt={alt}
        fill
      />
    </div>
  )
}