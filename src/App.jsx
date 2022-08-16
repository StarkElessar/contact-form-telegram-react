import Header from "./components/Header"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="wrapper animation-gradient">
      <Header/>

      <main className="page__main main">
        <div className="main__container">
          <ContactForm/>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default App
