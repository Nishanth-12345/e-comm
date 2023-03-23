import React, {useEffect} from 'react';
import './main.css';
import './Main.scss';
import {Link} from 'react-router-dom';

import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css'



const Main = ({item}) => {
  useEffect(()=>{

    Aos.init({duration:2000})
  },[])
  
  
  return (
    <section className='main container section'>
       <div className='secTitle'>
         <h3 data-aos="fade-right" className='title'>
           most visit
         </h3>
       </div>
        <div className='setContent grid'>
           {item.map((soundItem) => {
              const {id,descTitle,location,imgSrc,grade,fees,description} = soundItem;

              return <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={descTitle} />
                  </div>

                  <div className='cardInfo'>
                    <h4 className='destTitle'></h4>
                    <span className='continent flex'>
                       <HiOutlineLocationMarker className='icon' />
                       <span className='name'>{location}</span>
                    </span>

                    <div className='fees flex'>
                      <div className='grade'>
                         <span>{grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                         <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className='desc'>
                      <p>{description}</p>
                    </div>
                  <Link to= {`tour/:${id}`}>
                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>
                  </Link>
                    
                  </div>
                    
              
              </div>
           })}

        </div>
    </section>
    
     
       
          
       
            
        
    
  )

};
export default Main;