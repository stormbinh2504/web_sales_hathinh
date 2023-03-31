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
            <div class="container">
                <div class="section-heading text-center">
                    <h2 class="section-title">GIẢI PHÁP CỦA CHÚNG TÔI</h2>
                    <p class="section-desc">Chúng tôi cung cấp giải pháp đơn giản để tăng sức chứa hàng hóa của bạn</p>
                </div>
                <div class="row gutters-0">
                    <div class="col-12">
                        <div class="home-step-content">

                            <div class="home-step-item">
                                <div class="home-step-image">
                                    <img src={home_step_image_1} alt="Tư vấn &amp; Thiết kế" />
                                    <span class="home-step-number">1</span>
                                </div>
                                <div class="home-step-title">Tư vấn &amp; Thiết kế</div>
                                <div class="home-step-desc visible-xs">Tân Trường Phát Vina tiến hành khảo sát thực tế và lắng nghe nhu cầu mong muốn của khách hàng. Sau đó tiến hành đo đạc và lên sơ đồ tổng thể cho dự án</div>
                            </div>

                            <div class="home-step-item">
                                <div class="home-step-image">
                                    <img src={home_step_image_2} alt="Chế tạo" />
                                    <span class="home-step-number">2</span>
                                </div>
                                <div class="home-step-title">Chế tạo</div>
                                <div class="home-step-desc visible-xs">Sau khi khách hàng đồng ý với bản vẽ cuối cùng, Tân Trường Phát Vina sẽ tiến hành chế tạo sản phẩm</div>
                            </div>

                            <div class="home-step-item">
                                <div class="home-step-image">
                                    <img src={home_step_image_3} alt="Giao hàng &amp; Lắp đặt " />
                                    <span class="home-step-number">3</span>
                                </div>
                                <div class="home-step-title">Giao hàng &amp; Lắp đặt </div>
                                <div class="home-step-desc visible-xs">Tân Trường Phát Vina vận chuyển hàng tới địa điểm thi công. Nhân viên kỹ thuật sẽ tiến hành lắp đặt đúng theo bản vẽ, đảm bảo chất lượng và tính an toàn tuyệt đối</div>
                            </div>


                            <div class="home-step-item">
                                <div class="home-step-image">
                                    <img src={home_step_image_4} alt="Bảo hành &amp; Bảo trì " />
                                    <span class="home-step-number">4</span>
                                </div>
                                <div class="home-step-title">Bảo hành &amp; Bảo trì </div>
                                <div class="home-step-desc visible-xs">Chúng tôi cam kết thực hiện nghĩa vụ bảo hành trong vòng tối đa 48h sau khi nhận được yêu cầu của khách hàng</div>
                            </div>


                            <div class="home-step-item">
                                <div class="home-step-image">
                                    <img src={home_step_image_5} alt="Dịch vụ sau bán hàng" />
                                    <span class="home-step-number">5</span>
                                </div>
                                <div class="home-step-title">Dịch vụ sau bán hàng</div>
                                <div class="home-step-desc visible-xs">Chúng tôi cung cấp dịch vụ tháo dỡ, di dời hệ thống kệ chứa hàng theo yêu cầu với tính chuyên nghiệp cao. Đảm bảo tiêu chuẩn và phù hợp với yêu cầu của khách hàng</div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12">
                        <div class="home-step-contact">
                            <h4 class="title">Liên hệ ngay với Mytek</h4>
                            <div class="content">
                                <div class="item">
                                    <div class="icon"><i class="icon-call"></i></div>
                                    <div class="text"><a href="tel:0982535391">GỌI HOTLINE</a></div>
                                </div>
                                <div class="item">
                                    <div class="icon"><i class="icon-line-mail"></i></div>
                                    <div class="text"><a href="mailto:sales@giakedehang.vn">EMAIL</a></div>
                                </div>
                                <div class="item">
                                    <div class="icon"><i class="icon-line-mail"></i></div>
                                    <div class="text"><a href="https://zalo.me/0982535391" target="_blank">ZALO</a></div>
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