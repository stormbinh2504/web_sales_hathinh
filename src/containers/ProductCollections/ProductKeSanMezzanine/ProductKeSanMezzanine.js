import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeSanMezzanine.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_san_mezzanine/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_san_mezzanine/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_san_mezzanine/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_san_mezzanine/img4.jpg"


const ProductKeSanMezzanine = () => {
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
                        title: "Kệ sàn Mezzanine"
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
                                                            title: "Kệ sàn Mezzanine"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Đa dạng về kích thước, thiết kế phù hợp với nhu cầu của khách hàng để mang lại hiệu quả cao nhất",
                                                "Sản phẩm được nghiên cứu và sản xuất theo công nghệ hiện đại, tiên tiến.",
                                                "Kệ sàn được sản từ những chất liệu đảm bảo tiêu chuẩn chất lượng nên có độ bền cao, cứng cáp và đảm bảo an toàn tuyệt đối khi sử dụng.",
                                                "Phù hợp với hàng loạt các kệ hoặc hệ thống lưu trữ công nghiệp",
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                    <p>
                                                    </p><p><span style={{ fontSize: "15px" }}>Trong điều kiện mặt bằng nhà xưởng, kho bãi chứa hàng&nbsp;chật hẹp, hệ thống hệ sàn công nghiệp có thể giúp tận dụng tối đa không gian nhà kho.
                                                    </span>
                                                    </p><p><span style={{ fontSize: "15px" }}>Hệ thống kệ sàn có thể tận dụng kết cấu của Hệ thống kệ&nbsp;chứa hàng để tạo ra nhiều tầng sàn thao tác giúp việc lưu trữ, xếp dỡ hàng hóa thuận tiện.
                                                    </span>
                                                    </p><p><span style={{ fontSize: "15px" }}>Có thể ứng dụng để tạo ra các Hệ thống vừa làm văn phòng làm việc, vừa làm kho chứa hàng.
                                                    </span>
                                                    </p><p><span style={{ fontSize: "15px" }}>Thông thường, hệ thống kệ sàn này có lắp đặt một dụng cụ nâng hàng riêng, thiết kế đơn giản và rẻ tiền hơn loại thang máy hàng hóa tiêu chuẩn. Thiết bị này chuyển động theo chiều đứng, nâng hàng hóa từ dưới sàn nhà kho lên sàn Mezzanine và ngược lại một cách an toàn và hiệu quả.
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

export default ProductKeSanMezzanine