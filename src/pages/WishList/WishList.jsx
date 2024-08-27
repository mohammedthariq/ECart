import { useDispatch, useSelector } from "react-redux";
import   { removeFromWishlist } from "../../redux/wishlistSlice";
import { addToCart } from "../../redux/cartSlice";
import './WishList.css'

const WishList = () => {
    const dispatch = useDispatch();
    const wishlistArray = useSelector((state) => state.wishlistSlice);

    const handleAddCart=(item)=>{
      dispatch(addToCart(item));
      dispatch(removeFromWishlist(item?.id));
    }

    if(wishlistArray.length>0){
       var total =  wishlistArray.map(i=>i.price).reduce((a,b)=>a+b);
    }

    return (

        <div>
            {wishlistArray?.length > 0 ? (
              <div>
                  <table className="table">
                      <thead>
                          <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Image</th>
                              <th scope="col">Description</th>
                              <th scope="col">Rating</th>
                              <th scope="col">Count</th>
                          </tr>
                      </thead>
                      <tbody>
                          {wishlistArray.map((item,index) => (
                              <tr key={index}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{item?.title}</td>
                                  <td>{item?.price}</td>
                                  <td className="text-center p-3">
                                      <img className="w-25" src={item?.image} alt=""/>
                                  </td>
                                  <td>{item?.description}</td>
                                  <td>{item?.rating.rate}</td>
                                  <td>{item?.rating.count}</td>
                                  <td>
                                      <div className="btn" onClick={() => dispatch(removeFromWishlist(item?.id))}>
                                          <i className="fa-solid fa-trash"></i>
                                      </div>
                                      <div className="btn" onClick={()=>handleAddCart(item)}>
                                      <i  className="fa-solid fa-cart-shopping"></i>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>

                  <div className="total">
                    <h3>Total : {total} $</h3>
                    <button  className="btn btn-success">Checkout</button>
                  </div>
              </div>

            ) : (
                  <h4 className="text-danger">wishlist is empty</h4>       
             )}
        </div>
    );
};

export default WishList;
