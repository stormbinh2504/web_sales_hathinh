import React, { useEffect } from 'react'

import logo from './logo.svg';
import './App.scss';
import "../src/styles/styles.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import $ from 'jquery';
import { ConnectedRouter as Router } from 'connected-react-router';

import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import PrivateRouter from './containers/customRouter/PrivateRouter';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Routes from './routes/Routes';
import Home from './containers/Home/Home';
import { TYPE_USER } from './utils';
import Footer from './containers/Footer/Footer';
import ProductCollections from './containers/ProductCollections/ProductCollections';
import { PATH_NAME } from './utils/constants';
import { history } from './redux/store'
import ProductKeDriverIn from './containers/ProductCollections/ProductKeDriverIn/ProductKeDriverIn';
import Contact from './containers/Contact/Contact';
import ToolPhoneZaloChat from './containers/Common/ToolPhoneZaloChat/ToolPhoneZaloChat';

if (typeof window !== "undefined") {
  injectStyle();
}
let pathName = window.location.pathname
function App() {
  const state = useSelector((state) => state);
  const { auth, app } = state

  const scrollTopAnimated = () => {
    $('#scrollToTop').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 1200);
    })
  }

  useEffect(() => {
    scrollTopAnimated()
  }, []);

  return (

    <div className="App">
      <Router history={history}>
        < Header />
        <Switch>
          <div className="main">
            < div id="container-page-content" className="container-page-content ">
              <Route exact path={PATH_NAME.HOME} component={Home} />
              <Route exact path={PATH_NAME.COLLECTIONS} component={ProductCollections} />

              <Route exact path={PATH_NAME.CONTACT} component={Contact} />


              <Route exact path={PATH_NAME.KE_DRIVER_IN} component={ProductKeDriverIn} />

            </div>
            <ToolPhoneZaloChat />
            <div id="scrollToTop" className='item-center'>
              <i class="fa fa-angle-double-up" aria-hidden="true">
              </i>
            </div>
          </div>
        </Switch>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
