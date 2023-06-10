import './App.css'
import SearchAppBar from './components/AppBar';
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tour from "./pages/Tour"
import { useState } from 'react'
import Data from "./data.json"

function App() {
  const [list, setList] = useState(Data)

  const handleSearch = (searchValue) => {
    const filteredList = Data.flatMap((city) => {
      const filteredTours = city.tours.filter((tour) => tour.name.toLowerCase().includes(searchValue.toLowerCase()));
      if (filteredTours.length > 0) {
        return { ...city, tours: filteredTours };
      }
      return [];
    });
    setList(filteredList);
  };
  
  
  
  return (
    <BrowserRouter>
      <SearchAppBar handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home list={list}/>}/>
        <Route path="/:id" element={<Tour />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
