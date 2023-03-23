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
import prod from '../../assets/pexels-polina-chistyakova-2821728.jpg';
const Singletour = () => {
 //   const [quantity, setQuantity] = useState(1);
 //   const { id } = useParams();
 //   const { handleAddToCart } = useContext(Context);
 //   const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

 //   const decrement = () => {
  //      setQuantity((prevState) => {
   //         if (prevState === 1) return 1;
    //        return prevState - 1;
     //   });
  //  };
    //const increment = () => {
    //    setQuantity((prevState) => prevState + 1);
   // };

   // if (!data) return;
    //const product = data?.data?.[0]?.attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={ prod
                              //  process.env.REACT_APP_STRIPE_APP_DEV_URL +
                              //  product.image.data[0].attributes.url
                            } alt= "img"

                        />
                    </div>
                    <div className="right">
                        <span className="name">America</span>
                        <span className="price">787</span>
                        <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta quidem consequuntur obcaecati maxime natus nemo assumenda labore nulla eaque sint eos error alias, sit pariatur perspiciatis fuga explicabo id?</span>

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
                                ADD PACKAGE
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>
                                    Tours
                                    
                                    
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