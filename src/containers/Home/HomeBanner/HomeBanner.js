import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./HomeBanner.scss"
import { useEffect } from 'react';
import home_banner_img_1 from "../../../assets/images/home_banner/home_banner_img_1.png"
import home_banner_img_2 from "../../../assets/images/home_banner/home_banner_img_2.png"
import home_banner_img_3 from "../../../assets/images/home_banner/home_banner_img_3.png"
import home_banner_img_4 from "../../../assets/images/home_banner/home_banner_img_4.png"
import home_banner_img_5 from "../../../assets/images/home_banner/home_banner_img_5.png"
import home_banner_img_6 from "../../../assets/images/home_banner/home_banner_img_6.png"


const listFeatureBox = [
    {
        id: "1",
        title: "KỆ DRIVE IN",
        link: "/products/ke-drive-in",
        image: home_banner_img_1,
        subtitle: ["Giải pháp đầu tư chi phí thấp", "Sức chứa hàng hóa lớn", "Phù hợp với mọi ngành hàng"]
    },
    {
        id: "2",
        title: "KỆ SELECTIVE",
        link: "/products/ke-selective",
        image: home_banner_img_2,
        subtitle: ["Phù hợp với tất cả các loại Pallet hàng", "Ứng dụng độ cao tới 11m", "Phù hợp hầu hết các loại xe nâng hàng"]
    },
    {
        id: "3",
        title: "KỆ SÀN MEZZANINE",
        link: "/products/ke-san-mezzanine",
        image: home_banner_img_3,
        subtitle: ["Giúp tận dụng tối đa không gian nhà kho", "Ứng dụng vừa làm văn phòng làm việc, vừa làm kho chứa hàng", "Tải trọng vượt trội, kết cấu cực kỳ vững chãi"]
    },
    {
        id: "4",
        title: "KỆ TAY ĐỠ",
        link: "/products/ke-tay-do",
        image: home_banner_img_4,
        subtitle: ["Phù hợp để các hàng hóa dài: gỗ, ống thép, máy móc", "Độ dài thiết kế theo ý muốn", "Có thể thiết kế một hoặc hai bên"]
    },
    {
        id: "5",
        title: "KỆ TRUNG TẢI",
        link: "/products/ke-trung-tai",
        image: home_banner_img_5,
        subtitle: ["Hệ thống kho chứa hàng cực kỳ linh hoạt", "Thích hợp với kho chứa hàng cao tầng", "Định dạng phong phú về hệ thống tầng chứa hàng"]
    },
    {
        id: "6",
        title: "KỆ XẾP CHỒNG",
        link: "/products/ke-xep-chong",
        image: home_banner_img_6,
        subtitle: ["Sử dụng các loại pallet đặc biệt", "Có thể xếp chồng lên tới 3 tầng", "Có thể gấp lại rất gọn gàng"]
    },
]

const FeatureBox = ({ data }) => {
    console.log("binh_data", data)
    const { image, title, subtitle, link } = data
    return (
        <div className="col-12 col-md-4">
            <div class="feature-box media-box">
                <div class="fbox-media">
                    <a href={link}>
                        <img src={image} />
                    </a>
                </div>
                <div class="fbox-desc">
                    <h3>{title}
                        {subtitle && subtitle.length > 0 && subtitle.map((item, index) => {

                            return (<span class="subtitle">- {item}</span>)
                        })}
                    </h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

const HomeBanner = () => {
    return (
        <div id="home-banner" className="home-banner">
            <div className="container">
                <div class="section-heading text-center">
                    <h2 class="section-title">Giá kệ để hàng Tân Trường Phát Vina</h2>
                    <p class="section-desc"></p>
                </div>
                <div className="row">
                    {listFeatureBox && listFeatureBox.length > 0 && listFeatureBox.map((item, index) => {
                        return (
                            <FeatureBox
                                data={item}
                            />
                        )
                    })}
                </div>
                <div class="col-xs-12">
                    <div class="view-all text-center">
                        <a class="btn" href="/collections/gia-ke-mytek">TẤT CẢ SẢN PHẨM</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeBanner