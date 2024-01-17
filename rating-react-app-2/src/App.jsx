
import './App.css'
import Button from './Components/Button.jsx';
import { useState } from 'react';
import Thankyou from "./Components/Thankyou.jsx"

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

      {isButton &&(
       <Thankyou setEditButtons = {setEditButton}
        editnumbers = {setEditNumber}  
        thanksyours= "Thank you!"/>
        )}
    </>
  )

  
  
}

export default App
