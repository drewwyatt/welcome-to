import Head from 'next/head'
import Turn from '~/components/Turn'
import { useGame } from '~/lib/state/hooks'

import styles from '~/styles/Home.module.css'

export default function Home() {
  const game = useGame()
  return (
    <>
      <Head>
        <title>Welcome To...</title>
        <meta name="description" content="Virtual Deck for Welcome To..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {game.started ? (
          <Turn />
        ) : (
          <button className={styles.startButton} onClick={game.start}>
            Start
          </button>
        )}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/drewwyatt/welcome-to"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>{' '}
        &middot;{' '}
        <a href="/instructions.pdf" target="_blank" rel="noreferrer noopener">
          Instructions
        </a>
      </footer>
    </>
  )
}
