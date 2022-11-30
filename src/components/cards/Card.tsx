import type { FC, PropsWithChildren } from 'react'
import { classNames } from '~/lib/utils'

interface Props {
  className?: string
}

const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => (
  <article className={classNames('card', className)}>{children}</article>
)

export default Card
