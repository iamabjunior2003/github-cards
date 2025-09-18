import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import './assets/css/Cards.css'
import Search from './components/Search'

function App() {

  return (
    <>
      <h1>GitHub Cards</h1>
      {/* <Search/> */}
      <Cards/>
  </>
  )
}

export default App
