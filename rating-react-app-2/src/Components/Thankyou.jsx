import thankyou from "../assets/illustration-thank-you.svg"

export default function Thankyou({editnumbers, setEditButtons, thanksyours}){
    return(
      <div className='thank-you'>
          <img src= {thankyou} alt="thankyou" />
          <p className='p-1'>You selected {editnumbers} {!editnumbers ?"0": undefined} out of 5</p>
          <h2>{thanksyours}</h2>
          <p className='p-2'>We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!</p>
          <button onClick={() => setEditButtons(false)}>Rate Again</button>
      </div>
    )
  }
