import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title> Next IP Tracker </title>
        <meta name="description" content="A IP tracker app developed using IPify and leaflet to enable users to get detailed information about a spicific IP address." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
