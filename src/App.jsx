// https://learnwith-zaid.vercel.app/#roadmap
import './App.css'
import About from './components/about/About'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/sevices/Services'
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification.jsx';
import Work from './components/work/Work.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import ScrollUp from './components/scrollup/ScrollUp.jsx'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </>
  )
}

export default App
