import PlayPageWrapper from '@/widgets/play-page-wrapper'
import Game from '@/widgets/game'
import Disclaimer from '@/widgets/disclaimer'
import Head from 'next/head'

export default function PlayPage() {
  return (
    <PlayPageWrapper>
      <Head>
        <title>Играть — Гитлер или Соловьев?</title>
      </Head>
      <Game />
      <Disclaimer />
    </PlayPageWrapper>
  )
}
