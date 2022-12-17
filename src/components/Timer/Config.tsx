import type { ChangeEvent, FC, FormEvent } from 'react'
import { useCallback, useState } from 'react'
import { useTimerStarter } from '~/lib/state/hooks'
import { Result, ok, err, isOk, isErr, mapResult, identity } from '~/lib/utils'

const Config: FC = () => {
  const [prevSeconds, start] = useTimerStarter()
  const [seconds, setSeconds] = useState<Result<number, string>>(ok(prevSeconds))
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const int = parseInt(event.target.value)
      if (Number.isInteger(int)) {
        setSeconds(ok(int))
      } else {
        setSeconds(err(event.target.value))
      }
    },
    [setSeconds],
  )
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (isOk(seconds)) {
        start(seconds.value)
      }
    },
    [seconds, start],
  )

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="number"
          name="seconds"
          value={mapResult(seconds, String, identity)}
          onChange={onChange}
          pattern="\d+"
        />
        <label htmlFor="seconds">Seconds</label>
      </div>
      <button name="start" type="submit" disabled={isErr(seconds)}>
        Start
      </button>
    </form>
  )
}

export default Config
