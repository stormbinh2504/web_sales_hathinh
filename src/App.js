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
import ProductKeSelective from './containers/ProductCollections/ProductKeSelective/ProductKeSelective';
import ProductDoubleDeep from './containers/ProductCollections/ProductDoubleDeep/ProductDoubleDeep';
import ProductNarrowAisle from './containers/ProductCollections/ProductNarrowAisle/ProductNarrowAisle';
import ProductKePalletDiDong from './containers/ProductCollections/ProductKePalletDiDong/ProductKePalletDiDong';
import ProductKeConLanPalletFlowRack from './containers/ProductCollections/ProductKeConLanPalletFlowRack/ProductKeConLanPalletFlowRack';
import ProductKePushBack from './containers/ProductCollections/ProductKePushBack/ProductKePushBack';
import ProductKeTayDo from './containers/ProductCollections/ProductKeTayDo/ProductKeTayDo';
import ProductKeDeKhuonMouldRack from './containers/ProductCollections/ProductKeDeKhuonMouldRack/ProductKeDeKhuonMouldRack';
import ProductKeTrungTai from './containers/ProductCollections/ProductKeTrungTai/ProductKeTrungTai';
import ProductKeConLanTrungTai from './containers/ProductCollections/ProductKeConLanTrungTai/ProductKeConLanTrungTai';
import ProductKeVLo from './containers/ProductCollections/ProductKeVLo/ProductKeVLo';
import ProductKeVHoa from './containers/ProductCollections/ProductKeVHoa/ProductKeVHoa';
import ProductKeSanMezzanine from './containers/ProductCollections/ProductKeSanMezzanine/ProductKeSanMezzanine';
import ProductKeXepChong from './containers/ProductCollections/ProductKeXepChong/ProductKeXepChong';
import ProductKeDeBanHangTuDong from './containers/ProductCollections/ProductKeDeBanHangTuDong/ProductKeDeBanHangTuDong';
import ProductKeSieuthi from './containers/ProductCollections/ProductKeSieuthi/ProductKeSieuthi';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
        <ScrollToTop />
        < Header />
        <Switch>
          <div className="main">
            < div id="container-page-content" className="container-page-content ">
              <Route exact path={PATH_NAME.HOME} component={Home} />
              <Route exact path={PATH_NAME.COLLECTIONS} component={ProductCollections} />

              <Route exact path={PATH_NAME.CONTACT} component={Contact} />


              <Route exact path={PATH_NAME.KE_DRIVER_IN} component={ProductKeDriverIn} />
              <Route exact path={PATH_NAME.KE_SELECTIVE} component={ProductKeSelective} />
              <Route exact path={PATH_NAME.KE_DOUBLE_DEEP} component={ProductDoubleDeep} />
              <Route exact path={PATH_NAME.KE_NARROW_AISLE} component={ProductNarrowAisle} />
              <Route exact path={PATH_NAME.KE_PALLET_DI_DONG} component={ProductKePalletDiDong} />
              <Route exact path={PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK} component={ProductKeConLanPalletFlowRack} />
              <Route exact path={PATH_NAME.KE_PUSH_BACK} component={ProductKePushBack} />
              <Route exact path={PATH_NAME.KE_TAY_DO} component={ProductKeTayDo} />
              <Route exact path={PATH_NAME.KE_DE_KHUON_MOULD_RACK} component={ProductKeDeKhuonMouldRack} />
              <Route exact path={PATH_NAME.KE_TRUNG_TAI} component={ProductKeTrungTai} />
              <Route exact path={PATH_NAME.KE_CON_LAN_TRUNG_TAI} component={ProductKeConLanTrungTai} />
              <Route exact path={PATH_NAME.KE_V_LO} component={ProductKeVLo} />
              <Route exact path={PATH_NAME.KE_V_HOA} component={ProductKeVHoa} />
              <Route exact path={PATH_NAME.KE_SAN_MEZZANINE} component={ProductKeSanMezzanine} />
              <Route exact path={PATH_NAME.KE_XEP_CHONG} component={ProductKeXepChong} />
              <Route exact path={PATH_NAME.KE_DE_HANG_BAN_TU_DONG} component={ProductKeDeBanHangTuDong} />
              <Route exact path={PATH_NAME.KE_SIEU_THI} component={ProductKeSieuthi} />

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
