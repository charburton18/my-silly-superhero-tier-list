import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

function Customizer({prompt, setPrompt}) {

  return (
    <>
      <NavBar></NavBar>
      <h3>My Silly Superhero Tier List of:</h3>
      <h2 id='tier-list-prompt'>{prompt}</h2> {/* Need to pass prompt prop here */}

      <ol>S Tier
        <li></li>
      </ol>
      <ol>A Tier
        <li></li>
      </ol>
      <ol>B Tier
        <li></li>
      </ol>
      <ol>C Tier
        <li></li>
      </ol>
      <ol>D Tier
        <li></li>
      </ol>
      <ol>E Tier
        <li></li>
      </ol>
      <ol>F Tier
        <li></li>
      </ol>

      <Link to="/search">
      <button>Edit my List</button>
      </Link>
    </>
  )
}

export default Customizer