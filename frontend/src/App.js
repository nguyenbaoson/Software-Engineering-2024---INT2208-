
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import laptop_banner from './Components/Assets/Laptop_banner.png'
import phone_banner from './Components/Assets/banner1.png'
import watch_banner from './Components/Assets/Watch_banner.png'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder'
import MyOrders from './Pages/MyOrders';
import Verify from './Pages/Verify';

function App() {
  return (
    <div>
      <BrowserRouter>      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/phones' element={<ShopCategory banner={phone_banner} category="Phone"/>}/>
        <Route path='/laptops' element={<ShopCategory banner={laptop_banner} category="Laptop"/>}/>
        <Route path='/watches' element={<ShopCategory banner={watch_banner} category="Watch"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/delivery' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
