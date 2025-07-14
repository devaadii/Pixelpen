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
import FAQSection from './components/FAQ/FAQSection'


function App() {
  return (
    <div className="layout">
      <Nav />
      <main className="page-content">
        <section id="home">
          <Home />
   
        </section>
        <OurStory />
        <section id="portfolio">
          <VideoShowcase />
        </section>
        <section id="case-study">
          <PackagesSection />
        </section>
        <section id="services">
          <Testimonials />
        </section>
        <section id="about">
          <FAQSection />
        </section>
        <section id="book-call">
          <BookCallBanner />
        </section>
        <section id="about">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App
