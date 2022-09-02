import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import NavMenu from '../src/components/layout/NavMenu';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import Alerts from './components/layout/Alerts';

import ContactState from '../src/context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

function Router() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          
            <Fragment>
              <NavMenu />
              <div>
              <Alerts />
              <Routes>
                <Route path='/' element={<PrivateRoute component={Home} />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
              </div>
            </Fragment>
         
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default Router;
