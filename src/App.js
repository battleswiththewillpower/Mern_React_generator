//Parent
import { useState } from 'react';
import './App.css';
import { Box } from './components/Box';
import DisplayBoxes from './components/DisplayBoxes';


function App() {
  const [currBox, setCurrBox] = useState("")
  const [boxes, setBoxes] = useState([])

  const handleNewBox = (newBox) =>{
    setCurrBox(newBox)
    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      <Box newBox = {handleNewBox}/>
      <DisplayBoxes currBox={currBox} boxes={boxes}/>

     
    </div>
  );
}

export default App;
