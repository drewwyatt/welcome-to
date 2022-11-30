import type { FC, PropsWithChildren } from 'react'
import { classNames } from '~/lib/utils'

import styles from '~/styles/Card.module.css'

interface Props {
  className?: string
}

const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <article className={classNames(styles.wrapper, className)}>{children}</article>
)

export default Card
