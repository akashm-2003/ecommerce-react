
import React from 'react'
import spinner from '../images/loading.gif'
const Spinner = () => {
  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
        <img src={spinner} alt="loading" />
    </div>
  )
}

export default Spinner