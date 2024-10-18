function Search() {
  return (
    <>
      <Nav></Nav>
      <h2>Welcome!</h2>
      <p>Welcome to MSSTL, where you can make super silly tier lists with your favorite superheroes!</p><br></br>
      <p>Make a tier list of:</p>
      <h2 id='tier-list-prompt'>Which superheroes are the most overrated?</h2>
      <button onClick={handleClick}>Reroll</button>
      <button>Make my Tier List!</button>
    </>
  )
}

export default Search