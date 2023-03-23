import React, {useEffect} from 'react'
import './home.css';
import './Home.scss';
import video from '../../assets/sea-138588.mp4';
import {GrLocation} from 'react-icons/gr';
import { HiSearch } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import Tour from '../Tour/Tour';


const Home = () => {

  useEffect(()=>{

    Aos.init({duration:2000})
  },[])
  return (
    <section className='home'>
       <div className='overlay'></div>
       <video src={video} muted autoPlay loop type="video/mp4"></video>

       <div className="homeContent container">
         <div className="textDiv">
          <span data-aos="fade-up" className='smallText'>
             our packeges
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>
            search your holiday
          </h1>
         </div>

         <div data-aos="fade-up" className='cardDiv grid'>
            <div className='destinationInput'>
               <label htmlFor='city'>search place</label>
                <div className='input flex'>
                  <input type="text" placeholder='Enter name' />
                  <GrLocation className="icon" />
                </div>
            </div>

            <div className='dateInput'>
               <label htmlFor='date'>search your date:</label>
                <div className='input flex'>
                  <input type="date" />
                
                </div>
            </div>

            <div className='priceInput'>
               <div className='label_total flex'>
                 <label htmlFor='price'>
                   Max price:
                 </label>
                 <h3 className='total'>$3456</h3>
              
                </div>
                <div className='input flex'>
                  <input type="range" max="5000" min="1000" />
                </div>
            </div>

            <div className='searchOptions flex'>
               <HiSearch className="icon" />
               <spam>More Filters</spam>
            </div>
         </div>

         <div data-aos="fade-up" className='homeFooterIcons flex'>
            <div className='rightIcons'>
               <FiFacebook className="icon"/>
               <AiOutlineInstagram className="icon"/>
               <FaTripadvisor className="icon"/>
            </div>
            <div className='leftIcons'>
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
         </div>
         <Tour />
       </div>

       
    </section>
   
    
  
  )
}

export default Home