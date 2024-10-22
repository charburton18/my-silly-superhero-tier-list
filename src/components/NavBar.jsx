import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav id="nav-bar-outer-div">
        <h1 id="MSSTL-h1">MSSTL</h1>
        <Link to='/'>
          <button className="bn633-hover bn18">Change Prompt</button>
        </Link>
      </nav>
    </>
  )
}

export default NavBar