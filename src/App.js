import{Routes, Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Services from './Services';
import { CartProvider } from 'react-use-cart';
import LocateMe from './components/LocateMe';
import OrderReciept from './components/OrderReciept';
import OrderDetails from './components/OrderDetails';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/services/foodId' element={<OrderDetails />}></Route>
        <Route path='services/addcart' element={<Cart />}></Route>
        <Route path='/locateme' element={<LocateMe />}></Route>
        <Route path='/orderreciept' element={<OrderReciept />}></Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
