import About from "../components/About/About"
import Detail from "../components/Detail/Detail"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { AboutData } from "../utils/constant/About"


const Abuot = () => {
  return (
    <div>
      <Header />
      <Detail />
      <About data={AboutData} />
      <Footer />
    </div>
  )
}

export default Abuot
