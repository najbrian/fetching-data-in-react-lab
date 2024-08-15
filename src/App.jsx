import * as starShipService from './services/starshipService.js'
import './App.css'

import StarshipSearch from './components/StarshipSearch.jsx';
import StarshipList from './components/StarshipList.jsx';

import { useState, useEffect } from 'react';

const App = () => {

  const [starships, setStarships] = useState([])

  const [searchResults, setSearchResults] = useState([])

  const searchQuery = (userInput) => {
    const result = starships.filter((ship) => ship.name.toLowerCase().includes(userInput.toLowerCase()))
    
    setSearchResults(result)
  }

  const resetSearch = async () => {
    const data = await starShipService.show()
      setStarships(data.results)
  }

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starShipService.show()
      setStarships(data.results)
    }

    fetchDefaultData()
  }, [])

  return (
    <>
    <h1>Hello world!</h1>
    <StarshipSearch resetSearch={resetSearch} searchQuery={searchQuery}/>
    {searchResults.length
      ? <StarshipList ships={searchResults}/>
      : <StarshipList ships={starships}/>
      }
    </>
  );
}

export default App
