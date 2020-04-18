import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

useEffect(() =>{
  axios
  .get("https://rickandmortyapi.com/api/character")
  .then(res => {
    setData(res.data.results)
    console.log(res.data.results)
  })
  .catch(err => {
    console.log("This error has occured", err);
  })
},[]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Character</h1>
    </div>
  );
}

export default App;
