import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navbar/Nav'
import Home from './components/home/Home'
import OurStory from './components/ourstory/OurStory'
import Footer from './components/footer/Footer'
import BookCallBanner from './components/bookcall/BookCallBanner'
import Testimonials from './components/testenomials/Testimonials'
import PackagesSection from './components/package/PackagesSection'
import VideoShowcase from './components/videoShowcase/VideoShowcase'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="layout">

  <Nav />

  <main className="page-content">
  <section id="home">
 <Home />
 </section>
 <section id="our-story">
<OurStory />
 </section>

  </main>
 <VideoShowcase />
  <PackagesSection />
  <Testimonials />
  <BookCallBanner />
  <Footer />
</div>
    </>
  )
}

export default App
