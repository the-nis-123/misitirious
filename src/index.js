
import {StrictMode} from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthContext';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

/** 
 * note we are using HashRouter in order to support relative url navigation on github pages
 * the commonly used Browserrouter will give you a page no found error
 * You can change this back to BrowserRouter when deploy to real production environments
*/

root.render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>
);

reportWebVitals();
