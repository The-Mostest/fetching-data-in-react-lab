// src/App.jsx
import { useState } from "react";
import { useEffect } from "react";
import './App.css'

import * as starshipService from './services/starshipService.js'
import StarshipSearch from './components/StarshipSearch.jsx'
import StarshipList from './components/StarshipList.jsx'



const App = () => {

  const [starships, setStarships] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchShipData = async () => {
      const data = await starshipService.index()
      setStarships(data.results)
    }
    fetchShipData()
  }, [])




  return (
    <>

      <StarshipSearch
        setFilter={setFilter}
      />
      <StarshipList
        starships={starships}
        filter = {filter}
      />
      
    </>
  );
}

export default App


//ToDo  ===== Display starship cards on render and number of results

//ToDo  ===== Display - name, starship class, starship manufacturer, starship model on each starship card

//ToDo  ===== Search Bar ABOVE the list to submit that changes the results to what to search

//ToDo  ===== Submit a search and display results 

//ToDo  ===== 