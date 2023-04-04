import { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Layout } from '@/containers'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {

    router.events.on('routeChangeStart', () => { setPageLoading(true) })
    router.events.on('routeChangeComplete', () => { setPageLoading(false) })

    return () => {
      router.events.off('routeChangeStart', () => { setPageLoading(true) })
      router.events.off('routeChangeComplete', () => { setPageLoading(false) })
    }

  }, [router])


  return <Layout pageLoading={pageLoading}>
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  </Layout>
}
