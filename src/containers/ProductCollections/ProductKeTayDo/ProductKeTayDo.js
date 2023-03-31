import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeTayDo.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_tay_do/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_tay_do/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_tay_do/img3.jpg"


const ProductKeTayDo = () => {
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
        }
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
                        title: "Kệ tay đỡ (Cantilever rack)"
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
                                                            title: "Kệ tay đỡ (Cantilever rack)"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Dễ dàng tháo dỡ, vận chuyển và lắp đặt.",
                                                "Lưu trữ đa dạng hàng hoá có trọng tải và chiều dài lớn",
                                                "Lựa chọn vị trí lắp đặt linh hoạt, tay đỡ có thể nâng lên hạ xuống",
                                                "Xếp dỡ hàng hóa nhanh chóng, thuận tiện,"
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                    <p>
                                                    </p><p>
                                                    </p><p ><span style={{ fontSize: "15px" }}><span ><span>Kệ tay đỡ được thiết kế chứa các loại hàng hóa không ổn định về độ dài và kích thước.
                                                    </span>
                                                    </span>
                                                    </span>
                                                    </p><p ><span style={{ fontSize: "15px" }}><span ><span>Với loại kệ này, không bị vướng bởi các cột phía trước. Vì vậy việc xếp dỡ hàng hóa trở nên rất dễ dàng. Đây là loại kệ rất linh hoạt, ứng dụng tốt trong việc chứa các sản phẩm có độ dài khác nhau trên cùng khoang kệ.
                                                    </span>
                                                    </span>
                                                    </span>
                                                    </p><p ><span style={{ fontSize: "15px" }}><span ><span>Việc lắp đặt loại kệ này tối ưu cho việc chứa các hàng hóa dài, nặng, quá khổ như gỗ xẻ, ống thép, thảm, đồ nội thất
                                                    </span>
                                                    </span>
                                                    </span>
                                                    </p><hr /><p><span style={{ fontSize: "15px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam
                                                    </strong>
                                                    </span>
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

export default ProductKeTayDo