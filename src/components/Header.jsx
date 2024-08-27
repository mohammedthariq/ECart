import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../redux/productSlice'



const Header = () => {

    const dispatch=useDispatch()

    const cartArray=useSelector(state=>state.cartSlice);
    const wishlistArray=useSelector(state=>state.wishlistSlice);
    // console.log(cartArray);
    
  return (
    <div>
       <header className="ecart-header">
   <Link to={'/'}>
       <div className="logo">
         <h1>eCart</h1>
       </div>
   </Link>
      <div className="search-bar">
        <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder="Search for products..." />
        <button type="submit">Search</button>
      </div>
      <div className="icons">
       <Link to={'/cart'}>
         <i className="fa-solid  fa-cart-shopping icon-cart"></i>
         <b className=''>{cartArray?cartArray.length:0}</b>
       </Link>


     <Link to={'/wishlist'}>
           <i className="fa-solid fa-heart icon-heart"></i>
         <b className=''>{wishlistArray?wishlistArray.length:0}</b>

     </Link>


      </div>
    </header>
    </div>
  )
}

export default Header
