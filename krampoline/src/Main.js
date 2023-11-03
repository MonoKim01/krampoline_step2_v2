import './App.css';
import logo from './logo.svg'
import { useState, useEffect } from 'react';
import { getTest } from './api.js';

function Main() {
  const [name,setName] = useState('');
  
    useEffect(()=> {
        getTest().then(({data})=> {
            console.log(data);
            setName(data);
        });
    },[]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
            {name}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Main;
