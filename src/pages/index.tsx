import Head from 'next/head'
import deck from '~/lib/data/construction-cards'
import { shuffle } from '~/lib/utils'

export default function Home() {
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
          <legend>Before</legend>
          {JSON.stringify(deck, null, 2)}
        </fieldset>

        <fieldset>
          <legend>After</legend>
          {JSON.stringify(shuffle(deck), null, 2)}
        </fieldset>
      </main>
    </>
  )
}
