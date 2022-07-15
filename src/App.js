import './App.css';
import React from 'react';
import { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm.js';

function App() {
  let [colors, setColors] = useState(['violet','blue','lightblue', 'green', 'greenyellow', 'orange', 'red'])
  let colorMap = colors.map((color, i) => {
      return (
          <div>
              <ColorBlock key={i} color={color} />
          </div>      
      )}
  )
  
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;
