import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cart from './pages/Cart/Cart';
import WishList from './pages/WishList/WishList';

function App() {

  return (
    <>
      <div>
        <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route> 
        <Route path='/wishlist' element={<WishList/>}></Route> 
      </Routes>
      </div>
    
    </>
  )
}

export default App
