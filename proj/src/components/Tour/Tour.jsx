import React from 'react'
import { Link } from 'react-router-dom';
import './tour.scss';
const Tour = () => {
  return (
    <div className='tour1' >
        <Link to = '/tour'>

         <h1 className='tour'> EXPLORE TOURS </h1>  
         <h1 className='tour'>CLICK HERE</h1>
        </Link>
    </div>
  )
}

export default Tour;