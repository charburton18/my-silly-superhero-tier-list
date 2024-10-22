import { Link } from "react-router-dom"

function Home({ prompt, setPrompt }) {

  // this function randomly replaces the tier list prompt "Which superheroes are the most overrated" from an array of prompts
  const handleClick = () => {
    // define every prompt
    const prompt1 = 'Which superheroes are the most overrated?'
    const prompt2 = 'Which superheroes would most likely get lost on the New York Metro System?'
    const prompt3 = 'Which superheroes would you trust to do your taxes?'
    const prompt4 = 'Which superheroes would be good with cats?'
    const prompt5 = 'Which superheroes would have the most impressive LinkedIn profiles?'
    const prompt6 = 'Which superheroes would be best in a fight against Magneto?'
    // define an array containing every prompt
    const promptArr = [prompt1, prompt2, prompt3, prompt4, prompt5, prompt6]
    // Set a random prompt as the state variable.
    setPrompt(promptArr[Math.floor(Math.random() * promptArr.length)]);
  }

  return (
    <>
      <div className="page-outer-div">
        <h1>My Silly Superhero Tier List</h1>
        <h2>Welcome!</h2>
        <p>Welcome to MSSTL, where you can make super silly tier lists with your favorite superheroes!</p><br></br>
        <p>Make a tier list of:</p>
        <h2 id='tier-list-prompt'>{prompt}</h2>
        <button className="bn633-hover bn18" onClick={handleClick}>Reroll</button>
        <Link to={`/search`}>
          <button className="bn632-hover bn18">Make my Tier List!</button>
        </Link>
      </div>
    </>
  )
}

export default Home