import Intro from '@/widgets/intro/ui/intro'
import HomepageWrapper from '@/widgets/home-page-wrapper'
import Head from 'next/head'

export default function HomePage() {
  return (
    <HomepageWrapper>
      <Head>
        <title>Гитлер или Соловьев?</title>
        <meta rel="description">Проверьте интуицию, сыграв в игру, где вам нужно угадать чья это цитата: Владимира Соловьева (журналист) или Адольфа Гитлера (политик)</meta>
      </Head>
      <Intro />
    </HomepageWrapper>
  )
}
