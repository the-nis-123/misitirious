import { Routes, Route } from 'react-router-dom';
import App from './App';
import GlobalStyles from './global.css';
import RoutesProtector from './RoutesProtector';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';

const AppRoutes = () => {

  return(
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<RoutesProtector />}>
          <Route path='/' element={ <App /> }>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;
