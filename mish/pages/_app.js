import NavBar from "../components/NavBar/NavBar"
import "../styles/index.scss"

function MyApp({ Component, pageProps }) {

  return (
    <main>
        <NavBar />
        <Component {...pageProps} />
    </main>

  )
}

export default MyApp
