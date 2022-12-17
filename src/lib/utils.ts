export const identity = <T>(value: T) => value

export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length
  let randomIndex: number

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const split3 = <T>(array: T[]) =>
  array.reduce<[T[], T[], T[]]>(
    (acc, card, index) => {
      acc[index % 3].push(card)
      return acc
    },
    [[], [], []],
  )

export const classNames = (...classNames: (string | null | undefined | false)[]) =>
  classNames.filter(Boolean).join(' ')

export const range = (size: number) => new Array(size).fill(null).map((_, index) => index)

export type Ok<T> = { type: 'result-ok'; value: T }
export type Err<T> = { type: 'result-error'; value: T }

export type Result<T, U> = Ok<T> | Err<U>

export const ok = <T>(value: T): Ok<T> => ({ type: 'result-ok', value })
export const err = <T>(value: T): Err<T> => ({ type: 'result-error', value })

export const isOk = <T>(result: Result<T, any>): result is Ok<T> =>
  result.type === 'result-ok'
export const isErr = <T>(result: Result<any, T>): result is Err<T> =>
  result.type === 'result-error'
export const mapResult = <T, U, V>(
  result: Result<T, U>,
  mapOk: (value: T) => V,
  mapErr: (value: U) => V,
): V => (isOk(result) ? mapOk(result.value) : mapErr(result.value))
