import React ,{useEffect,useState} from "react"
import './App.css';
import Recipe from "./Recipe";

function App() {

  const APP_ID = "9147c30e";
  const APP_KEY = "d6a0b1a97b07c942b43fce50f318660e";
  const[recipes,setRecipes]=useState([]);
  const[search,setSearch]=useState("")
  const[query,setQuery]=useState("chicken")
   
   
   useEffect(() => {
  getRecipes()    
  }, [query])

  
   const getRecipes= async ()=>{
          const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
          const data= await response.json()
             setRecipes(data.hits);
             console.log(recipes);
        }

        const getSearch=(e)=>{
              e.preventDefault()
              setQuery(search)
              setSearch("")
        }
  return (
    <div className="App">
   
    <form className="search-form">
       <input
       type="text"
        className="search-bar"
        value={search}
        onChange={e=>setSearch(e.target.value)}
        
       />
       <button onClick={getSearch} type="submit" className="search-button">Search</button>
       
       
       </form>
       <div className="recipes">
       {recipes && recipes.map((recipe)=>(
         <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories}
         ingredients={recipe.recipe.ingredients}/>
       ))}
       </div>
       
    </div>
  );
}

export default App;
