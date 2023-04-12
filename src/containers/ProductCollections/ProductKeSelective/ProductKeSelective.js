import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeSelective.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_selective/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_selective/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_selective/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_selective/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_ke_selective/img5.jpg"


const ProductKeSelective = () => {
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
        {
            original: img3,
            thumbnail: img3,
        },
        {
            original: img4,
            thumbnail: img4,
        },
        {
            original: img5,
            thumbnail: img5,
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
                        title: "Kệ Selective"
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
                                                            title: "Kệ Selective"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Cho phép sử dụng tất cả pallet hàng",
                                                "Dể dàng điều chỉnh thanh đỡ ngang (beam) phù hợp với bất kỳ kích thước hay trọng lượng pallet hàng hóa",
                                                "Có thể ứng dụng cho độ cao tới 11m",
                                                "Mỗi dãy có phạm vi ứng dụng rộng rãi đáp ứng nhu cầu chứa hàng hóa.",
                                                "Thuận lợi cho việc bố trí một pallet mà không cần phải di chuyển một Pallet khác và tiếp cận tất cả các pallet một cách dễ dàng",
                                                "Nó có thể sử dụng hầu hết các loại xe nâng hàng.",
                                                "Các pallet tầng thấp nhất có thể để ngay trên sàn",
                                                "Ở tầng thấp của kệ có thể thêm vào những giá đỡ đơn giản rẻ tiền hơn.",
                                                "Diện tích mặt bằng kho sử dụng đạt 30%.",
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <p>
                                                </p>
                                                <p>
                                                </p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>
                                                        <strong>Mô tả chung:</strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>Kệ Selective được sử dụng rộng rãi trong các kho hàng mà diện tích được sử dụng tối đa, linh hoạt và tiện dụng.</span></p><p><span style={{ fontSize: "15px" }}>Phương pháp thông thường nhất của việc chứa hàng trong kho bằng pallet là Hệ thống kệ Selective hay còn gọi là hệ thống kệ lựa chọn, một hệ thống kho chứa hàng được thiết kế để chứa bất kỳ loại pallet hàng nào.</span></p><p><span style={{ fontSize: "15px" }}>Đây là dạng kệ chứa hàng đơn giản nhất trong số các hệ thống kho kệ chứa hàng, phù hợp với nhu cầu về chi phí đầu tư vừa phải.</span>
                                                </p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>
                                                        <strong>Ứng Dụng:</strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>Hệ thống kệ Selective được thiết kế sử dụng trong các kho có nhu cầu xuất nhập liên tục, thời gian lưu trữ hàng hóa ngắn hoặc lưu trữ nhiều chủng loại sản phẩm trong cùng một kho. Mỗi tầng kệ trong hệ thống kệ Selective có khả năng chịu tải từ 500kg/pallet ÷ 2000kg/pallet. Các ngăn kệ có chiều dài từ 1150mm ÷ 3600mm (tải trọng giảm dần theo chiều dài).</span></p><p><span style={{ fontSize: "15px" }}>Kệ Selective cũng dễ điều chỉnh và dễ di dời, thay thế bất kỳ lúc nào. Nó có thể sử dụng hầu hết các loại xe nâng hàng..</span>
                                                </p>
                                                <p>
                                                    <strong>
                                                        <span style={{ fontSize: "15px" }}>Hình ảnh kệ Selective Tân Trường Phát Vina lắp đặt:&nbsp;</span>
                                                    </strong>
                                                </p>
                                                <p class="text-center">
                                                    <img src={img3} />
                                                </p>
                                                <p class="text-center">
                                                    <img src={img1} /></p>
                                                <hr />
                                                <p>
                                                    <span style={{ fontSize: "18px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam</strong>
                                                    </span>
                                                </p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>Kệ công nghiệp Tân Trường Phát Vina được sản xuất từ sắt thép tiêu chuẩn JIS G3101 SS400 với khả năng chịu lực và độ bền cực cao. Dây chuyển sản xuất khép kín, hiện đại với tiêu chuẩn quốc tế, công nghệ phun sơn tĩnh điện&nbsp;giúp sản phẩm&nbsp;có tuổi thọ&nbsp;dài lâu, chống cháy nổ, rỉ sét.&nbsp;</span>
                                                </p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>Đến với Tân Trường Phát Vina, khách hàng&nbsp;sẽ nhận được tư vấn miễn phí về các vấn đề setup, lựa chọn kệ cho kho hàng.&nbsp;Tân Trường Phát Vina hỗ trợ khách hàng lắp đặt và vận chuyển trên toàn quốc. Với chế độ bảo hành lên tới&nbsp;3&nbsp;năm, quý khách hàng hoàn toàn yên tâm&nbsp;về quá trình sử dụng. Đội ngũ kỹ thuật của Tân Trường Phát Vina luôn sẵn sàng hỗ trợ khách hàng trong trường&nbsp;hợp cần thiết.&nbsp;</span></p>
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>Khách hàng có nhu cầu lắp đặt giá kệ công nghiệp vui lòng liên hệ với chúng tôi để được tư vấn và báo giá chính xác nhất:</span>
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

export default ProductKeSelective