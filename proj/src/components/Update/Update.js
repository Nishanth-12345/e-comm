import React from 'react'
import './Update.css';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Update = () => {
  const [id, setId] = useState(0);
  const [descTitle, setDescTitle] = useState('');
  const [location, setLocation] = useState('');
  const [grade, setGrade] = useState('');
  const [fees, setFees] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
     setId(localStorage.getItem("id"));
     setDescTitle(localStorage.getItem("e_descTitle"));
     setDescription(localStorage.getItem("e_description"));
     setLocation(localStorage.getItem("e_location"));
     setGrade(localStorage.getItem("e_grade"));
     setFees(localStorage.getItem("e_fees"));
     setImg(localStorage.getItem("e_img"));

  },[]);

 const handleEdit = (e) =>{
  e.preventDefault();
  console.log("Id..", id);
    axios.put(`https://641ea48dad55ae01ccad57b2.mockapi.io/crud/data/${id}`,
    {
      e_descTitle : descTitle,
      e_location: location,
      e_grade: grade,
      e_fees: fees,
      e_description: description,
      e_img: img,
      
    }
    ).then(()=>{
      navigate("/tour");
    });
 
  };

    return(
      <div class="containers"> 
      <form onSubmit={handleEdit}>
          <input type="text" id="descTitle" placeholder="your desc" value={descTitle} onChange={(e) => setDescTitle(e.target.value)} required ></input>
          <input type="text" id="location" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} required ></input>
          <input type="text" id="grade" placeholder="grade" value={grade} onChange={(e) => setGrade(e.target.value)} required></input>
          <input type="number" id="fees" placeholder="fees" value={fees} onChange={(e) => setFees(e.target.value)} required></input>
          <input type="text" id="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
          <input type = 'url' placeholder='img' value={img} onChange={(e) => setImg(e.target.value)} />
          
          <button type="submit"  >Submit</button>
      
          <Link to='/tour' className='tour'>
              <h2>Tours See Here</h2>
          </Link>
  
          
          </form>
      </div>
  )
}

export default Update