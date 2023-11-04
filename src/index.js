import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import './style_reset.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './footer/footer';
import Header from './header/header';
import ScrollToTop from './scroll_to_top';
import Authorization from './authorization/authorization';
import Registration from './registration/registration';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAuth } from './hooks/use-auth';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to='/registration' />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/authorization' element={<Authorization />} />
          <Route path='/registration' element={<Registration />} />
          <Route
            path='/posts/:id'
            element={<PrivateRoute children={<PostPage />} />}
          />
          <Route
            path='/home'
            element={<PrivateRoute children={<HomePage />} />}
          />
          <Route path='*' element={<Navigate to='/registration' replace />} />
        </Routes>
        <Footer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
