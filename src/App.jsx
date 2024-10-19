import Home from './Pages/Home'
import Search from './Pages/Search'
import Customizer from './Pages/Customizer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} /> {/*prompt={prompt} setPrompt={setPrompt}*/}
        <Route path='/search' element={<Search />} />
        <Route path='/customizer' element={<Customizer />} />
      </Routes>
    </>
  )
}

export default App
