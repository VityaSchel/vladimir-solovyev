import PlayPageWrapper from '@/widgets/play-page-wrapper'
import Game from '@/widgets/game'
import Disclaimer from '@/widgets/disclaimer'
import Head from 'next/head'

export default function PlayPage() {
  return (
    <PlayPageWrapper>
      <Head>
        <title>Играть — Гитлер или Соловьев?</title>
        <meta rel="description">Проверьте интуицию, сыграв в игру, где вам нужно угадать чья это цитата: Владимира Соловьева (журналист) или Адольфа Гитлера (политик)</meta>
      </Head>
      <Game />
      <Disclaimer />
    </PlayPageWrapper>
  )
}
