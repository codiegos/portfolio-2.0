import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className='relative h-screen w-full'>
      <Navbar />
      <BackgroundAnimation />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
