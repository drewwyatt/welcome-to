import type { FC, PropsWithChildren } from 'react'

const Emoji: FC<PropsWithChildren> = ({ children }) => (
  <i className="effect-emoji">{children}</i>
)

export default Emoji
