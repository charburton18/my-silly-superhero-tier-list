import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

function Search({prompt, setPrompt}) {

  // need a function that grabs superhero names from the api and generates <li>'s, a button, and text field for each line

  // need a function for + button that adds the li to 1 of 7 arrays (one array for S, A, B, C, D, E, and F)

  // need a function that takes the 7 arrays and returns 7 ols containing <li>superhero name</li> according to the arrays

  return (
    <>
      <NavBar></NavBar>
      <h3>My Silly Superhero Tier List of:</h3>
      <h2 id='tier-list-prompt'>{prompt}</h2> {/* Need to pass prompt prop here */}

      <form className="search-form">
        <input type="text" placeholder="Search" name="search" />
        <button type="submit">Search</button>
      </form>

      <ul>
          <li>Superman</li><button>+</button><input type="select" placeholder="S, A, B, C, D, E, or F"></input> {/* These li's will be populated from the GET request */} {/* The + button adds the li to 1 of 7 ols in customizer */}
      </ul>

      <Link to="/customizer">
      <button>Generate my Tier List!</button>
      </Link>
    </>
  )
}

export default Search