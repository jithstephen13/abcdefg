import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[count,setCount]=useState(0)

  return (
    <div >
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>INC</button>
      <button onClick={()=>setCount(count-1)}>DEC</button>
      
    </div>
  );
}

export default App;
