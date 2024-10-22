import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

function Customizer({ prompt, setPrompt, myTierList, setMyTierList }) {

  return (
    <>
      <NavBar></NavBar>
      <h3>My Silly Superhero Tier List of:</h3>
      <h2 id='tier-list-prompt'>{prompt}</h2> 

      {console.log(myTierList)}

      <ol>
        {myTierList.map((currentChar) => {
            return (
              <>
              <li>{currentChar.name}</li>
              </>
            )
          })
        }
      </ol>

      <Link to="/search">
        <button className="bn632-hover bn18">Edit my List</button>
      </Link>
    </>
  )
}

export default Customizer