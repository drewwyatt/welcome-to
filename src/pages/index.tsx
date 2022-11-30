import Head from 'next/head'
import type { FC } from 'react'
import Turn from '~/components/Turn'
import { useGame } from '~/lib/state/hooks'

import styles from '~/styles/Home.module.css'

const Spacer: FC = () => <> &middot; </>

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
        </a>
        <Spacer />
        <a href="/instructions.pdf" target="_blank" rel="noreferrer noopener">
          Instructions
        </a>
        <Spacer />
        <a
          href="https://apps.apple.com/us/app/welcome-to-your-perfect-home/id1358077007"
          target="_blank"
          rel="noreferrer noopener"
        >
          iPhone Scoresheet
        </a>
        <Spacer />
        <a
          href="https://play.google.com/store/apps/details?id=com.bluecocker.welcome&hl=en_US&gl=US"
          target="_blank"
          rel="noreferrer noopener"
        >
          Android Scoresheet
        </a>
      </footer>
    </>
  )
}
