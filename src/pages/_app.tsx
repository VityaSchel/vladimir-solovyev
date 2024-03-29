import '@/app/styles/globals.scss'
import type { AppProps } from 'next/app'
import store from '@/shared/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
