import { Routes, Route } from 'react-router-dom';
import App from './App';
import GlobalStyles from './global.css';
import RoutesProtector from './RoutesProtector';
import Home from './pages/Home';
import Store from './pages/ProductsStore';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetailsPage';

const AppRoutes = () => {

  return(
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<RoutesProtector />}>
          <Route path='/' element={ <App /> }>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;
