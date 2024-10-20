import React, { useRef } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'https://gateway.marvel.com'
const HASHED_KEY = '5f1000ff09e4a0bf0d35cf9022d43a02&hash=9d874b1bba792cfc4bf3b5ca2bbd4a23'

function Search({ prompt, setPrompt }) {

  // this function GETs superhero names from the API, by sending inputRef as the value of nameStartsWith
  const getAllCharacters = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/public/characters?nameStartsWith=S&ts=1&apikey=${HASHED_KEY}`);
      const result = await response.json();
      const characterList = result;
      console.log(characterList);
      // setCharacterArr(characterList);
    }
    catch (error) {
      console.log('error', error);
    }
  };

  //this function sets the current value of the search bar to a variable called inputRef
  const inputRef = useRef();

  const handleSubmit = (event) => {
    console.log('This was submitted: ' + inputRef.current.value);
    event.preventDefault();
    getAllCharacters();

    // this function generates <li>'s, a button, and text field for each character from the GET request

  };

  // need a function for + button that adds the li to 1 of 7 arrays (one array for S, A, B, C, D, E, and F)

  // need a function for - button that deletes the correct superhero

  // need a function that takes the 7 arrays and returns 7 ols containing <li>superhero name</li> according to the arrays

  return (
    <>
      <NavBar></NavBar>
      <h3>My Silly Superhero Tier List of:</h3>
      <h2 id='tier-list-prompt'>{prompt}</h2> {/* Need to pass prompt prop here */}

      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" ref={inputRef} placeholder="Search" name="search" />
        <button type="submit">Search</button>
      </form>

      <ul>
        <li>Superman</li><button>+</button><button>-</button><input type="select" placeholder="S, A, B, C, D, E, or F"></input> {/* These li's will be populated from the GET request */} {/* The + button adds the li to 1 of 7 ols in customizer */}
      </ul>

      <Link to="/customizer">
        <button>Generate my Tier List!</button>
      </Link>
    </>
  )
}

export default Search