'use client'
import { MenuProvider } from '@/contexts/menu-context'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Projects from '../components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <MenuProvider>
      <Header />
      <main className='h-screen w-full overflow-x-hidden scroll-smooth duration-1000'>
        <div id='home'>
          <Intro />
        </div>
        <div id='about' className='lg:bg-tertiary/70'>
          <About />
        </div>
        <div id='projects' className='bg-tertiary/70'>
          <Projects />
        </div>
        <div id='contact' className='bg-tertiary/70'>
          <Contact />
        </div>
        <Footer />
      </main>
    </MenuProvider>
  )
}
