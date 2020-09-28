import React, {  useState } from 'react';
import axios from 'axios';
import './App.css';

function App (props){
  
 const [state, setState] = useState({message:"click button to load data!"})
  const fetchData = () => {
    axios.get('/api/activities') 
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      console.log(response.data[0]) //The first activity
      setState({
        message: response.data[0].title
      });
    }) 
  }

    return (
      <div className="App">
        <h1>{ state.message }</h1>
        <button onClick={fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  
}

export default App;
