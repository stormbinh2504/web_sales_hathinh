import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeDeBanHangTuDong.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_de_ban_hang_tu_dong/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_de_ban_hang_tu_dong/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_de_ban_hang_tu_dong/img3.jpg"


const ProductKeDeBanHangTuDong = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const images = [
        {
            original: img1,
            thumbnail: img1,
        },
        {
            original: img2,
            thumbnail: img2,
        },
    ];

    return (
        <div className='product-ke-driver-in'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.COLLECTIONS,
                        title: "Giá kệ"
                    },
                    {
                        path: PATH_NAME.KE_DRIVER_IN,
                        title: "Kệ để hàng bán tự động"
                    }
                ]}
            />
            <section className="content">
                <div className="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="postcontent">
                                    <div className="product-page">
                                        <div className="single-product">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <SilderImageThumbnail
                                                        images={images}
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <ProductDesc
                                                        productDesc={{
                                                            title: "Kệ để hàng bán tự động"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Thời gian nhập và xuất hàng nhanh chóng hơn",
                                                "Có cảm biến giúp xác định vị trí pallet cần xuất",
                                                "Tận dụng tối đa diện tích nhà kho, tăng khả năng lưu trữ hàng hóa trong kho hàng",
                                                "Do xe nâng không trực tiếp đi vào trong hệ thống kệ nên giúp giảm thiệt hại giữa xe nâng và kệ do va chạm",
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content clearfix" id="tabs-1">
                                                <p>
                                                </p><p><span style={{ fontSize: "15px" }}>Là hệ thống kệ chứa pallet với mật độ cao. Hệ thống này sử dụng các xe nâng con thoi (shuttle car) dùng động cơ để dịch chuyển các pallet trên hệ thống ray dẫn bên trong khối kệ thay vì việc xe nâng phải đi vào bên trong như loại kệ Drive-in.
                                                </span>
                                                </p><p><span style={{ fontSize: "15px" }}>Hệ thống bao gồm kết cấu khung cột chịu tải, thanh đỡ và hệ thống ray (để đỡ pallet và cho xe nâng con thoi chạy), các xe nâng con thoi cùng thiết bị điều khiển và hệ thống sạc pin.
                                                </span>
                                                </p><p><span style={{ fontSize: "15px" }}>Các xe nâng con thoi ( được người vận hành điều khiển bằng các thiết bị cầm tay với kết nối không dây) sẽ sắp xếp hàng hóa điền đầy bất cứ vị trí còn trống nào. So với kệ Drive-in, do xe forklift không cần phải đi vào trong nên có thể thiết kế hệ thống kệ có chiều sâu lớn hơn để tăng sức chứa của kho mà không bị rủi ro do va chạm xe nâng&nbsp;và hàng hóa vào kệ. Hệ thống có thể thiết&nbsp;kế để xuất nhập LIFO (xuất và nhập cùng một phía) hoặc FIFO (nhập một đầu và xuất ở đầu kia).
                                                </span>
                                                </p><p class="text-center">
                                                    <img src={img3} />
                                                </p><p><span style={{ fontSize: "15px" }}>Với hệ thống kệ bán tự&nbsp;động này, người vận hành chỉ cần sử dụng forklifts đưa pallet đặt lên các xe nâng con thôi, các xe nâng này sẽ tự động sắp xếp hàng hóa vào trong theo yêu cầu được lựa chọn qua các thiết bị điều khiển không dây.
                                                </span>
                                                </p><p><span style={{ fontSize: "15px" }}>Hệ thống kệ này lý tưởng cho yêu cầu sử dụng lưu trữ hàng hóa cùng phân loại với số lượng lớn và hoạt động xuất nhập tần suất cao
                                                </span>
                                                </p><hr /><p><strong style={{ fontSize: "18px" }}>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam
                                                </strong>
                                                </p><p><span style={{ fontSize: "15px" }}>Kệ công nghiệp Tân Trường Phát Vina được sản xuất từ sắt thép tiêu chuẩn JIS G3101 SS400 với khả năng chịu lực và độ bền cực cao. Dây chuyển sản xuất khép kín, hiện đại với tiêu chuẩn quốc tế, công nghệ phun sơn tĩnh điện&nbsp;giúp sản phẩm&nbsp;có tuổi thọ&nbsp;dài lâu, chống cháy nổ, rỉ sét.&nbsp;
                                                </span>
                                                </p><p><span style={{ fontSize: "15px" }}>Đến với Tân Trường Phát Vina, khách hàng&nbsp;sẽ nhận được tư vấn miễn phí về các vấn đề setup, lựa chọn kệ cho kho hàng.&nbsp;Tân Trường Phát Vina hỗ trợ khách hàng lắp đặt và vận chuyển trên toàn quốc. Với chế độ bảo hành lên tới&nbsp;3&nbsp;năm, quý khách hàng hoàn toàn yên tâm&nbsp;về quá trình sử dụng. Đội ngũ kỹ thuật của Tân Trường Phát Vina luôn sẵn sàng hỗ trợ khách hàng trong trường hợp cần thiết.&nbsp;
                                                </span>
                                                </p><p><span style={{ fontSize: "15px" }}>Khách hàng có nhu cầu lắp đặt giá kệ công nghiệp vui lòng liên hệ với chúng tôi để được tư vấn và báo giá chính xác nhất:
                                                </span>
                                                </p>

                                            </div>
                                        </ProductDetailDesc>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <ListProductSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ProductKeDeBanHangTuDong