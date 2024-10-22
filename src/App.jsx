import Home from './Pages/Home'
import Search from './Pages/Search'
import Customizer from './Pages/Customizer'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [prompt, setPrompt] = useState("Which superheroes are the most overrated?");
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [myTierList, setMyTierList] = useState([]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home prompt={prompt} setPrompt={setPrompt} />} />
        <Route path='/search' element={<Search prompt={prompt} searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchResults={searchResults} setSearchResults={setSearchResults} myTierList={myTierList} setMyTierList={setMyTierList} />} />
        <Route path='/customizer' element={<Customizer prompt={prompt} myTierList={myTierList} setMyTierList={setMyTierList} />} />
      </Routes>
    </>
  )
}

export default App
