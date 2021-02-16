import React from 'react'
import Header from './components/Header'
import About from './screens/About'
import Services from './screens/Services'
import Strategies from './screens/Strategies'

const App = () => {
  return (
    <div>
      <Header />
      <main className='my-5 py-5'>
        <About />
        <Services />
        <Strategies />
      </main>
    </div>
  )
}

export default App
