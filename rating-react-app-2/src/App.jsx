
import './App.css'
import Thankyou from './Components/Thankyou';
import { useState } from 'react';




function App() {
  const [isButton, setButton] = useState(false);

  const [isNumber, setNumber] = useState();

  function setEditNumber(number){
    setNumber(number)
  }

  
  function setEditButton(){
    setButton(true)
  }

  function Button({number}){
    return(
          <>
             <button className='main-btn' onClick={ () => setEditNumber(number)}>{number}</button>

             
          </>
    )
}

  return (
    <>
      {!isButton && (
        <div className='wrapper'>
          <h2>How did we do?</h2>
        <p> Please let us know how we did with your support request. All
          feedback is appreciated to help us improve our offering!</p>

          <div className='btns'>
            
              <Button number={1} />
              <Button number={2} />
              <Button number={3} />
              <Button number={4} />
              <Button number={5} />
          </div>

          <div className='btn-sub'>
                <button onClick={ setEditButton}>Submit</button>
            </div>
    </div>
      )}

      {isButton && <Thankyou setEditButtons = { setEditButton} editnumbers = {isNumber}  />}
    </>
  )

  
  
}

export default App
