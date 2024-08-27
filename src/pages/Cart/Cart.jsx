import { useDispatch, useSelector } from "react-redux";
import { cartClear, removeCart } from "../../redux/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const cartArray = useSelector((state) => state.cartSlice);

    if(cartArray.length>0){
       var total =  cartArray.map(i=>i.price).reduce((a,b)=>a+b);
    }

    return (



        <div>
            {cartArray?.length > 0 ? (
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
                          {cartArray.map((item, index) => (
                              <tr key={index}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{item?.title}</td>
                                  <td>{item?.price}</td>
                                  <td className="text-center p-3">
                                      <img className="w-25" src={item?.image} alt="" />
                                  </td>
                                  <td>{item?.description}</td>
                                  <td>{item?.rating.rate}</td>
                                  <td>{item?.rating.count}</td>
                                  <td>
                                      <div className="btn" onClick={() => dispatch(removeCart(item?.id))}>
                                          <i className="fa-solid fa-trash"></i>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>

                  <div className="total">
                    <h3>Total : {total} $</h3>
                    <button onClick={()=>dispatch(cartClear(item))} className="btn btn-success">Checkout</button>
                  </div>
              </div>

                
            ) : (
                <h1>Cart is empty</h1>
            )}
        </div>
    );
};

export default Cart;
