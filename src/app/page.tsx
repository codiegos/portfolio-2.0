import Intro from '@/sections/Intro'
import About from '@/sections/About'
import Projects from '../sections/Projects'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <main className='relative h-screen w-full'>
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
