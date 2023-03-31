import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKePushBack.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_push_back/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_push_back/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_push_back/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_push_back/img4.jpg"

const ProductKePushBack = () => {
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
                        path: PATH_NAME.KE_PUSH_BACK,
                        title: "Kệ Push Back"
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
                                                            title: "Kệ Push Back"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Tận dụng được không gian chứa hàng tuyệt hảo",
                                                "Phù hợp cho kho chứa có lượng hàng hóa lớn, chắc chắn,và thời gian xếp dỡ hàng hóa diễn ra nhanh chóng.",
                                                "Có thể đẩy sâu vào được 4 pallet",
                                                "Hàng nào đưa vào trước thì lấy ra sau (FILO)",
                                                "Không cần có lối đi ở giữa dãy kệ như Drive-in",
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                    <p>
                                                    </p><p><span style={{ fontSize: "15px" }}><strong>Loại kệ để pallet này có mật độ kho chứa hàng kín với việc đưa hàng lên kệ và lấy ra khỏi kệ ở cùng một phía, phía trước.
                                                    </strong>
                                                    </span>
                                                    </p><p><span style={{ fontSize: "15px" }}><strong>Mô tả chung:
                                                    </strong>
                                                        <br />Hệ thống kệ đẩy vào Pushback này cung cấp khả năng chứa hàng trong kho cao và dùng để lưu trữ cho nhiều chủng loại và kích cỡ pallet trên cùng một dãy kệ. Nó có thể chứa 2,3 thậm chí 4 pallet trên cùng một ngăn kệ theo chiều sâu giống như kệ Drive-in;
                                                        <br />Các pallet trên cùng một ngăn sẽ được đặt trên những xe trượt và chúng tuần tự trượt hết vào bên trong khi chúng ta nhập hàng vào. Khi lấy hàng ra các xe trượt sẽ tự động trôi về phía trước và lấp vào khoảng trống.
                                                    </span>
                                                    </p><p class="text-center">
                                                        <img src={img4} />
                                                    </p>
                                                    <p>
                                                        <span style={{ fontSize: "15px" }}>Dạng kệ đẩy vào trong có hiệu suất chứa hàng cao cũng giống như kệ kệ Drive-in, nhưng tiết kiệm được thời gian xuất nhập hàng hơn vì xe nâng hàng không phải chạy sâu vào trong kệ.
                                                        </span>
                                                    </p>
                                                    <hr /><p><span style={{ fontSize: "18px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam
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

export default ProductKePushBack