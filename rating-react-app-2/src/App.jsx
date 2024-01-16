
import './App.css'
import Button from './Components/Button.jsx';
import { useState } from 'react';




function App() {
  const [isButton, setButton] = useState(false);

  const [isNumber, setNumber] = useState();

  function setEditNumber(number){
    setNumber(number)
  }

  
  function setEditButton(){
    setButton(editbutton => !editbutton)
  }

 

  return (
    <>
      <Button
        isButtons = {isButton}
        isNumbers = {isNumber}
        setNumberEdit ={setEditNumber}
        setButtonEdit = {setEditButton}
      />
    </>
  )

  
  
}

export default App
