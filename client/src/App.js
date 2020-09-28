import React, {  useState } from 'react';
import axios from 'axios';
import './App.css';
import {Route, Switch} from 'react-router-dom';

function App (props){
  
 const [state, setState] = useState({message:"click button to load data!"})

  const fetchData = () => {
    axios.get('/api/activities') 
    .then((response) => {
      console.log(response.data) // The entire response from the Rails API
      console.log(response.data[0]) //The first activity
      setState({
        message: `All ${response.data.length} activities are rendered at this point`
      });
    }) 
  }

    return (
      <div className="App">
        <h1>This is the index(or home) page</h1>
        <h1>{ state.message }</h1>
        <button onClick={fetchData} >
          Render all activities 
        </button>        
      </div>
    );
  
}

export default App;
