import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductDoubleDeep.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_double_deep/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_double_deep/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_double_deep/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_double_deep/img4.jpg"


const ProductDoubleDeep = () => {
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
                        path: PATH_NAME.KE_DOUBLE_DEEP,
                        title: "Kệ Double Deep"
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
                                                            title: "Kệ Double Deep"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Sức chứa hàng hóa trong kho cao hơn so với kệ Selective",
                                                "Tải trọng hàng hóa từ 1000kg-6000kg/ tầng",
                                                "Vốn đầu tư cơ bản ước tính ngang bẳng với kệ Selective",
                                                "Diện tích sử dụng sàn kho chứa hàng đạt 50%",
                                                "Sơn tĩnh điện chống mài mòn, han gỉ",
                                                "Phù hợp với nhiều môi trường lưu trữ",
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                    <p>
                                                    </p>
                                                    <p>
                                                    </p>
                                                    <p>
                                                        <span style={{ fontSize: "15px" }}>Kệ Double Deep (Kệ đôi sâu) là dạng kệ có 2 pallet chứa hàng được để sâu vào bên trong kệ, tăng sức chứa hàng hóa.</span>
                                                    </p>
                                                    <p>
                                                        <span style={{ fontSize: "15px" }}>Đây cũng là một dạng kệ chọn (Selective), được tạo nên bởi 2 dãy kệ đôi giáp lưng vào nhau nhờ vậy diện tích sàn kho sử dụng tăng lên do giảm được không gian của các lối đi.</span></p><p><span style={{ fontSize: "15px" }}>Với hơn 10 năm kinh nghiệm , Tân Trường Phát Vina đã đưa ra giải pháp về kệ chứa hàng Selective để được 2 pallet theo chiều sâu này cung cấp cho nhiều khách hàng. Giải pháp này đã đem lại hiệu suất tối đa cho kho chứa hàng dạng Selective Rack.</span></p><p><span style={{ fontSize: "15px" }}>
                                                            <strong>Đặc tính:&nbsp;</strong>
                                                        </span>
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <span style={{ fontSize: "15px" }}>Yêu cầu xe nâng theo kiểu có càng nâng điều khiển sâu vào trong để đưa pallet vào kệ và lấy ra khỏi kệ.
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span style={{ fontSize: "15px" }}>Giới hạn về tải trọng và độ cao phụ thuộc vào khả năng của xe nâng.</span>
                                                        </li>
                                                        <li>
                                                            <span style={{ fontSize: "15px" }}>Nhân viên kho muốn lấy pallet phía trong thì phải di chuyển pallet phía trước.</span>
                                                        </li>
                                                        <li>
                                                            <span style={{ fontSize: "15px" }}>Pallet để vào sau lấy ra trước theo nguyên lý "Vào sau- Ra trước- (LIFO)" .</span>
                                                        </li>
                                                        <li>
                                                            <span style={{ fontSize: "15px" }}>Do các giá kệ&nbsp;được xếp theo kiểu một cái đứng sau cái kia nên khoảng trống chọn hàng bị giảm xuống.</span>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        <span style={{ fontSize: "15px" }}><strong>Hình ảnh kệ Double Deep Tân Trường Phát Vina lắp đặt:&nbsp;</strong>
                                                        </span>
                                                    </p>
                                                    <p class="text-center">&nbsp;</p><p class="text-center">
                                                        <img src={img1} /></p>
                                                    <p class="text-center">
                                                        <img src={img2} />
                                                    </p>
                                                    <p>
                                                    </p>
                                                    <p>
                                                    </p>
                                                    <hr />
                                                    <p>
                                                        <span style={{ fontSize: "18px" }}>
                                                            <strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam</strong>
                                                        </span>
                                                    </p>
                                                    <p>
                                                    </p>
                                                    <p>
                                                    </p>
                                                    <p>
                                                        <span style={{ fontSize: "15px" }}>Kệ công nghiệp Tân Trường Phát Vina được sản xuất từ sắt thép tiêu chuẩn JIS G3101 SS400 với khả năng chịu lực và độ bền cực cao. Dây chuyển sản xuất khép kín, hiện đại với tiêu chuẩn quốc tế, công nghệ phun sơn tĩnh điện&nbsp;giúp sản phẩm&nbsp;có tuổi thọ&nbsp;dài lâu, chống cháy nổ, rỉ sét.&nbsp;</span>
                                                    </p>
                                                    <p>
                                                        <span style={{ fontSize: "15px" }}>Đến với Tân Trường Phát Vina, khách hàng&nbsp;sẽ nhận được tư vấn miễn phí về các vấn đề setup, lựa chọn kệ cho kho hàng.&nbsp;Tân Trường Phát Vina hỗ trợ khách hàng lắp đặt và vận chuyển trên toàn quốc. Với chế độ bảo hành lên tới&nbsp;3&nbsp;năm, quý khách hàng hoàn toàn yên tâm&nbsp;về quá trình sử dụng. Đội ngũ kỹ thuật của Tân Trường Phát Vina luôn sẵn sàng hỗ trợ khách hàng trong trường hợp cần thiết.&nbsp;</span></p><p><span style={{ fontSize: "15px" }}>Khách hàng có nhu cầu lắp đặt giá kệ công nghiệp vui lòng liên hệ với chúng tôi để được tư vấn và báo giá chính xác nhất:</span></p><p><span style={{ fontSize: "15px" }}>

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

export default ProductDoubleDeep