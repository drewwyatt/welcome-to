import { GetServerSideProps } from 'next'
import Head from 'next/head'
import constructionCards from '~/lib/data/construction-cards'
import { useTurn } from '~/lib/state/stacks/hooks'
import { shuffle } from '~/lib/utils'

type Props = {
  deck: typeof constructionCards
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      deck: shuffle(constructionCards),
    },
  }
}

export default function Home({ deck }: Props) {
  const [sets, { next, prev }] = useTurn()

  return (
    <>
      <Head>
        <title>Welcome To...</title>
        <meta name="description" content="Virtual Deck for Welcome To..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to...</h1>
        <div>
          {sets.map((cards, index) => (
            <article key={index}>
              <fieldset>
                <legend>Effect</legend>
                {cards.effect}
              </fieldset>
              <fieldset>
                <legend>HouseNumber</legend>
                {cards.houseNumber}
              </fieldset>
            </article>
          ))}
        </div>
        <div>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </main>
    </>
  )
}
