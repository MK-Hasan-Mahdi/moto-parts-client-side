import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ProductPurchase from './Pages/Home/ProductPurchase';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import NotFound from './Pages/Shared/NotFound';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path='/product/:productId' element={
          <PrivateRoute>
            <ProductPurchase></ProductPurchase>
          </PrivateRoute>
        }></Route>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
