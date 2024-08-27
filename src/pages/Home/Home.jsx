// src/pages/Home.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { toggleContent } from '../../assets/js/main'; 

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { addToWishlist } from '../../redux/wishlistSlice';
import { fetchProducts } from '../../redux/productSlice';


const Home = () => {

    const dispatch=useDispatch()

    const {loading,allProducts,error}= useSelector(state=>state.productSlice)
  

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const handleToggleClick = (event) => {
        toggleContent(event.target);
    };

    return (
        <div className='container'> 
            <div className="row">
                <div className="col-md-12">
                    <div className='row'>
                        {allProducts?.length > 0 && (
                            allProducts.map((i) => (
                                <div className="card p-3 m-3" style={{ width: "18rem" }} key={i.id}>
                                    <img src={i.image} className="card-img-top pb-4" alt={i.title} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{i.title}</h5>
                                        <p className="card-text">
                                            <span className="content-summary">
                                                {i.description.length > 100 ? i.description.slice(0, 100) + '...' : i.description}
                                            </span>
                                            <span className="content-full" style={{ display: 'none' }}>
                                                {i.description}
                                            </span>
                                        </p>
                                        <button className="btn  read-more-btn btn-primary" onClick={handleToggleClick}>Read More</button>
                                        <div className="cart-icons mt-3 ">
                                          
                                            <div className='btn' onClick={()=>dispatch(addToCart(i))}> 
                                                 <i  className="fa-solid fa-cart-shopping "></i>
                                            </div>
                                          
                                          <div className='btn' onClick={()=>dispatch(addToWishlist(i))} >
                                             
                                                  <i className="fa-solid fa-heart  "></i>
                                             
                                          </div>
                                        </div>
                                    </div>
                                    <hr className="divider" />
                                </div>
                            ))
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
