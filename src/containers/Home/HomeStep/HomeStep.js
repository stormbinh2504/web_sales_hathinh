import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./HomeStep.scss"
import { useEffect } from 'react';
import home_step_image_1 from "../../../assets/images/home_step/home_step_image_1.png"
import home_step_image_2 from "../../../assets/images/home_step/home_step_image_2.png"
import home_step_image_3 from "../../../assets/images/home_step/home_step_image_3.png"
import home_step_image_4 from "../../../assets/images/home_step/home_step_image_4.png"
import home_step_image_5 from "../../../assets/images/home_step/home_step_image_5.png"

const HomeStep = () => {
    return (

        <div id="home-step" className="home-step">
            <div className="container">
                <div className="section-heading text-center">
                    <h2 className="section-title">GIẢI PHÁP CỦA CHÚNG TÔI</h2>
                    <p className="section-desc">Chúng tôi cung cấp giải pháp đơn giản để tăng sức chứa hàng hóa của bạn</p>
                </div>
                <div className="row gutters-0">
                    <div className="col-12">
                        <div className="home-step-content">

                            <div className="home-step-item">
                                <div className="home-step-image">
                                    <img src={home_step_image_1} alt="Tư vấn &amp; Thiết kế" />
                                    <span className="home-step-number">1</span>
                                </div>
                                <div className="home-step-title">Tư vấn &amp; Thiết kế</div>
                                <div className="home-step-desc visible-xs">Tân Trường Phát Vina tiến hành khảo sát thực tế và lắng nghe nhu cầu mong muốn của khách hàng. Sau đó tiến hành đo đạc và lên sơ đồ tổng thể cho dự án</div>
                            </div>

                            <div className="home-step-item">
                                <div className="home-step-image">
                                    <img src={home_step_image_2} alt="Chế tạo" />
                                    <span className="home-step-number">2</span>
                                </div>
                                <div className="home-step-title">Chế tạo</div>
                                <div className="home-step-desc visible-xs">Sau khi khách hàng đồng ý với bản vẽ cuối cùng, Tân Trường Phát Vina sẽ tiến hành chế tạo sản phẩm</div>
                            </div>

                            <div className="home-step-item">
                                <div className="home-step-image">
                                    <img src={home_step_image_3} alt="Giao hàng &amp; Lắp đặt " />
                                    <span className="home-step-number">3</span>
                                </div>
                                <div className="home-step-title">Giao hàng &amp; Lắp đặt </div>
                                <div className="home-step-desc visible-xs">Tân Trường Phát Vina vận chuyển hàng tới địa điểm thi công. Nhân viên kỹ thuật sẽ tiến hành lắp đặt đúng theo bản vẽ, đảm bảo chất lượng và tính an toàn tuyệt đối</div>
                            </div>


                            <div className="home-step-item">
                                <div className="home-step-image">
                                    <img src={home_step_image_4} alt="Bảo hành &amp; Bảo trì " />
                                    <span className="home-step-number">4</span>
                                </div>
                                <div className="home-step-title">Bảo hành &amp; Bảo trì </div>
                                <div className="home-step-desc visible-xs">Chúng tôi cam kết thực hiện nghĩa vụ bảo hành trong vòng tối đa 48h sau khi nhận được yêu cầu của khách hàng</div>
                            </div>


                            <div className="home-step-item">
                                <div className="home-step-image">
                                    <img src={home_step_image_5} alt="Dịch vụ sau bán hàng" />
                                    <span className="home-step-number">5</span>
                                </div>
                                <div className="home-step-title">Dịch vụ sau bán hàng</div>
                                <div className="home-step-desc visible-xs">Chúng tôi cung cấp dịch vụ tháo dỡ, di dời hệ thống kệ chứa hàng theo yêu cầu với tính chuyên nghiệp cao. Đảm bảo tiêu chuẩn và phù hợp với yêu cầu của khách hàng</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="home-step-contact">
                            <h4 className="title">Liên hệ ngay với Tân Trường Phát Vina</h4>
                            <div className="content">
                                <div className="item">
                                    <div className="icon"><i className="icon-call"></i></div>
                                    <div className="text"><a href="tel:0982535391">GỌI HOTLINE</a></div>
                                </div>
                                <div className="item">
                                    <div className="icon"><i className="icon-line-mail"></i></div>
                                    <div className="text"><a href="mailto:sales.giakettp@gmail.com">EMAIL</a></div>
                                </div>
                                <div className="item">
                                    <div className="icon"><i className="icon-line-mail"></i></div>
                                    <div className="text"><a href="https://zalo.me/0982535391" target="_blank">ZALO</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStep