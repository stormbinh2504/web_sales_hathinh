import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeDriverIn.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from './../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from './../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from './../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from './../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from './../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_driver_in/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_driver_in/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ke_driver_in/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ke_driver_in/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_ke_driver_in/img5.jpg"
import img6 from "../../../assets/images/product_collections/product_ke_driver_in/img6.jpg"



const ProductKeDriverIn = () => {
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
                        path: PATH_NAME.KE_DRIVER_IN,
                        title: "Kệ Drive-In"
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
                                                            title: "Kệ Drive-In"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Giải pháp này cho chi phí đầu tư thấp nhưng sức chứa pallet trong kho hàng cao hơn nhiều.",
                                                "Sử dụng được tối đa không gian kho chứa hàng",
                                                "Thuận lợi cho việc sử dụng đa dạng các loại xe nâng.",
                                                "Có thể thiết kế với giải pháp “Last in / First out” hoặc First in / First out tùy vào nhu cầu kho chứa hàng hoặc khi lưu kho với một lượng lớn sản phẩm cùng chủng loại.",
                                                "Qua thực tế nhiều năm cung cấp cho thị trường Việt Nam, hệ thống kệ này của Tân Trường Phát Vina rất phù hợp với nhiều lĩnh vực công nghiệp gồm các ngành công nghiệp cơ bản, thực phẩm, và đặc biệt ngành công nghiệp kho lạnh."
                                            ]}
                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <p>
                                                </p><p>
                                                </p><p>
                                                    <span style={{ fontSize: "15px" }}>
                                                        <strong>Loại kho chứa pallet với mật độ hàng hóa lớn, hiệu quả về kinh tế, do loại bỏ không gian dành cho lối đi.</strong>
                                                        <br />
                                                        <strong>Thông thường giải pháp này được kết hợp với giải pháp kệ chứa hàng Selective, Double deep trong hệ thống kho chứa hàng quy mô lớn.</strong>
                                                    </span>
                                                </p><p>
                                                    <span style={{ fontSize: "15px" }}>Các hệ thống kệ chứa pallet kết cấu có rãnh dẫn vào/ hoặc rãnh dẫn xuyên qua (Drive-In / Drive-Thru pallet rack) là một giải pháp tăng lượng chứa hàng trong kho và có chi phí đầu tư cho mỗi vị trí pallet thấp như dạng kệ Selective. Các pallet được đặt bên cạnh nhau dọc theo chiều sâu của hệ thống rãnh đỡ bằng xe nâng. Mỗi rãnh sâu như vậy có thể thiết kể để được từ 2 đến 10 pallet hoặc hơn, và độ cao của hệ thống kệ có thể được 3 đến 5 tầng rãnh sâu như vậy.</span></p><p>
                                                    <span style={{ fontSize: "15px" }}><em><strong>Theo cách thức xuất nhập hàng, có 2 loại:</strong></em></span></p><p>
                                                    <span style={{ fontSize: "15px" }}><strong>+ Drive In Rack – Vào sau / Xuất trước (Last in / First out - LIFO)</strong></span></p><p>
                                                    <span style={{ fontSize: "15px" }}>Hệ thống kệ Drive-In pallet được thiết kế để nhập và lấy hàng chỉ từ một bên. Với hệ thống này hàng nào đưa vào sau thì sẽ lấy ra trước, theo nguyên lý “Vào sau / Ra trước” (LIFO), nếu hệ thống khoang chứa càng sâu thì việc hoạt động của xe nâng càng khó khăn. Tuy nhiên các ray dẫn được Tân Trường Phát Vina thiết kế chính xác với kích thước xe nâng hàng, làm giảm khả năng xảy ra sự cố.</span></p><p>
                                                    <span style={{ fontSize: "15px" }}><strong>+ Drive Thru Rack – Vào trước xuất trước (First in / First out -FIFO)</strong></span></p><p>
                                                    <span style={{ fontSize: "15px" }}>Ngược lại với hệ thống Drive-In pallet rack, Hệ thống Drive-Thru pallet rack này đưa hàng vào từ một phía của hệ thống và lấy hàng ra từ một phía khác. Với giải pháp này, lưu ý hàng hóa trong kho, hàng nào đưa vào trước thì sẽ lấy ra trước, theo nguyên lý “Vào trước / Ra truoc” (FIFO). Ở phía cuối của hệ thống kệ Drive Thru rack cũng có một lối vào cho xe nâng lấy hàng.</span></p><p>
                                                    <span style={{ fontSize: "15px" }}>
                                                        <strong>Hiệu quả về thiết kế:</strong>
                                                    </span>
                                                </p>
                                                <ul>
                                                    <li>
                                                        <span style={{ fontSize: "15px" }}>- Thiết kế của Tân Trường Phát Vina với cấu trúc khỏe mạnh, vững trãi, tiết kiệm vật liệu, đạt các tiêu chuẩn tốt nhất về tải trọng và độ an toàn.</span>
                                                    </li>
                                                    <li>
                                                        <span style={{ fontSize: "15px" }}>- Thi công lắp đặt một cách dễ dàng, nhanh chóng.</span>
                                                    </li>
                                                    <li>
                                                        <span style={{ fontSize: "15px" }}>- Những bộ phận cấu thành hệ thống kệ Drive-In/ Drive-Thru của Tân Trường Phát Vina được tiêu chuẩn hóa cho nên việc lắp đặt rất nhanh chóng và dễ dàng.</span>
                                                    </li>
                                                    <li>
                                                        <span style={{ fontSize: "15px" }}>- Bảo vệ được độ an toàn của hệ thống trong mọi trường hợp.</span>
                                                    </li>
                                                    <li>
                                                        <span style={{ fontSize: "15px" }}>- Các giải pháp kệ Drive-in/Drive-Thru liên kết với nhau một cách hoàn hảo, hệ thống liên kết các thành phần kệ với nhau tạo thành một thể thống nhất giữ cho kệ tránh được các sự cố và tạo nên sự bền vững về thời gian sử dụng.</span>
                                                    </li>
                                                </ul>
                                                <p></p>
                                                <hr />
                                                <p><span style={{ fontSize: "18px" }}><strong>Nhà sản xuất giá kệ công nghiệp hàng đầu Việt Nam</strong></span></p>
                                                <p><span style={{ fontSize: "15px" }}>Kệ công nghiệp Tân Trường Phát Vina được sản xuất từ sắt thép tiêu chuẩn JIS G3101 SS400</span><span style={{ fontSize: "15px" }}> với khả năng chịu lực và độ bền cực cao. Dây chuyển sản xuất khép kín, hiện đại với tiêu chuẩn quốc tế, công nghệ phun sơn tĩnh điện giúp sản phẩm có tuổi thọ dài lâu, chống cháy nổ, rỉ sét. </span></p>
                                                <p><span style={{ fontSize: "15px" }}>Đến với Tân Trường Phát Vina, khách hàng sẽ nhận được tư vấn miễn phí về các vấn đề setup, lựa chọn kệ cho kho hàng. Tân Trường Phát Vina hỗ trợ khách hàng lắp đặt và vận chuyển trên toàn quốc. Với chế độ bảo hành lên tới 3 năm, quý khách hàng hoàn toàn yên tâm về quá trình sử dụng. Đội ngũ kỹ thuật của Tân Trường Phát Vina luôn sẵn sàng hỗ trợ khách hàng trong trường hợp cần thiết. </span></p>
                                                <p><span style={{ fontSize: "15px" }}>Khách hàng có nhu cầu lắp đặt giá kệ công nghiệp vui lòng liên hệ với chúng tôi để được tư vấn và báo giá chính xác nhất:</span></p>
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

export default ProductKeDriverIn