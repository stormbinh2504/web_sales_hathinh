import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Home.scss"
import { AnimateCounterNumber } from '../../utils';
import { useEffect } from 'react';
import HomeStep from './HomeStep/HomeStep';
import HomeBanner from './HomeBanner/HomeBanner';
import OurCustomer from './OurCustomer/OurCustomer';

const src1 = "//theme.hstatic.net/200000335999/1000709370/14/slideshow_1.jpg?v=1455"
const src2 = "//theme.hstatic.net/200000335999/1000709370/14/slideshow_2.jpg?v=1455"
const src3 = "//theme.hstatic.net/200000335999/1000709370/14/slideshow_2.jpg?v=1455"
const Home = () => {

    const reveal = () => {
        let reveals = document.getElementById('home-counter');
        var windowHeight = window.innerHeight;
        var elementTop = reveals.getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            LoadAnimateCounterNumber()
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", reveal);

        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []);

    const LoadAnimateCounterNumber = () => {
        let text1 = document.getElementById('counter-number1');
        let text2 = document.getElementById('counter-number2');
        let text3 = document.getElementById('counter-number3');
        let text4 = document.getElementById('counter-number4');
        AnimateCounterNumber(text1, 0, 15, 3000);
        AnimateCounterNumber(text2, 0, 100, 3000);
        AnimateCounterNumber(text3, 0, 8500, 3000);
        AnimateCounterNumber(text4, 0, 100, 3000);
        window.removeEventListener("scroll", reveal);
    }

    return (
        <div className='container-home'>
            <div className="slider">
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop={true}
                    autoplay={true}
                    nav={true}
                    autoHeight={true}
                    navText={[
                        '<span class="arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
                        '<span class="arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'
                    ]}
                // margin={8}
                >
                    <div ><img className="img" src={src1} /></div>
                    <div><img className="img" src={src2} /></div>
                    <div><img className="img" src={src3} /></div>
                </OwlCarousel>
            </div>
            <section id="content-home" className="content-home">
                <div className="content-wrap">
                    <div id="home-counter" className="home-counter">
                        <div class="container">
                            <div className="row">
                                <div class="section-heading">
                                    <h2 class="section-title">
                                        <span>C??NG TY C??? PH???N C??NG NGHI???P MYTEK</span>
                                    </h2>
                                    <div class="desc">C??ng ty C??? ph???n C??ng nghi???p MYTEK k??? t??? ng??y th??nh l???p ?????n nay ???? kh??ng ng???ng ph??t tri???n v?? tr??? th??nh m???t C??ng ty h??ng ?????u chuy??n v??? thi???t k??? v?? s???n xu???t k??? ch???a h??ng ph???c v??? m???i ?????i t?????ng kh??ch h??ng trong n?????c c??ng nh?? xu???t kh???u. V???i th??? m???nh l?? kinh nghi???m l??u n??m c??ng v???i ?????i ng?? c??n b??? k??? thu???t ???????c ????o t???o ch??nh qui, c??ng nh??n tay ngh??? cao v?? d??y chuy???n kh??p k??n, ch??ng t??i c?? kh??? n??ng t?? v???n, thi???t k??? v?? trang b??? h??? th???ng k??? ch???a h??ng cho qu?? kh??ch v???i hi???u qu??? cao nh???t v?? chi ph?? h???p l?? nh???t.</div>
                                </div>
                                <div class="row w-100">
                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number1" data-count="15">0</span> <span>N??m +</span>
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                Kinh nghi???m th???c t???
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number2" data-count="100">0</span> +
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                C??n b??? c??ng nh??n vi??n
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number3" data-count="8500">0</span> +
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                D??? ??n ho??n th??nh
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-6 col-md-6 col-lg-3">
                                        <div class="home-counter-item">
                                            <div class="home-counter-number">
                                                <span id="counter-number4">0</span> %
                                            </div>
                                            <div class="home-counter-border"></div>
                                            <div class="home-counter-text">
                                                Kh??ch h??ng h??i l??ng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomeStep />
                    <HomeBanner />
                    <OurCustomer />
                </div>
            </section>
        </div>
    )
}

export default Home