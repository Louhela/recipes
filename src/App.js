import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const API = 'https://www.themealdb.com/api/json/v1/1/'

  const [search, setSearch] = useState('')
  let address = API + 'random.php';
  let searchAddress = API + 'search.php?s=' + search;

  const [mealName, setMealName] = useState('')
  const [mealCategory, setMealCategory] = useState('')
  const [mealInstructions, setMealInstructions] = useState('')
  const [mealSource, setMealSource] = useState('')
  const [mealYoutube, setMealYoutube] = useState('')
  const [mealImage, setMealImage] = useState('')

  const [mealIngredient1, setMealIngredient1] = useState('')
  const [mealIngredient2, setMealIngredient2] = useState('')
  const [mealIngredient3, setMealIngredient3] = useState('')
  const [mealIngredient4, setMealIngredient4] = useState('')
  const [mealIngredient5, setMealIngredient5] = useState('')
  const [mealIngredient6, setMealIngredient6] = useState('')
  const [mealIngredient7, setMealIngredient7] = useState('')
  const [mealIngredient8, setMealIngredient8] = useState('')
  const [mealIngredient9, setMealIngredient9] = useState('')
  const [mealIngredient10, setMealIngredient10] = useState('')
  const [mealIngredient11, setMealIngredient11] = useState('')
  const [mealIngredient12, setMealIngredient12] = useState('')
  const [mealIngredient13, setMealIngredient13] = useState('')
  const [mealIngredient14, setMealIngredient14] = useState('')
  const [mealIngredient15, setMealIngredient15] = useState('')
  const [mealIngredient16, setMealIngredient16] = useState('')
  const [mealIngredient17, setMealIngredient17] = useState('')
  const [mealIngredient18, setMealIngredient18] = useState('')
  const [mealIngredient19, setMealIngredient19] = useState('')
  const [mealIngredient20, setMealIngredient20] = useState('')

  const [mealMeasurement1, setMealMeasurement1] = useState('')
  const [mealMeasurement2, setMealMeasurement2] = useState('')
  const [mealMeasurement3, setMealMeasurement3] = useState('')
  const [mealMeasurement4, setMealMeasurement4] = useState('')
  const [mealMeasurement5, setMealMeasurement5] = useState('')
  const [mealMeasurement6, setMealMeasurement6] = useState('')
  const [mealMeasurement7, setMealMeasurement7] = useState('')
  const [mealMeasurement8, setMealMeasurement8] = useState('')
  const [mealMeasurement9, setMealMeasurement9] = useState('')
  const [mealMeasurement10, setMealMeasurement10] = useState('')
  const [mealMeasurement11, setMealMeasurement11] = useState('')
  const [mealMeasurement12, setMealMeasurement12] = useState('')
  const [mealMeasurement13, setMealMeasurement13] = useState('')
  const [mealMeasurement14, setMealMeasurement14] = useState('')
  const [mealMeasurement15, setMealMeasurement15] = useState('')
  const [mealMeasurement16, setMealMeasurement16] = useState('')
  const [mealMeasurement17, setMealMeasurement17] = useState('')
  const [mealMeasurement18, setMealMeasurement18] = useState('')
  const [mealMeasurement19, setMealMeasurement19] = useState('')
  const [mealMeasurement20, setMealMeasurement20] = useState('')




  function Lookup(){
      axios.get(searchAddress)
      .then((response) => {
        console.log(response)
        setMealName(response.data.meals[0].strMeal)
        setMealCategory(response.data.meals[0].strCategory)
        setMealInstructions(response.data.meals[0].strInstructions)
        setMealSource(response.data.meals[0].strSource)
        setMealYoutube(response.data.meals[0].strYoutube)
        setMealImage(response.data.meals[0].strMealThumb)
  
        setMealIngredient1(response.data.meals[0].strIngredient1)
        setMealIngredient2(response.data.meals[0].strIngredient2)
        setMealIngredient3(response.data.meals[0].strIngredient3)
        setMealIngredient4(response.data.meals[0].strIngredient4)
        setMealIngredient5(response.data.meals[0].strIngredient5)
        setMealIngredient6(response.data.meals[0].strIngredient6)
        setMealIngredient7(response.data.meals[0].strIngredient7)
        setMealIngredient8(response.data.meals[0].strIngredient8)
        setMealIngredient9(response.data.meals[0].strIngredient9)
        setMealIngredient10(response.data.meals[0].strIngredient10)
        setMealIngredient11(response.data.meals[0].strIngredient11)
        setMealIngredient12(response.data.meals[0].strIngredient12)
        setMealIngredient13(response.data.meals[0].strIngredient13)
        setMealIngredient14(response.data.meals[0].strIngredient14)
        setMealIngredient15(response.data.meals[0].strIngredient15)
        setMealIngredient16(response.data.meals[0].strIngredient16)
        setMealIngredient17(response.data.meals[0].strIngredient17)
        setMealIngredient18(response.data.meals[0].strIngredient18)
        setMealIngredient19(response.data.meals[0].strIngredient19)
        setMealIngredient20(response.data.meals[0].strIngredient20)
  
        setMealMeasurement1(response.data.meals[0].strMeasure1)
        setMealMeasurement2(response.data.meals[0].strMeasure2)
        setMealMeasurement3(response.data.meals[0].strMeasure3)
        setMealMeasurement4(response.data.meals[0].strMeasure4)
        setMealMeasurement5(response.data.meals[0].strMeasure5)
        setMealMeasurement6(response.data.meals[0].strMeasure6)
        setMealMeasurement7(response.data.meals[0].strMeasure7)
        setMealMeasurement8(response.data.meals[0].strMeasure8)
        setMealMeasurement9(response.data.meals[0].strMeasure9)
        setMealMeasurement10(response.data.meals[0].strMeasure10)
        setMealMeasurement11(response.data.meals[0].strMeasure11)
        setMealMeasurement12(response.data.meals[0].strMeasure12)
        setMealMeasurement13(response.data.meals[0].strMeasure13)
        setMealMeasurement14(response.data.meals[0].strMeasure14)
        setMealMeasurement15(response.data.meals[0].strMeasure15)
        setMealMeasurement16(response.data.meals[0].strMeasure16)
        setMealMeasurement17(response.data.meals[0].strMeasure17)
        setMealMeasurement18(response.data.meals[0].strMeasure18)
        setMealMeasurement19(response.data.meals[0].strMeasure19)
        setMealMeasurement20(response.data.meals[0].strMeasure20)
      }).catch(error => {
          console.log(error)
          alert("Could not find a meal. Try to search for a different meal");
      })

  }

  useEffect(() => {
    axios.get(address)
    .then((response) => {
      console.log(response)
      setMealName(response.data.meals[0].strMeal)
      setMealCategory(response.data.meals[0].strCategory)
      setMealInstructions(response.data.meals[0].strInstructions)
      setMealSource(response.data.meals[0].strSource)
      setMealYoutube(response.data.meals[0].strYoutube)
      setMealImage(response.data.meals[0].strMealThumb)

      setMealIngredient1(response.data.meals[0].strIngredient1)
      setMealIngredient2(response.data.meals[0].strIngredient2)
      setMealIngredient3(response.data.meals[0].strIngredient3)
      setMealIngredient4(response.data.meals[0].strIngredient4)
      setMealIngredient5(response.data.meals[0].strIngredient5)
      setMealIngredient6(response.data.meals[0].strIngredient6)
      setMealIngredient7(response.data.meals[0].strIngredient7)
      setMealIngredient8(response.data.meals[0].strIngredient8)
      setMealIngredient9(response.data.meals[0].strIngredient9)
      setMealIngredient10(response.data.meals[0].strIngredient10)
      setMealIngredient11(response.data.meals[0].strIngredient11)
      setMealIngredient12(response.data.meals[0].strIngredient12)
      setMealIngredient13(response.data.meals[0].strIngredient13)
      setMealIngredient14(response.data.meals[0].strIngredient14)
      setMealIngredient15(response.data.meals[0].strIngredient15)
      setMealIngredient16(response.data.meals[0].strIngredient16)
      setMealIngredient17(response.data.meals[0].strIngredient17)
      setMealIngredient18(response.data.meals[0].strIngredient18)
      setMealIngredient19(response.data.meals[0].strIngredient19)
      setMealIngredient20(response.data.meals[0].strIngredient20)

      setMealMeasurement1(response.data.meals[0].strMeasure1)
      setMealMeasurement2(response.data.meals[0].strMeasure2)
      setMealMeasurement3(response.data.meals[0].strMeasure3)
      setMealMeasurement4(response.data.meals[0].strMeasure4)
      setMealMeasurement5(response.data.meals[0].strMeasure5)
      setMealMeasurement6(response.data.meals[0].strMeasure6)
      setMealMeasurement7(response.data.meals[0].strMeasure7)
      setMealMeasurement8(response.data.meals[0].strMeasure8)
      setMealMeasurement9(response.data.meals[0].strMeasure9)
      setMealMeasurement10(response.data.meals[0].strMeasure10)
      setMealMeasurement11(response.data.meals[0].strMeasure11)
      setMealMeasurement12(response.data.meals[0].strMeasure12)
      setMealMeasurement13(response.data.meals[0].strMeasure13)
      setMealMeasurement14(response.data.meals[0].strMeasure14)
      setMealMeasurement15(response.data.meals[0].strMeasure15)
      setMealMeasurement16(response.data.meals[0].strMeasure16)
      setMealMeasurement17(response.data.meals[0].strMeasure17)
      setMealMeasurement18(response.data.meals[0].strMeasure18)
      setMealMeasurement19(response.data.meals[0].strMeasure19)
      setMealMeasurement20(response.data.meals[0].strMeasure20)
    }).catch(error => {
      alert(error);
    })
  },[])



  return (
    <div className="App">
     <h2>Meal of the day</h2>
     <input placeholder='Search a meal by name' type="text" value={search} onChange={e=> setSearch(e.target.value)}/>
     <input type="button" value="Search" onClick={Lookup}/>
     <h1>{mealName}</h1>
     <p>{mealCategory}</p>
    <h3>Ingredients</h3>
     <ul>
          <li>{mealIngredient1} {mealMeasurement1}</li>
          <li>{mealIngredient2} {mealMeasurement2}</li>
          <li>{mealIngredient3} {mealMeasurement3}</li>
          <li>{mealIngredient4} {mealMeasurement4}</li>
          <li>{mealIngredient5} {mealMeasurement5}</li>
          <li>{mealIngredient6} {mealMeasurement6}</li>
          <li>{mealIngredient7} {mealMeasurement7}</li>
          <li>{mealIngredient8} {mealMeasurement8}</li>
          <li>{mealIngredient9} {mealMeasurement9}</li>
          <li>{mealIngredient10} {mealMeasurement10}</li>
          <li>{mealIngredient11} {mealMeasurement11}</li>
          <li>{mealIngredient12} {mealMeasurement12}</li>
          <li>{mealIngredient13} {mealMeasurement13}</li>
          <li>{mealIngredient14} {mealMeasurement14}</li>
          <li>{mealIngredient15} {mealMeasurement15}</li>
          <li>{mealIngredient16} {mealMeasurement16}</li>
          <li>{mealIngredient17} {mealMeasurement17}</li>
          <li>{mealIngredient18} {mealMeasurement18}</li>
          <li>{mealIngredient19} {mealMeasurement19}</li>
          <li>{mealIngredient20} {mealMeasurement20}</li>
     </ul>
     <img src={mealImage} alt="" />
     <h3>Instructions</h3>
     <p>{mealInstructions}</p>
     <p>Recipe source: <a href={mealSource}>{mealSource}</a></p>
     <p><a href={mealYoutube}>Link to YouTube recipe</a></p>
    </div>
  );
}

export default App;
