import { expect, test } from '@jest/globals'
import deck from './construction-cards'

const houseNumberTest = (n: number, houseNumbers: number[]) =>
  test(`There should be ${n} cards with the ${
    houseNumbers.length > 1 ? 'numbers' : 'number'
  } ${houseNumbers.join(', ')}`, () => {
    const cards = houseNumbers.map(hn => deck.filter(c => c.houseNumber === hn))

    cards.forEach(c => expect(c.length).toEqual(n))
  })

houseNumberTest(3, [1, 2, 14, 15])
houseNumberTest(4, [3, 13])
houseNumberTest(5, [4, 12])
houseNumberTest(6, [5, 11])
houseNumberTest(7, [6, 10])
houseNumberTest(8, [7, 9])
houseNumberTest(9, [8])
