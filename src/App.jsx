import Home from './Pages/Home'
import Search from './Pages/Search'
import Customizer from './Pages/Customizer'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [prompt, setPrompt] = useState("Which superheroes are the most overrated?");

  return (
    <>
      <Routes>
        <Route path='/' element={<Home prompt={prompt} setPrompt={setPrompt} />} />
        <Route path='/search' element={<Search prompt={prompt} setPrompt={setPrompt} />} />
        <Route path='/customizer' element={<Customizer prompt={prompt} setPrompt={setPrompt} />} />
      </Routes>
    </>
  )
}

export default App
