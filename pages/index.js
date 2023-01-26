import Head from 'next/head'
import Login from '@components/Login'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login title="Welcome to my app!" />
      </main>

      <Footer />
    </div>
  )
}
