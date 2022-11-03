import { Routes, Route } from 'react-router-dom';
import App from './App';
import GlobalStyles from './global.css';
import RoutesProtector from './RoutesProtector';
import Home from './pages/home';
import Store from './pages/products';
import Cart from './pages/cart';
import ProductDetails from './pages/products/ProductDetails';
import NotFound from './pages/404';

const AppRoutes = () => {

  return(
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<RoutesProtector />}>
          <Route path='/' element={ <App /> }>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;
