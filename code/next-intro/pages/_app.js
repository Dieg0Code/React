import '../styles/globals.css'

export const getInitialProps = () => {
  return {}
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
