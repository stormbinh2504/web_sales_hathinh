import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeTrungTai.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_trung_tai/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_trung_tai/img2.jpg"

const ProductKeTrungTai = () => {
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
                        title: "Kệ trung tải"
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
                                                            title: "Kệ trung tải"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Hệ thống kho chứa hàng cực kỳ linh hoạt",
                                                "Thích hợp để lưu trữ hàng hóa có trọng lượng trung bình từ 200-500kg/1 tầng"
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix" id="tabs-1">
                                                    <br />Kệ Shelving là loại kệ chứa hàng đa năng có kết cấu bằng thép với khoang chứa hàng được thiết kế rất đa dụng trong việc chứa đa chủng loại hàng hoá, dể dàng lắp đặt và dễ điều chỉnh, hoặc di dời.<p></p><p>
                                                        <span style={{ fontSize: "15px" }}>Hệ thống kệ Shelving này có các tấm bửng để hàng hoá được làm bằng sắt sơn tĩnh điện hay bằng gỗ ván ép, và có thể được che chắn bởi các tấm lưới thép không để hàng hoá rơi ra ngoài.</span></p><p><span style={{ fontSize: "15px" }}>Hệ thống kệ Shelving chỉ nâng hàng bằng tay, không sử dụng pallet và không cần dùng tới xe nâng hàng.
                                                        </span>
                                                    </p><p><span style={{ fontSize: "15px" }}>Có thể được thiết lập, định dạng phong phú về hệ thống tầng chứa hàng.
                                                    </span>
                                                    </p><p><span style={{ fontSize: "15px" }}><strong>Ứng dụng của kệ trung tải:&nbsp;
                                                    </strong>
                                                    </span>
                                                    </p><ul><li><span style={{ fontSize: "15px" }}>Sử dụng để đựng hồ sơ, tài liệu, văn phòng phẩm tại các công ty, doanh nghiệp.
                                                    </span>
                                                    </li><li><span style={{ fontSize: "15px" }}>Trưng bày&nbsp;các sản phẩm gia dụng, thực phẩm, tại các siêu thị hay cửa hàng tạp hóa.
                                                    </span>
                                                        </li><li><span style={{ fontSize: "15px" }}>Trưng bày quần áo tại các cửa hàng, shop thời trang.
                                                        </span>
                                                        </li><li><span style={{ fontSize: "15px" }}>Dùng lưu trữ các thành phẩm trong các nhà kho công nghiệp.
                                                        </span>
                                                        </li>
                                                    </ul><hr /><p><span style={{ fontSize: "18px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam
                                                    </strong>
                                                    </span>
                                                    </p><p>
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

export default ProductKeTrungTai