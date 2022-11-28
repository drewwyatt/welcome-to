import Head from 'next/head'
import Turn from '~/components/Turn'
import { useGame } from '~/lib/state/hooks'

export default function Home() {
  const game = useGame()
  return (
    <>
      <Head>
        <title>Welcome To...</title>
        <meta name="description" content="Virtual Deck for Welcome To..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{game.started ? <Turn /> : <button onClick={game.start}>Start</button>}</main>
    </>
  )
}
