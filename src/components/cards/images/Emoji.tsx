import type { FC, PropsWithChildren } from 'react'
import { classNames } from '~/lib/utils'

import styles from '~/styles/Emoji.module.css'

interface Props {
  className?: string
}

const Emoji: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <i className={classNames(styles.emoji, className)}>{children}</i>
)

export default Emoji
