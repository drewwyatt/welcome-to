import type { FC, PropsWithChildren } from 'react'
import { classNames } from '~/lib/utils'

interface Props {
  className?: string
}

const Emoji: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <i className={classNames('emoji', className)}>{children}</i>
)

export default Emoji
