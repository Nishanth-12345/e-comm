//import { useContext, useState } from "react";
//import { Context } from "../../utils/context";
//import { useParams } from "react-router-dom";
//import useFetch from "../../hooks/useFetch";
//import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
    
} from "react-icons/fa";
import "./Singletour.scss";
//import prod from '../../assets/pexels-polina-chistyakova-2821728.jpg';
import { useEffect } from "react";
import { useState } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";
const Singletour = () => {
    
 //   const [id, setID ] = useState(0);
 const [id, setId] = useState(0);
 const [descTitle, setDescTitle] = useState('');
 const [location, setLocation] = useState('');
 const [grade, setGrade] = useState('');
 const [fees, setFees] = useState('');
 const [description, setDescription] = useState('');
 const [img, setImg] = useState('');

 useEffect(() => {
     setId(localStorage.getItem("getid"));
     setDescTitle(localStorage.getItem("e_descTitle"));
     setDescription(localStorage.getItem("e_description"));
     setLocation(localStorage.getItem("e_location"));
     setGrade(localStorage.getItem("e_grade"));
     setFees(localStorage.getItem("e_fees"));
     setImg(localStorage.getItem("e_img"));

  },[]);

  const getData = () => {
     axios.get(`https://641ea48dad55ae01ccad57b2.mockapi.io/crud/data/${id}`).then(response=>{
     //  console.log(response.data);
        console.log("id..",id);
       setId(response.data);
       setDescTitle(response.data);
       setDescription(response.data);
       setLocation(response.data);
       setGrade(response.data);
       setFees(response.data);
       setImg(response.data);
     }).catch(err=>console.log(err))
   };

  // useEffect(()=>{
  //  getData()
  // },[]);

 return (

     
     <div className="single-product-main-content">
     

           <div className="layout" >

         <div className="single-product-page" key={id}>
             <div className="left">
                 <img
                     src={ img
                      
                     } alt= "img"

                 />
             </div>
             <div className="right">
                 <span className="name">{descTitle}</span>
                 <span className="price">{fees}</span>
                 <span className="desc">{description}</span>

                 <div className="cart-buttons">
                     <div className="quantity-buttons">
                         <span >-</span>
                         <span>87</span>
                         <span>+</span>
                     </div>
                     <button
                         className="add-to-cart-button"
                      //   onClick={() => {
                        //     handleAddToCart(data?.data?.[0], quantity);
                          //   setQuantity(1);
                        // }}
                     >
                         <FaCartPlus size={20} />
                         {location}
                     </button>
                 </div>

                 <span className="divider" />
                 <div className="info-item">
                     <span className="text-bold">
                      Category:
                          <span>
                              {grade}
                             
                             
                         </span>
                     </span>
                     <span className="text-bold">
                         Share:
                         <span className="social-icons">
                             <FaFacebookF size={16} />
                             <FaTwitter size={16} />
                             <FaInstagram size={16} />
                             <FaLinkedinIn size={16} />
                             <FaPinterest size={16} />
                         </span>
                     </span>
                 </div>
             </div>
         </div>
         
     </div>
        
        

     </div>
 );
};

export default Singletour;