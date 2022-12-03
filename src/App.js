
import './App.css';
import { useState } from 'react';

function App() {

  const[count,setCount]=useState(0)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }} >
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}
        style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',}}
      >INC</button>
      <button onClick={()=>setCount(count-1)}
      style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginRight: '5px',
        backgroundColor: 'green',
        borderRadius: '8%',
        color: 'white',
      }}>DEC</button>
      
    </div>
  );
}

export default App;
