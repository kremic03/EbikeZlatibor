import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bikes from './components/Bikes'
import Tours from './components/Tours'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Bikes />
      <Tours />
      <WhyUs />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
