import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'https://gateway.marvel.com'

function Search({ prompt, searchQuery, setSearchQuery, searchResults, setSearchResults, myTierList, setMyTierList }) {

  // this function GETs superhero names from the API, by sending searchQuery as the value of nameStartsWith
  const getAllCharacters = async (searchQuery) => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/public/characters?nameStartsWith=${searchQuery}&ts=1&apikey=${process.env.PUBLIC_API_KEY}&hash=${process.env.HASHED_KEY}`);
      const result = await response.json();
      const characterArr = result.data.results;
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

  //this function submits the searchQuery to the API and calls getAllCharacters() which populates characters on the screen
  const handleSubmit = (event) => {
    event.preventDefault();
    getAllCharacters(searchQuery);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="page-outer-div">
        <h3>My Silly Superhero Tier List of:</h3>
        <h2 id='tier-list-prompt'>{prompt}</h2>

        <form onSubmit={handleSubmit} className="search-form">
          <input id='search-field' type="text" onChange={handleInputChange} placeholder="Search" name="search" />
          <button className="bn632-hover bn18" type="submit">Search</button>
        </form>

        <Link to="/customizer">
          <button className="bn632-hover bn18">Generate my Tier List!</button>
        </Link>

        <div>
          {
            // maps through the searchResults from the API and generates a name, image, + button, - button, several divs, and a description for each character & renders it on the page
            searchResults.map((currentCharacter) => {
              return (
                <div className="search-inner-div">
                  <div className="search-inner-left-div">
                    <img className="superhero-img" src={currentCharacter.thumbnail.path + `.` + currentCharacter.thumbnail.extension}></img>
                  </div>
                  <div className="search-inner-right-div">
                    <div className="search-inner-top-div">
                      <h2>{currentCharacter.name}</h2>
                      {/* This minus-button filters through the state variable, myTierList and sets the state variable to a new mytierList which excludes the current character. */}
                      <button id="minus-button" className="bn633-hover bn18" onClick={() => setMyTierList(myTierList.filter((tierListChar) => tierListChar !== currentCharacter))}>-</button>
                      {/* This plus-button spreads the existing myTierList into an array, then appends the currentCharacter to the array, and sets this array as the new state variable myTierList.  */}
                      <button id="plus-button" className="bn632-hover bn18" onClick={() => setMyTierList([...myTierList, currentCharacter])}>+</button>
                    </div>
                    <div className="search-inner-bottom-div">
                      <p className="superhero-description">{currentCharacter.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Search