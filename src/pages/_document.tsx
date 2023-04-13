import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="description" content="Проверьте интуицию, сыграв в игру, где вам нужно угадать чья это цитата: Владимира Соловьева (журналист) или Адольфа Гитлера (политик)" />
        <meta name="keywords" content="Гитлер, Соловьев, игра" />
        <meta name="author" content="hloth" />
        <meta name="yandex-verification" content="7d2f180609697e51" />
        <meta name="google-site-verification" content="vCN1WW7NX-haD86sthtWNJiilnCjMOFvoFciaxAUPz0" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
