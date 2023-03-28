import React , {useState} from "react";
import './Navbar.scss';
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

    const [active, setActive] = useState('navBar')

    const showNav= () => {
        setActive('navBar actionNavbar')
    }
    const removeNav = () => {
        setActive('navBar')
    }


    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/> TRAVEL.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists grid">
                       
                        <li className="navItem">
                          <Link to='/' className="navLink">
                            Home
                          </Link>
                        </li>
                        <li className="navItem">
                          <Link to='/tour' className="navLink">
                            Tours
                          </Link>
                        </li>
                        
                        <li className="navItem">
                            <a href="#" className="navLink">shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">news</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">Book now</a>
                        </button>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className='toggleNavbar'>
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>

    )
}

export default Navbar;