import Intro from '@/components/Intro'
import About from '@/components/About'
import Projects from '../components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
