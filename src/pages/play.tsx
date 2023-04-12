import PlayPageWrapper from '@/widgets/play-page-wrapper'
import Game from '@/widgets/game'
import Disclaimer from '@/widgets/disclaimer'

export default function PlayPage() {
  return (
    <PlayPageWrapper>
      <Game />
      <Disclaimer />
    </PlayPageWrapper>
  )
}