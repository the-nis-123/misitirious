import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Modal from './components/Modal';
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {
  const {modalState, login, signup} = useSelector(state => state.authModal);

  return (
    <>
      <Header />
      <Outlet />

      <If condition={ modalState && login }>
        <Modal title='LogIn'>
          <Login />
        </Modal>
      </If>

      <If condition={ modalState &&  signup }>
        <Modal title='SignUp'>
          <SignUp />
        </Modal>
      </If>
    </>
  );
}

export default App;

