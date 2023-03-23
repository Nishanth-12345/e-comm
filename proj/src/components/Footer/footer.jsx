import React  from 'react';
import { useEffect } from 'react';
import './footer.css';
import './footer.scss';
import video2 from '../../assets/sea-138588.mp4';
import { FiSend } from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa' ;
import {FiChevronRight} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'



const footer = () => {
  
  
  

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
           <div data-aos="fade-up" className='text'>
             <small>Keep in Touch</small>
             <h2>Travel with us</h2>
           </div>
           <div className='inputDiv flex'>
             <input data-aos="fade-up" type='text' placeholder='Enter Email Address' />
             <button data-aos="fade-up" className='btn flex' type='submit'>
               SEND <FiSend className='icon'/>
             </button>
           </div>
        </div>

        <div className="footerCard flex">
           <div className="footerIntro flex">
              <div className="logoDiv">
                 <a href='#' className='logo flex'>
                    <MdOutlineTravelExplore 
                     className='icon'/> Travel.
                 </a>  
              </div>

              <div data-aos="fade-up" className="footerParagraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quod quisquam quasi neque ipsum tempora id vitae omnis doloribus exercitationem sint maiores non et, praesentium dolorem quis veniam. At, expedita!
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                 <AiOutlineTwitter className='icon' />
                 <AiFillYoutube className="icon" />
                 <AiFillInstagram className='icon' />
                 <FaTripadvisor className='icon' />
              </div>
           </div>

           <div className='footerLinks grid'>
               <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
                 <span className='groupTitle'>
                   our agency
                 </span>

                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    services
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    insurance
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    agency
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    tourism
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    payment
                 </li>
               </div>

               <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
                 <span className='groupTitle'>
                   our agency
                 </span>

                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    services
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    insurance
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    agency
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    tourism
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    payment
                 </li>
               </div>

               <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
                 <span className='groupTitle'>
                   our agency
                 </span>

                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    services
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    insurance
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    agency
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    tourism
                 </li>
                 <li className='footerList flex'>
                    <FiChevronRight className="icon" />
                    payment
                 </li>
               </div>
           </div>

           <div className='footerDiv flex'>
             <small>BEST TRAVEL WEBDITE</small>
             <small>COPYRIGHT @2023</small>
           </div>
        </div>
      </div>
    </section>
  )
}

export default footer