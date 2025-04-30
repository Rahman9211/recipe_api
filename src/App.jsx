import { useEffect, useState } from 'react';
import Recipe from './Main/Recipe';
import './App.css';

function App() {
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY;
  const USER = import.meta.env.VITE_myrecipe;

  let [search, setSearch] = useState("");
  let [query, setQuery] = useState('momo');
  let [dishes, setDishes] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipe() {
      setLoading(true);
      let response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          headers: {
            "Edamam-Account-User": USER,
          },
        }
      );
      let data = await response.json();
      setDishes(data.hits);
      setLoading(false);
    }
    getRecipe();
  }, [query, APP_ID, APP_KEY, USER]);

  function handleOnSubmit(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <>
      <form className="form-container" onSubmit={handleOnSubmit}>
        <h1>Edamam Recipe App</h1>
        <input
          type="text"
          value={search}
          placeholder="Search Recipes...."
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      
      
        <div className="recipes-grid">
          {dishes.map((item, idx) => (
            <Recipe recipeList={item} key={idx} />
          ))}
        </div>
      
    </>
  );
}

export default App;







// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Recipe from './Component/Recipe';

// function App() {
//   const APP_ID = 'fd1f5329';
//   const APP_KEY = '0101efeeca0e863ffee86c60a8c7de51';

//   let [search, setSearch] = useState("");
//   let [query, setQuery] = useState("momo");
//   let [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       let response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
//       let data = await response.json();
//       console.log(data.hits);
//       // setDishes(data.hits); // update state with fetched data
//     }

//     // if (query) {
//       getData();
//     // }
//   }, [query]);

//   function handleSubmit(e) {
//     e.preventDefault(); 
//     setQuery(search);   
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         {/* <input type="text" value={search} onChange={e => setSearch(e.target.value)} /> */}

//         <input
//           type="text"value={search}onChange={e => {
//             console.log(e.target.value);
//             setSearch(e.target.value);
//           }}
//         />


//         <button type="submit">Submit</button>
//       </form>

//        {dishes.map((item, index) => (
//         <Recipe key={index} recipe={item.recipe} />
//       ))} 
//     </>
//   );
// }

// export default App;






