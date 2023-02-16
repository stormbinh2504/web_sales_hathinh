import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { TYPE_USER } from '../../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss"


// let phone = 
const Footer = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-widgets-wrap">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 column-1">
                            <div class="">
                                <h4>Công ty Cổ phần Công nghiệp MYTEK</h4>
                                <p>Nhà cung cấp giá kệ để hàng công nghiệp uy tín nhất Việt Nam với hơn 15 năm kinh nghiệm tư vấn và thi công thực tế</p>
                                <h5>Văn phòng đại diện</h5>
                                <p>Tầng 5, tòa nhà HT, 28 Xuân La, Tây Hồ, Hà Nội</p>
                                <h5>Nhà máy sản xuất</h5>
                                <p>Đường D2, Khu D, KCN Phố Nối A, xã Lạc Hồng, huyện Văn Lâm, tỉnh Hưng Yên</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 column-2">
                            <div class="widget widget_links">
                                <h4>Thông tin</h4>
                                <ul>

                                    <li><a href="/pages/chinh-sach-bao-hanh"><i class="fa fa-caret-right" aria-hidden="true"></i>
                                        Chính sách bảo hành</a>
                                    </li>

                                    <li><a href="/pages/chinh-sach-bao-mat-thong-tin"><i class="fa fa-caret-right" aria-hidden="true"></i>
                                        Chính sách bảo mật</a></li>

                                    <li><a href="/pages/thanh-toan"><i class="fa fa-caret-right" aria-hidden="true"></i>
                                        Hình thức thanh toán</a></li>

                                    <li><a href="/pages/chinh-sach-van-chuyen-va-giao-nhan"><i class="fa fa-caret-right" aria-hidden="true"></i>
                                        Chính sách vận chuyển và giao nhận</a></li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 column-3">
                            <div class="widget widget_links">
                                <h4>Danh mục</h4>
                                <ul>

                                    <li><a href="/collections/gia-ke-mytek"><i class="fa fa-caret-right" aria-hidden="true"></i>Sản phẩm</a></li>

                                    <li><a href="/blogs/du-an-hoan-thanh"><i class="fa fa-caret-right" aria-hidden="true"></i>Dự án hoàn thành</a></li>

                                    <li><a href="/pages/ve-chung-toi"><i class="fa fa-caret-right" aria-hidden="true"></i>Về chúng tôi</a></li>

                                    <li><a href="https://drive.google.com/file/d/1nwUznZ8poREFhz_LWFjEp9P-uIa6Q5NB/view"><i class="fa fa-caret-right" aria-hidden="true"></i>Tải xuống Catalogue</a></li>

                                </ul>
                            </div>

                            <div class="footer-social">
                                <div class="item">
                                    <div class="icon">
                                        <a href="https://www.facebook.com/giakedehang.vn"><img src="//theme.hstatic.net/200000335999/1000709370/14/ft_social_ico_1.png?v=1455" /></a>
                                    </div>
                                    {/* <div class="info">
                                        <a href="https://www.facebook.com/giakedehang.vn"><span class="hide">Theo dõi</span></a>
                                        <a href="https://www.facebook.com/giakedehang.vn"><span class="hide">trên Facebook</span></a>
                                    </div> */}
                                </div>
                                <div class="item">
                                    <div class="icon">
                                        <a href="https://zalo.me/0903229005"><img src="//theme.hstatic.net/200000335999/1000709370/14/ft_social_ico_2.png?v=1455" /></a>
                                    </div>
                                    {/* <div class="info">
                                        <a href="https://zalo.me/0903229005" target="_blank"><span class="hide">Nhắn tin</span></a>
                                        <a href="https://zalo.me/0903229005" target="_blank"><span class="hide">Zalo</span></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row row-flex clearfix contact_prefooter">
                        <div class="col-6 col-md-3 text-center">
                            <a class="icon-call icon-pre-footer">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/lien-he">Hotline: 0903 229 005</a></h4>
                        </div>
                        <div class="col-6 col-md-3 text-center">
                            <a class="icon-line-mail icon-pre-footer">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/lien-he">sales@giakedehang.vn</a></h4>
                        </div>
                        <div class="col-6 col-md-3 text-center">
                            <a class="icon-user2 icon-pre-footer">
                                <i class="fa fa-user-o" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/lien-he">Liên hệ hỗ trợ</a></h4>
                        </div>
                        <div class="col-6 col-md-3 text-center">
                            <a class="icon-dollar icon-pre-footer">
                                <i class="fa fa-usd" aria-hidden="true"></i>
                            </a>
                            <h4><a href="/pages/thanh-toan">Hướng dẫn thanh toán </a></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyrights" className='copyrights'>
                <div class="container clearfix copyright-links">
                    <div className="row">
                        <div class="col12 col-md-6">
                            © Bản quyền thuộc về MYTEK JSC
                        </div>
                        <div class="col12 col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer