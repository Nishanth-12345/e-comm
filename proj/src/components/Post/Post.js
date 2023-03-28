import React, {useState} from 'react';
import './Post.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Post = () => {

  const navigate = useNavigate();

 const [descTitle, setDescTitle] = useState('');
 const [location, setLocation] = useState('');
 const [grade, setGrade] = useState('');
 const [fees, setFees] = useState('');
 const [description, setDescription] = useState('');
 const [img, setImg] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    
        
         await axios.post("https://641ea48dad55ae01ccad57b2.mockapi.io/crud/data", { 
        e_descTitle : descTitle,
        e_location: location,
        e_grade: grade,
        e_fees: fees,
        e_description: description,
        e_img: img,
        


    }).then(()=>{
      navigate("/tour");
    });
}
 

  return (
   <div class="containers"> 
    <form onSubmit={handleSubmit}>
        <input type="text" id="descTitle" placeholder="your desc" onChange={(e) => setDescTitle(e.target.value)} required></input>
        <input type="text" id="location" placeholder="location" onChange={(e) => setLocation(e.target.value)} required ></input>
        <input type="text" id="grade" placeholder="grade" onChange={(e) => setGrade(e.target.value)} required></input>
        <input type="number" id="fees" placeholder="fees" onChange={(e) => setFees(e.target.value)} required></input>
        <input type="text" id="description" placeholder="description" onChange={(e) => setDescription(e.target.value)} required></input>
        <input type = "url"  placeholder='img url'  onChange={(e) => setImg(e.target.value)} />
        
        <button type="submit"  >Submit</button>
    
        <Link to='/tour' className='tour'>
            <h2>Tours See Here</h2>
        </Link>

        
        </form>
    </div>
  )
}

export default Post;