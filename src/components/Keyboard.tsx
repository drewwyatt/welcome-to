import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'

interface Props {
  className?: string
  listeners: Record<KeyboardEvent['code'], () => void>
}

const Keyboard: FC<PropsWithChildren<Props>> = ({ children, listeners }) => {
  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if (typeof listeners[event.code] === 'function') {
        event.stopPropagation()
        listeners[event.code]()
      }
    }

    document.addEventListener('keyup', callback)

    return () => {
      document.removeEventListener('keyup', callback)
    }
  }, [listeners])

  return <>{children}</>
}

export default Keyboard
