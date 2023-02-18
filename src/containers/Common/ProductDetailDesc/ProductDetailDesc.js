import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ProductDetailDesc.scss"
const ListDesc = [
    "Giải pháp này cho chi phí đầu tư thấp nhưng sức chứa pallet trong kho hàng cao hơn nhiều.",
    "Sử dụng được tối đa không gian kho chứa hàng",
    "Thuận lợi cho việc sử dụng đa dạng các loại xe nâng.",
    "Có thể thiết kế với giải pháp “Last in / First out” hoặc First in / First out tùy vào nhu cầu kho chứa hàng hoặc khi lưu kho với một lượng lớn sản phẩm cùng chủng loại.",
    "Qua thực tế nhiều năm cung cấp cho thị trường Việt Nam, hệ thống kệ này của MYTEK rất phù hợp với nhiều lĩnh vực công nghiệp gồm các ngành công nghiệp cơ bản, thực phẩm, và đặc biệt ngành công nghiệp kho lạnh."
]
const ProductDetailDesc = ({ children }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='product-short-detail'>
            <div class="tab-nav" role="tablist">
                <div class="tab-nav-item">
                    <div className="tab-nav-wrap">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        <span class="">Chi tiết sản phẩm</span>
                    </div>
                </div>
            </div>
            <div className="tab-container">
                {children}
            </div>
            <div className="info-company">
                <p><span style={{ fontSize: "15px" }}><strong>CÔNG TY CỔ PHẦN CÔNG NGHIỆP MYTEK</strong></span></p>
                <ul>
                    <li><span style={{ fontSize: "15px" }}>
                        {/* <i class="fa fa-building-o" aria-hidden="true"></i> */}
                        - Văn phòng bán hàng: tầng 5, tòa nhà HT, 28 Xuân La, Tây Hồ, Hà Nội
                    </span>
                    </li>
                    <li>
                        <span style={{ fontSize: "15px" }}>
                            {/* <i class="fa fa-map-marker" aria-hidden="true"></i> */}
                            - Nhà máy sản xuất: Đường D2, khu D, KCN Phố Nối A, Huyện Văn Lâm, Tỉnh Hưng Yên, Việt Nam
                        </span>
                    </li>
                    <li>
                        <span style={{ fontSize: "15px" }}>
                            {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                            - Hotline: 0903 229 005 / 0243 77 55 666
                        </span>
                    </li>
                    <li>
                        <span style={{ fontSize: "15px" }}>
                            {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
                            - Email: sales@giakedehang.vn
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default ProductDetailDesc