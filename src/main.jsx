import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css" 
import Navbar from './navbar/navbar'
import Hero from './hero/hero'
import Clients from './clientlar/clients'
import Manage from './manage/manage'
import Section from './section/section'
import About from './about/about'
import Section2 from './section2/section2'
import About2 from './about2/about2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Clients />
    <Manage />
    <Section />
    <About />
    <Section2 />
    <About2 />
  </StrictMode>,
)
