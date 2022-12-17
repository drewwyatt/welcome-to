import type { FC } from 'react'
import { useSoundControl } from '~/lib/state/hooks'

const PlaySound: FC = () => {
  const [enabled, toggle] = useSoundControl()

  return (
    <label>
      <input type="checkbox" checked={enabled} onChange={toggle} /> Play Sound When
      Advancing Cards?
    </label>
  )
}

export default PlaySound
