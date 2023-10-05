import Intro from '@/components/Intro'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'

export default function Home() {
  return (
    <main className='relative h-screen w-full'>
      <BackgroundAnimation />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
