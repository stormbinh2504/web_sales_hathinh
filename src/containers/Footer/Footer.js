import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { TYPE_USER } from '../../utils';
import "./Footer.scss"


// let phone = 
const Footer = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-widgets-wrap">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 column-1">
                            <div className="">
                                <h4>Công ty TNHH Tân Trường Phát Vina</h4>
                                <p>Nhà cung cấp giá kệ để hàng công nghiệp uy tín nhất Việt Nam với hơn 15 năm kinh nghiệm tư vấn và thi công thực tế</p>
                                <h5>Văn phòng đại diện</h5>
                                <p>Phố Hộ Vệ, Lạc Vệ, Tiên Du, Bắc Ninh</p>
                                <h5>Nhà máy sản xuất</h5>
                                <p>Phố Hộ Vệ, Lạc Vệ, Tiên Du, Bắc Ninh</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 column-2">
                            <div className="widget widget_links">
                                <h4>Thông tin</h4>
                                <ul>

                                    <li><a href="/pages/chinh-sach-bao-hanh"><i className="fa fa-caret-right" aria-hidden="true"></i>
                                        Chính sách bảo hành</a>
                                    </li>

                                    <li><a href="/pages/chinh-sach-bao-mat-thong-tin"><i className="fa fa-caret-right" aria-hidden="true"></i>
                                        Chính sách bảo mật</a></li>

                                    <li><a href="/pages/thanh-toan"><i className="fa fa-caret-right" aria-hidden="true"></i>
                                        Hình thức thanh toán</a></li>

                                    <li><a href="/pages/chinh-sach-van-chuyen-va-giao-nhan"><i className="fa fa-caret-right" aria-hidden="true"></i>
                                        Chính sách vận chuyển và giao nhận</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 column-3">
                            <div className="widget widget_links">
                                <h4>Danh mục</h4>
                                <ul>

                                    <li><a href="/collections/gia-ke-vina"><i className="fa fa-caret-right" aria-hidden="true"></i>Sản phẩm</a></li>

                                    <li><a href="/blogs/du-an-hoan-thanh"><i className="fa fa-caret-right" aria-hidden="true"></i>Dự án hoàn thành</a></li>

                                    <li><a href="/pages/ve-chung-toi"><i className="fa fa-caret-right" aria-hidden="true"></i>Về chúng tôi</a></li>

                                    <li><a href="https://drive.google.com/file/d/1nwUznZ8poREFhz_LWFjEp9P-uIa6Q5NB/view"><i className="fa fa-caret-right" aria-hidden="true"></i>Tải xuống Catalogue</a></li>

                                </ul>
                            </div>

                            <div className="footer-social">
                                <div className="item">
                                    <div className="icon">
                                        <a href="https://www.facebook.com/giakedehang.vn"><img src="//theme.hstatic.net/200000335999/1000709370/14/ft_social_ico_1.png?v=1455" /></a>
                                    </div>
                                    {/* <div className="info">
                                        <a href="https://www.facebook.com/giakedehang.vn"><span className="hide">Theo dõi</span></a>
                                        <a href="https://www.facebook.com/giakedehang.vn"><span className="hide">trên Facebook</span></a>
                                    </div> */}
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <a href="https://zalo.me/0982535391"><img src="//theme.hstatic.net/200000335999/1000709370/14/ft_social_ico_2.png?v=1455" /></a>
                                    </div>
                                    {/* <div className="info">
                                        <a href="https://zalo.me/0982535391" target="_blank"><span className="hide">Nhắn tin</span></a>
                                        <a href="https://zalo.me/0982535391" target="_blank"><span className="hide">Zalo</span></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-flex clearfix contact_prefooter">
                        <div className="col-6 col-md-3 text-center">
                            <a className="icon-line-mail icon-pre-footer">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/lien-he">sales.giakettp@gmail.com</a></h4>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <a className="icon-call icon-pre-footer">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/lien-he">Hotline: 0982 535 391</a></h4>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <a className="icon-user2 icon-pre-footer">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/lien-he">Liên hệ hỗ trợ</a></h4>
                        </div>
                        <div className="col-6 col-md-3 text-center">
                            <a className="icon-dollar icon-pre-footer">
                                <i className="fa fa-usd" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/thanh-toan">Hướng dẫn thanh toán </a></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyrights" className='copyrights'>
                <div className="container clearfix copyright-links">
                    <div className="row">
                        <div className="col12 col-md-6">
                            © Bản quyền thuộc về Tân Trường Phát Vina
                        </div>
                        <div className="col12 col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer