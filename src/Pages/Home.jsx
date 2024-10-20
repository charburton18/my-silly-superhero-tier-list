import { Link } from "react-router-dom"

function Home({ prompt, setPrompt }) {

  // this function replaces the tier list prompt from an array of prompts
  const handleClick = () => {
    // define every prompt
    const prompt1 = 'Which superheroes are the most overrated?'
    const prompt2 = 'Which superhero would most likely get lost on the New York Metro System?'
    const prompt3 = 'Which superhero would you trust to do your taxes?'
    const prompt4 = 'Which superhero would be good with cats?'
    const prompt5 = 'Which superhero would have the most impressive LinkedIn profile?'
    const prompt6 = 'Which superheroes would be best in a fight against Magneto?'
    // define an array containing every prompt
    const promptArr = [prompt1, prompt2, prompt3, prompt4, prompt5, prompt6]
    // define the h2 element we need to access
    const currentPrompt = document.getElementById('tier-list-prompt')
    // replace the inner text of the h2 'tier-list-prompt' with a random prompt from the array. Set the the current prompt = "prompt" in our useState.
    setPrompt(currentPrompt.innerText = promptArr[Math.floor(Math.random() * 6)])
  }

  return (
    <>
      {console.log(prompt)}
      <h1>My Silly Superhero Tier List</h1>
      <h2>Welcome!</h2>
      <p>Welcome to MSSTL, where you can make super silly tier lists with your favorite superheroes!</p><br></br>
      <p>Make a tier list of:</p>
      <h2 id='tier-list-prompt'>Which superheroes are the most overrated?</h2>
      <button onClick={handleClick}>Reroll</button>
      <Link to={`/search`}>
        <button>Make my Tier List!</button>
      </Link>
    </>
  )
}

export default Home