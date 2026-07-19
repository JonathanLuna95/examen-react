import { useState } from 'react'
import './App.css'
import JugadorList from './components/JugadorList'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [totalJugadores, setTotalJugadores] = useState(0)

  return (
    <div>
      <Navbar totalJugadores={totalJugadores} />
      <Header />
      <main>
        <JugadorList onCargados={setTotalJugadores} />
      </main>
      <Footer />
    </div>
  )
}

export default App
