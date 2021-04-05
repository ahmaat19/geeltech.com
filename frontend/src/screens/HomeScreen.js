import { useEffect } from 'react'
import About from './About'
import Services from './Services'
import Process from './Process'
import Works from './Works'
import Contact from './Contact'
import Hero from '../components/Hero'
import Clients from './ClentsScreen'

const HomeScreen = ({ match }) => {
  useEffect(() => {}, [])

  return (
    <>
      <main className='my-5 py-5'>
        <Hero />
        <About />
        {/* <Clients /> */}
        <Services />
        <Process />
        <Works />
        <Contact />
      </main>
    </>
  )
}

export default HomeScreen
