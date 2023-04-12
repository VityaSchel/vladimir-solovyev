import Intro from '@/widgets/intro/ui/intro'
import HomepageWrapper from '@/widgets/home-page-wrapper'
import Head from 'next/head'

export default function HomePage() {
  return (
    <HomepageWrapper>
      <Head>
        <title>Гитлер или Соловьев?</title>
      </Head>
      <Intro />
    </HomepageWrapper>
  )
}
