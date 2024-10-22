import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

function Customizer({ prompt, myTierList, setMyTierList }) {

  return (
    <>
      <NavBar></NavBar>
      <div className="page-outer-div">
        <h3>My Silly Superhero Tier List of:</h3>
        <h2 id='tier-list-prompt'>{prompt}</h2> 

        {/* maps through myTierList and returns the name of each character in myTierList */}
        <div id="list-div">
          <ol>
            {myTierList.map((currentChar) => {
                return (
                  <>
                    <li className='listed-character'>{currentChar.name}</li>
                  </>
                )
              })
            }
          </ol>
        </div>

        {/* the "Clear my List" button clears the myTierList state variable, setting it to an empty array */}
        <button className="bn633-hover bn18" onClick={() => setMyTierList([])}>Clear my List</button>

        <Link to="/search">
          <button className="bn632-hover bn18">Edit my List</button>
        </Link>

      </div>
    </>
  )
}

export default Customizer