import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductNarrowAisle.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_narrow_aisle/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_narrow_aisle/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_narrow_aisle/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_narrow_aisle/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_ke_narrow_aisle/img5.jpg"
import img6 from "../../../assets/images/product_collections/product_ke_narrow_aisle/img6.jpg"

const ProductNarrowAisle = () => {
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
        {
            original: img6,
            thumbnail: img6,
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
                        path: PATH_NAME.KE_NARROW_AISLE,
                        title: "Kệ Narrow Aisle"
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
                                                            title: "Kệ Narrow Aisle"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Các Pallet có thể được chứa ở những vị trí rất cao trong không gian của kho chứa hàng",
                                                "Chiều ngang của lối đi nhỏ nhất nên tận dụng được diện tích chứa hàng",
                                                "Tốc độ xuất nhập hàng nhanh chóng",
                                                "Phù hợp với việc số lượng vật liệu vào kho chứa thấp và khối lượng lớn hàng tồn kho",
                                                "Ứng dụng phù hợp với những khoang chứa hàng cao"
                                            ]}
                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                    <div class="tab-content clearfix" id="tabs-1">
                                                        <p>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>Loại kệ chứa hàng có lối đi của xe nâng hẹp và rất hẹp, công suất chứa hàng cao, rất phù hợp với những kho chứa hàng có mái nhà cao.</span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>Đây cũng dạng kệ nằm trong loại kệ chọn (Selective).</span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>Trong giải pháp này lối đi của xe nâng hẹp và rất hẹp.</span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>Đòi hỏi chiếc xe nâng cũng rất đặc biệt. Những chiếc xe nâng này có thể di chuyển trong một lối đi hẹp hoặc rất hẹp với khả năng hoạt động của tầm với rất cao. Đôi khi con đường đi của xe nâng phải được thiết kế rất đặc biệt, có thể có ray dẫn và xe nâng được điều khiển bằng điện.</span></p><p class="text-center"><span style={{ fontSize: "15px" }}>
                                                                <img src={img2} />
                                                            </span></p>
                                                        <hr /><p><span style={{ fontSize: "18px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam</strong>
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

export default ProductNarrowAisle