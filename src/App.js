import React from 'react'
import Header from './components/Header'
import About from './screens/About'
import Services from './screens/Services'
import Process from './screens/Process'
import Works from './screens/Works'

const App = () => {
  return (
    <div>
      <Header />
      <main className='my-5 py-5'>
        <About />
        <Services />
        <Process />
        <Works />
      </main>
    </div>
  )
}

export default App
