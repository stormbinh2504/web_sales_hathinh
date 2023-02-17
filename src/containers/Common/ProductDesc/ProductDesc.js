import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ProductDesc.scss"



const ProductDesc = ({ listPageTitle }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='product-desc'>
            <h2 class="product-title">Kệ Drive-In</h2>
            <div class="product-status">Tình trạng: Sản xuất theo đơn đặt hàng</div>
            <div class="product-price">Giá : Theo thiết kế</div>
            <div class="clear"></div>

            <div class="btn-wrap">
                <a class="phone item-center" href="tel:0903229005">
                    <img src="//theme.hstatic.net/200000335999/1000709370/14/phone-ring.png?v=1455" alt="icon" />
                    Gọi ngay 0903.229.005
                </a>
                <div className="chat-require">
                    <a class="chat item-center" href="https://zalo.me/0903229005" target="_blank">
                        <img src="//theme.hstatic.net/200000335999/1000709370/14/zalo.png?v=1455" alt="icon" />
                        Chat
                    </a>
                    <a class="require item-center" href="/pages/lien-he" >
                        Yêu cầu tư vấn
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ProductDesc