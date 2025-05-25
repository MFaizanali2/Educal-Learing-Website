import Design from "../components/Design/Design"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const Blog = () => {
  return (
    <div>
      <Header />
      <div className="design">
        <h2>We Share <br />
        Our Thoughts On Design</h2>
        <h6>{
          "you don't have to struggle alone, you've got our assistance and help."
        }</h6>
        <Design />

      </div>
      <Footer />
    </div>
  )
}

export default Blog
