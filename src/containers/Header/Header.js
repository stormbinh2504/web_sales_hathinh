import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from '../../redux/actions'
import * as actions from '../../redux/actions'
import { PATH_NAME, setPathName } from '../../utils';
import "./Header.scss"
import logo from "../../assets/images/company/logo.png"
import MenuSidebar from '../MenuSidebar/MenuSidebar';


// let phone = 
const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app } = state
    const { menuActive } = app

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const onRedirectHome = () => {
        history.push("/");
    }

    const onScrollStickyHeader = () => {
        let containerHeader = document.getElementById("container-header");
        let headerWarp = document.getElementById("header-wrap");
        let sticky = containerHeader.offsetTop;
        console.log("binh_check_scroll", window.pageYOffset, sticky)
        if (window.pageYOffset > sticky) {
            headerWarp.classList.add("sticky-header")
        } else {
            headerWarp.classList.remove("sticky-header");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrollStickyHeader);

        return () => {
            window.removeEventListener("scroll", onScrollStickyHeader);
        };
    }, []);

    const onRedirectByPathname = (path) => {
        history.push(path);
    }

    const checkActiveMenu = (key) => {
        let pathnameCurent = window.location.pathname
        if (pathnameCurent === key) {
            return true
        }
        return false
    }

    return (
        <div className='header'>
            {isOpenMenu && <MenuSidebar
                setIsOpenMenu={setIsOpenMenu}
            />}
            <div id="container-header" className="container container-header">
                <div className="row gutters-0 w-100">
                    <div className="col-12 col-ms-6 col-lg-3 navbar-logo item-center">
                        <div className='div-img-logo' onClick={onRedirectHome}>
                            <img className="img-logo" src={logo} />
                        </div>
                        <div className="header-icon-bars" href='' onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="header-extras col-12 col-ms-6 col-lg-9 ">
                        <div className="row w-100 gutters-0 h-100">
                            <div className="extra-item col-4" data-id="5fcb72ee" data-element_type="column">
                                <div className="extra-wrap">
                                    <div className="extra-item-icon item-center">
                                        <a href="tel:0903 229 005"><i className="fa fa-phone" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="extra-item-content">
                                        Hotline
                                        <div className="info-content">
                                            <a href="tel:0903 229 005">0903 229 005</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="extra-item col-4 " data-id="5fcb72ee" data-element_type="column">
                                <div className="extra-wrap extra-email">
                                    <div className="extra-item-icon item-center">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="extra-item-content">
                                        EMAIL
                                        <div className="info-content">
                                            sales@giakedehang.vn
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="extra-item col-4 " data-id="5fcb72ee" data-element_type="column">
                                <div className="extra-wrap extra-time">
                                    <div className="extra-item-icon item-center">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="extra-item-content">
                                        TH???I GIAN L??M VI???C
                                        <div className="info-content">
                                            Th??? 2 - Th??? 7, 8h30 - 17h30
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="header-wrap" className="header-wrap">
                <div id="primary-menu" className="menu style-2 center">
                    <div className="container clearfix">
                        <ul className="nav-menu" >
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.HOME) ? "active" : "")}>
                                <a href='' onClick={() => onRedirectByPathname(PATH_NAME.HOME)}>Trang ch???</a>
                            </li>
                            <li className={"nav-menu-item nav-menu-submenu " + (checkActiveMenu(PATH_NAME.COLLECTIONS) ? "active" : "")} >
                                <a href='' onClick={() => onRedirectByPathname(PATH_NAME.COLLECTIONS)} className="nav-menu-link" >S???n ph???m</a>
                                <ul className="sub-menu" >
                                    <li className="sub-menu-item">
                                        <a href="#">
                                            <div className="sub-menu-item-text" >K??? ????? h??ng n???ng</div>
                                            <div className="sub-menu-item-icon">
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2">
                                            <li className="sub-menu-item-lv2"> <a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_DRIVER_IN)}><div className="sub-menu-item-lv2-text" >K??? Drive-in</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_SELECTIVE)}><div className="sub-menu-item-lv2-text">K??? Selective</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_DOUBLE_DEEP)}><div className="sub-menu-item-lv2-text">K??? Double Deep</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_NARROW_AISLE)}><div className="sub-menu-item-lv2-text">K??? Narrow Aisle</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_PALLET_DI_DONG)}><div className="sub-menu-item-lv2-text">K??? Pallet di ?????ng</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK)}><div className="sub-menu-item-lv2-text">K??? con l??n</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_PUSH_BACK)}><div className="sub-menu-item-lv2-text">K??? Push back</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_TAY_DO)}><div className="sub-menu-item-lv2-text">K??? tay ?????</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_DE_KHUON_MOULD_RACK)}><div className="sub-menu-item-lv2-text">K??? ????? khu??n</div></a></li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu-item">
                                        <a href="#">
                                            <div className="sub-menu-item-text" >K??? ????? h??ng trung t???i</div>
                                            <div className="sub-menu-item-icon">
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2" >
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_TRUNG_TAI)}><div className="sub-menu-item-lv2-text" >K??? trung t???i</div></a></li>

                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_CON_LAN_TRUNG_TAI)}><div className="sub-menu-item-lv2-text" >K??? con l??n trung t???i</div></a></li>

                                        </ul>
                                    </li>

                                    <li className="sub-menu-item">
                                        <a href="#">
                                            <div className="sub-menu-item-text" >K??? ????? h??ng nh??? </div>
                                            <div className="sub-menu-item-icon">
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2">
                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_V_LO)}><div className="sub-menu-item-lv2-text">K??? V l???</div></a></li>

                                            <li className="sub-menu-item-lv2"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_V_HOA)}><div className="sub-menu-item-lv2-text">K??? V hoa</div></a></li>
                                        </ul>
                                    </li>


                                    <li className="sub-menu-item"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_SAN_MEZZANINE)}><div className="sub-menu-item-text" >K??? s??n Mezzanine</div></a></li>



                                    <li className="sub-menu-item"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_XEP_CHONG)}><div className="sub-menu-item-text" >K??? x???p ch???ng</div></a></li>



                                    <li className="sub-menu-item"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_DE_HANG_BAN_TU_DONG)}><div className="sub-menu-item-text" >K??? ????? h??ng t??? ?????ng</div></a></li>



                                    <li className="sub-menu-item"><a href='' onClick={() => onRedirectByPathname(PATH_NAME.KE_SIEU_THI)}><div className="sub-menu-item-text" >K??? si??u th???</div></a></li>




                                </ul>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.BLOGS) ? "active" : "")}>
                                <a href='' onClick={() => onRedirectByPathname(PATH_NAME.BLOGS)}>D??? ??n ho??n th??nh</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.ABOUT_OUR) ? "active" : "")}>
                                <a href='' onClick={() => onRedirectByPathname(PATH_NAME.ABOUT_OUR)}>V??? ch??ng t??i</a>
                            </li>
                            <li className={"nav-menu-item " + (checkActiveMenu(PATH_NAME.CONTACT) ? "active" : "")}>
                                <a href='' onClick={() => onRedirectByPathname(PATH_NAME.CONTACT)}>Li??n h???</a>
                            </li>
                            <li className={"nav-menu-item "}><a href="https://drive.google.com/file/d/1nwUznZ8poREFhz_LWFjEp9P-uIa6Q5NB/view?usp=sharing" target="_blank">T???i xu???ng Catalogue</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Header