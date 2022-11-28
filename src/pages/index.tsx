import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useMemo } from 'react'
import constructionCards from '~/lib/data/construction-cards'
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
  return (
    <>
      <Head>
        <title>Welcome To...</title>
        <meta name="description" content="Virtual Deck for Welcome To..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to...</h1>
        <fieldset>
          <legend>Events</legend>
          <article>
            <strong>{deck[0].effect}</strong>
          </article>
          <article>
            <strong>{deck[1].effect}</strong>
          </article>
          <article>
            <strong>{deck[2].effect}</strong>
          </article>
        </fieldset>
        <fieldset>
          <legend>House Numbers</legend>
          <article>
            <strong>{deck[3].houseNumber}</strong>
          </article>
          <article>
            <strong>{deck[4].houseNumber}</strong>
          </article>
          <article>
            <strong>{deck[5].houseNumber}</strong>
          </article>
        </fieldset>

        {/* <fieldset>
          <legend>Before</legend>
          {JSON.stringify(constructionCards, null, 2)}
        </fieldset>

        <fieldset>
          <legend>After</legend>
          {JSON.stringify(deck, null, 2)}
        </fieldset> */}
      </main>
    </>
  )
}
