import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from '../../redux/actions'
import * as actions from '../../redux/actions'
import { PATH_NAME, setPathName } from '../../utils';
import "./Header.scss"
import logo from "../../assets/images/company/logo.png"


// let phone = 
const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const { auth, app } = state
    const { menuActive } = app

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

    return (
        <div className='header'>
            <div id="container-header" className="container container-header">
                <div className="row gutters-0 w-100">
                    <div className="col-12 col-ms-6 col-lg-3 navbar-logo item-center">
                        <div onClick={onRedirectHome}>
                            <img className="img-logo" src={logo} />
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
                                        THỜI GIAN LÀM VIỆC
                                        <div className="info-content">
                                            Thứ 2 - Thứ 7, 8h30 - 17h30
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
                            <li className={"nav-menu-item " + (menuActive === PATH_NAME.HOME ? "active" : "")}>
                                <a onClick={() => dispatch(setMenuActive(PATH_NAME.HOME))}>Trang chủ</a>
                            </li>
                            <li className={"nav-menu-item nav-menu-submenu " + (menuActive === PATH_NAME.COLLECTIONS ? "active" : "")} >
                                <a onClick={() => dispatch(setMenuActive(PATH_NAME.COLLECTIONS))} className="nav-menu-link" >Sản phẩm</a>
                                <ul className="sub-menu" >
                                    <li className="sub-menu-item">
                                        <a href="#">
                                            <div className="sub-menu-item-text" >Kệ để hàng nặng</div>
                                            <div className="sub-menu-item-icon">
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2">
                                            <li className="sub-menu-item-lv2"> <a href="/products/ke-drive-in"><div className="sub-menu-item-lv2-text" >Kệ Drive-in</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-selective"><div className="sub-menu-item-lv2-text">Kệ Selective</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-double-deep"><div className="sub-menu-item-lv2-text">Kệ Double Deep</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-narrow-aisle"><div className="sub-menu-item-lv2-text">Kệ Narrow Aisle</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-pallet-di-dong"><div className="sub-menu-item-lv2-text">Kệ Pallet di động</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-con-lan-pallet-flow-rack"><div className="sub-menu-item-lv2-text">Kệ con lăn</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-push-back"><div className="sub-menu-item-lv2-text">Kệ Push back</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-tay-do"><div className="sub-menu-item-lv2-text">Kệ tay đỡ</div></a></li>
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-de-khuon-mould-rack"><div className="sub-menu-item-lv2-text">Kệ để khuôn</div></a></li>
                                        </ul>
                                    </li>

                                    <li className="sub-menu-item">
                                        <a href="#">
                                            <div className="sub-menu-item-text" >Kệ để hàng trung tải</div>
                                            <div className="sub-menu-item-icon">
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2" >
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-trung-tai"><div className="sub-menu-item-lv2-text" >Kệ trung tải</div></a></li>

                                            <li className="sub-menu-item-lv2"><a href="/products/ke-con-lan-trung-tai"><div className="sub-menu-item-lv2-text" >Kệ con lăn trung tải</div></a></li>

                                        </ul>
                                    </li>

                                    <li className="sub-menu-item">
                                        <a href="#">
                                            <div className="sub-menu-item-text" >Kệ để hàng nhẹ </div>
                                            <div className="sub-menu-item-icon">
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <ul className="sub-menu-lv2">
                                            <li className="sub-menu-item-lv2"><a href="/products/ke-v-lo"><div className="sub-menu-item-lv2-text">Kệ V lỗ</div></a></li>

                                            <li className="sub-menu-item-lv2"><a href="/products/ke-v-hoa"><div className="sub-menu-item-lv2-text">Kệ V hoa</div></a></li>
                                        </ul>
                                    </li>


                                    <li className="sub-menu-item"><a href="/products/ke-san-mezzanine"><div className="sub-menu-item-text" >Kệ sàn Mezzanine</div></a></li>



                                    <li className="sub-menu-item"><a href="/products/ke-xep-chong"><div className="sub-menu-item-text" >Kệ xếp chồng</div></a></li>



                                    <li className="sub-menu-item"><a href="/products/ke-de-hang-ban-tu-dong"><div className="sub-menu-item-text" >Kệ để hàng tự động</div></a></li>



                                    <li className="sub-menu-item"><a href="/products/ke-sieu-thi"><div className="sub-menu-item-text" >Kệ siêu thị</div></a></li>




                                </ul>
                            </li>
                            <li className={"nav-menu-item " + (menuActive === PATH_NAME.BLOGS ? "active" : "")}>
                                <a onClick={() => dispatch(setMenuActive(PATH_NAME.BLOGS))}>Dự án hoàn thành</a>
                            </li>
                            <li className={"nav-menu-item " + (menuActive === PATH_NAME.ABOUT_OUR ? "active" : "")}>
                                <a onClick={() => dispatch(setMenuActive(PATH_NAME.ABOUT_OUR))}>Về chúng tôi</a>
                            </li>
                            <li className={"nav-menu-item " + (menuActive === PATH_NAME.CONTACT ? "active" : "")}>
                                <a onClick={() => dispatch(setMenuActive(PATH_NAME.CONTACT))}>Liên hệ</a>
                            </li>
                            <li className={"nav-menu-item "}><a href="https://drive.google.com/file/d/1nwUznZ8poREFhz_LWFjEp9P-uIa6Q5NB/view?usp=sharing" target="_blank">Tải xuống Catalogue</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header