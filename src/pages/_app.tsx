import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Layout } from '@/containers'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  </Layout>
}
