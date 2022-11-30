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

export const classNames = (...classNames: (string | null | undefined)[]) =>
  classNames.filter(Boolean).join(' ')
