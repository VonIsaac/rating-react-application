

export default function Button({ isButtons, setNumberEdit, setButtonEdit}){

    function Button({number}){
        return(
              <>
                 <button className='main-btn' onClick={ () => setNumberEdit(number)}>{number}</button>
    
                 
              </>
        )
    }

    return(
        <>
        {!isButtons && (
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
                  <button onClick={ setButtonEdit}>Submit</button>
              </div>
      </div>
        )}
  
        
      </>
    )
}