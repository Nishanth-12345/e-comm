import React, {useEffect} from 'react';
import { useState } from 'react';
import './main.css';
import './Main.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';



const Main = () => {
  const [myData, setMyData] = useState([]);
 // const [iid, setBYId] = useState(0);
  


  const history = useNavigate();

 // function handleDelete(id){
  //  axios.delete(
   //   `https://641ea48dad55ae01ccad57b2.mockapi.io/crud/data/${id}`
   // );
    
 // }
 

  
  useEffect(() => {
    axios.get("https://641ea48dad55ae01ccad57b2.mockapi.io/crud/data").then(response=>{
      console.log(response.data);
      setMyData(response.data);
    }).catch(err=>console.log(err))
  },[])

  useEffect(()=>{

    Aos.init({duration:2000})
  },[])
 

  const setToLocalStorage = (id, e_descTitle,e_description,
    e_fees,e_grade,e_img,e_location) => {
      localStorage.setItem("id",id);
      localStorage.setItem("getid",id);
      localStorage.setItem("e_description",e_description);
      localStorage.setItem("e_descTitle",e_descTitle);
      localStorage.setItem("e_grade",e_grade);
      localStorage.setItem("e_fees",e_fees);
      localStorage.setItem("e_location",e_location);
      localStorage.setItem("e_img",e_img);
    }
    

 
   
  
    const handleDelete = (id,e)=>{
      e.preventDefault();
      axios.delete(`https://641ea48dad55ae01ccad57b2.mockapi.io/crud/data/${id}`)
      .then(res =>{ console.log('deleted',res)
      history("/"); 
     }) .catch(err=>console.log(err))
     }
   
  
   

  return (
    <section className='main container section'>
       <div className='secTitle'>
         <h3 data-aos="fade-right" className='title'>
           
         Tours
           
         </h3>
        
         <Link to = '/post' className='title'>
           <h3>  Create Tours  </h3>
           <p>click here</p>
           
           </Link>
       </div>
        <div className='setContent grid'>
           {myData.map((soundItem) => {
              const {id,e_descTitle,e_location,e_img,e_grade,e_fees,e_description} = soundItem;

              return <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className='imageDiv'>
                    <img src={e_img} alt={e_descTitle} />
                  </div>

                  <div className='cardInfo'>
                    <h4 className='destTitle'></h4>
                    <span className='continent flex'>
                       <HiOutlineLocationMarker className='icon' />
                       <span className='name'>{e_location}</span>
                    </span>

                    <div className='fees flex'>
                      <div className='grade'>
                         <span>{e_grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                         <h5>{e_fees}</h5>
                      </div>
                    </div>
                    <div className='desc'>
                      <p>{e_description}</p>
                    </div>
                 <div className='button-2'>

                  <Link to= {`tour/:${id}`}>
                    <button className='btn flex' 
                        onClick={()=>setToLocalStorage(
                          id,
                          e_descTitle,
                          e_description,
                          e_fees,
                          e_grade,
                          e_img,
                          e_location
                           )}>
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>

                  </Link>
                  
                   <button className='btn flex' 
                   onClick={(e)=>handleDelete(
                     id,e
                   )}>
                    DELETE <HiOutlineClipboardCheck className='icon' />
                   </button>
                  <Link to = "/editpost">
                     <button className='btn flex'
                      onClick={()=>setToLocalStorage(
                        id,
                        e_descTitle,
                        e_description,
                        e_fees,
                        e_grade,
                        e_img,
                        e_location
                      )}>
                      UPDATE <HiOutlineClipboardCheck className='icon' />
                     </button>

                  </Link>
                   </div>
                  
                  
                  </div>
                    
              
              </div>
           })}

        </div>
    </section>
    
     
       
          
       
            
        
    
  )

};
export default Main;