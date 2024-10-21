import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'https://gateway.marvel.com'

function Search({ prompt, setPrompt, searchQuery, setSearchQuery, searchResults, setSearchResults, myTierList, setMyTierList }) {

  // this function GETs superhero names from the API, by sending searchQuery as the value of nameStartsWith
  const getAllCharacters = async (searchQuery) => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/public/characters?nameStartsWith=${searchQuery}&ts=1&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.HASHED_KEY}`);
      const result = await response.json();
      const characterArr = result.data.results;
      console.log(characterArr);
      setSearchResults(characterArr);
    }
    catch (error) {
      console.log('error', error);
    }
  };

  //this function sets the current value of the search bar to a state variable called searchQuery
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  }

  //this function submits searchQuery to the API
  const handleSubmit = (event) => {
    event.preventDefault();
    getAllCharacters(searchQuery);
  };

  // need a function for + button that adds the li to 1 of 7 arrays (one array for S, A, B, C, D, E, and F)
  // const addCharacterToMyTierList = (currentCharacter) => {
  //   setMyTierList(currentCharacter);
  //   console.log(myTierList);
  //   // delete character from myList
  // };

  // need a function for - button that deletes the correct superhero
  // const deleteCharacterFromMyTierList = (event, currentCharacter) => {
    // delete character from myList
  // };

  // need a function that takes the 7 arrays and returns 7 ols containing <li>superhero name</li> according to the arrays

  return (
    <>
      <div id="search-outer-div">
        <NavBar></NavBar>
        <h3>My Silly Superhero Tier List of:</h3>
        <h2 id='tier-list-prompt'>{prompt}</h2>

        <form onSubmit={handleSubmit} className="search-form">
          <input id='search-field' type="text" onChange={handleInputChange} placeholder="Search" name="search" />
          <button className="bn632-hover bn18" type="submit">Search</button>
        </form>

        <div>
          {
            // maps through the API array (characterList) and generates an image, li, + button, - button, and text field for each character & renders it on the page
            searchResults.map((currentCharacter) => {
              return (
                <div id="search-inner-div">
                  <div id="search-inner-left-div">
                    <img id="superhero-img" src={currentCharacter.thumbnail.path + `.` + currentCharacter.thumbnail.extension}></img>
                  </div>
                  <div id="search-inner-right-div">
                    <div id="search-inner-top-div">
                      <h2>{currentCharacter.name}</h2>

                      <input id="S" type="radio" name="tiers" value="S"></input>
                      <label htmlFor="S">S</label>
                      <input id="A" type="radio" name="tiers" value="A"></input>
                      <label htmlFor="A">A</label>
                      <input id="B" type="radio" name="tiers" value="B"></input>
                      <label htmlFor="B">B</label>
                      <input id="C" type="radio" name="tiers" value="C"></input>
                      <label htmlFor="C">C</label>
                      <input id="D" type="radio" name="tiers" value="D"></input>
                      <label htmlFor="D">D</label>
                      <input id="E" type="radio" name="tiers" value="E"></input>
                      <label htmlFor="E">E</label>
                      <input id="F" type="radio" name="tiers" value="F"></input>
                      <label htmlFor="F">F</label>

                      <button id="plus-button" onClick={() => setMyTierList({...myTierList, S: [...myTierList.S, currentCharacter]})}>+</button>
                      <button id="minus-button" onClick={() => setMyTierList(myTierList.S.filter((tierListChar) => tierListChar !== currentCharacter))}>-</button>

                    </div>

                    <div id="search-inner-bottom-div">
                      <p id="superhero-description">{currentCharacter.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        {console.log(myTierList)}

        <Link to="/customizer">
          <button className="bn632-hover bn18">Generate my Tier List!</button>
        </Link>
      </div>
    </>
  )
}

export default Search