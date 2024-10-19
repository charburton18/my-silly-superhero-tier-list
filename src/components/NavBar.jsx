import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav>
        <h1>MSSTL</h1>
        <Link to='/'>
          <button>Restart</button>
        </Link>
      </nav>
    </>
  )
}

export default NavBar