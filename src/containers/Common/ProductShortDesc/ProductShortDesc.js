import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ProductShortDesc.scss"
const ListDesc = [
    "Giải pháp này cho chi phí đầu tư thấp nhưng sức chứa pallet trong kho hàng cao hơn nhiều.",
    "Sử dụng được tối đa không gian kho chứa hàng",
    "Thuận lợi cho việc sử dụng đa dạng các loại xe nâng.",
    "Có thể thiết kế với giải pháp “Last in / First out” hoặc First in / First out tùy vào nhu cầu kho chứa hàng hoặc khi lưu kho với một lượng lớn sản phẩm cùng chủng loại.",
    "Qua thực tế nhiều năm cung cấp cho thị trường Việt Nam, hệ thống kệ này của MYTEK rất phù hợp với nhiều lĩnh vực công nghiệp gồm các ngành công nghiệp cơ bản, thực phẩm, và đặc biệt ngành công nghiệp kho lạnh."
]
const ProductShortDesc = ({ children }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='product-short-desc'>
            <h3 class="title">Ưu điểm:</h3>
            <ul>
                {ListDesc && ListDesc.length > 0 && ListDesc.map((item, index) => {
                    return (
                        <li>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span>{item}</span>
                        </li>
                    )
                })}

            </ul>
        </div >
    )
}

export default ProductShortDesc