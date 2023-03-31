import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeConLanPalletFlowRack.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img5.jpg"


const ProductKeConLanPalletFlowRack = () => {
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
                        title: "Kệ con lăn (Pallet Flow Rack)"
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
                                                            title: "Kệ con lăn (Pallet Flow Rack)"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Gia tăng hiệu quả chọn hàng trên nguyên tắc nhập trước xuất trước (FIFO)",
                                                "Vốn đầu tư cơ bản cao hơn so với các loại kệ cùng loại (như Push Back, Drive in/Thru,...)",
                                                "Không yêu cầu xe nâng hàng chuyên dụng"
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false"><strong>
                                                </strong><p>
                                                    </p><p><span style={{ fontSize: "15px" }}><strong>Hệ thống kệ trượt theo một hướng (Pallet Flow Rack) là một hệ thống được thiết kế theo kỹ thuật chuyển động băng chuyền có độ dốc tạo thành lực chuyển động của các pallet về một phía.
                                                    </strong>
                                                    </span>
                                                    </p><p><span style={{ fontSize: "15px" }}><strong>+ Mô tả chung:
                                                    </strong><br />Hệ thống kệ Flowrack thường được sử dụng trong các kho có số lượng lớn hàng hóa phải xuất nhập theo hướng nhập trước – xuất trước. Các pallet tự động nối tiếp nhau nên tận dụng được các khoảng trống, hàng hóa lưu trữ sẽ luân phiên cho việc xuất hàng. Các pallet chứa hàng sẽ được đặt trên những đường dốc và trược đi trên các con lăn. Khi lấy một pallet ra, pallet tiếp theo sẽ tự động lấp vào khoảng trống với sự bổ sung từ đầu kệ bên kia.<br />Tốc độ pallet được kiểm soát bằng các thiết bị giảm tốc.
                                                    </span>
                                                    </p><p class="text-center">
                                                        <img src={img4} />
                                                    </p><p class="text-center">
                                                        <img src={img5} />
                                                    </p><p class="text-center">&nbsp;
                                                    </p><p><span style={{ fontSize: "15px" }}><strong>+ Đặc tính:
                                                    </strong>
                                                    </span>
                                                    </p><ul><li><span style={{ fontSize: "15px" }}>Giải pháp này thường được áp dụng kho chứa hàng với những sản phẩm hàng hóa cùng chủng loại như thực phẩm
                                                    </span>
                                                    </li><li><span style={{ fontSize: "15px" }}>Có thể được dùng trong môi trường lưu kho khô, đông lạnh hoặc làm mát
                                                    </span>
                                                        </li><li><span style={{ fontSize: "15px" }}>Có thể thiết kế bố trí được từ 2 pallet tới 20 pallet theo chiều sâu của hệ thống
                                                        </span>
                                                        </li><li><span style={{ fontSize: "15px" }}>Xuất nhập hàng theo các danh mục một cách tự động – xe nâng không phải di chuyển sâu vào hệ thống
                                                        </span>
                                                        </li><li><span style={{ fontSize: "15px" }}>Điều chỉnh lắp đặt khó khăn hơn
                                                        </span>
                                                        </li><li><span style={{ fontSize: "15px" }}>Hệ thống nhập trước xuất trước (FIFO)
                                                        </span>
                                                        </li>
                                                    </ul><p>
                                                    </p><hr /><p><span style={{ fontSize: "18px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam
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

export default ProductKeConLanPalletFlowRack