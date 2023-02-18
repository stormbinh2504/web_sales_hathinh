import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ListProductSidebar.scss"

const listProductSideBar = [
    {
        title_lv1: "Kệ để hàng nặng",
        lv2: [
            {
                title_lv2: "Kệ Drive-in",
                path: PATH_NAME.KE_DRIVER_IN
            },
            {
                title_lv2: "Kệ Selective",
                path: PATH_NAME.KE_SELECTIVE
            },
            {
                title_lv2: "Kệ Double Deep",
                path: PATH_NAME.KE_DOUBLE_DEEP
            },
            {
                title_lv2: "Kệ Narrow Aisle",
                path: PATH_NAME.KE_NARROW_AISLE
            },
            {
                title_lv2: "Kệ Pallet di động",
                path: PATH_NAME.KE_PALLET_DI_DONG
            },
            {
                title_lv2: "Kệ con lăn",
                path: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK
            },
            {
                title_lv2: "Kệ Pushback",
                path: PATH_NAME.KE_PUSH_BACK
            },
            {
                title_lv2: "Kệ tay đỡ",
                path: PATH_NAME.KE_TAY_DO
            },
            {
                title_lv2: "Kệ khuôn",
                path: PATH_NAME.KE_DE_KHUON_MOULD_RACK
            },
        ]
    },
    {
        title_lv1: "Kệ để trung tải",
        lv2: [
            {
                title_lv2: "Kệ trung tải",
                path: PATH_NAME.KE_CON_LAN_TRUNG_TAI
            },
            {
                title_lv2: "Kệ con lăn trung tải",
                path: PATH_NAME.KE_CON_LAN_TRUNG_TAI
            }
        ]
    },
    {
        title_lv1: "Kệ để hàng nhẹ",
        lv2: [
            {
                title_lv2: "Kệ Rivet",
                path: PATH_NAME.KE_RIVET
            },
            {
                title_lv2: "Kệ V hoa",
                path: PATH_NAME.KE_V_HOA
            },
            {
                title_lv2: "Kệ V lỗ",
                path: PATH_NAME.KE_V_LO
            },
        ]
    },
    {
        title_lv1: "Kệ để hồ sơ di động",
        path: PATH_NAME.KE_HO_SO_DI_DONG
    },
    {
        title_lv1: "Kệ sàn (Mezzanine)",
        path: PATH_NAME.KE_SAN_MEZZANINE
    },
    {
        title_lv1: "Kệ xếp chồng",
        path: PATH_NAME.KE_XEP_CHONG
    },
    {
        title_lv1: "Kệ để hàng tự động (Radio shuttle)",
        path: PATH_NAME.KE_DE_HANG_BAN_TU_DONG
    },
    {
        title_lv1: "Kệ siêu thị",
        path: PATH_NAME.KE_SIEU_THI
    },
    {
        title_lv1: "Các sản phẩm thiết kế theo yêu cầu",
        path: PATH_NAME.CAC_SAN_PHAM_THIET_KE_THEO_YEU_CAU
    },
]




const ListProductSidebar = () => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='list-product-sidebar'>
            <div class="content">
                <h4>Danh mục sản phẩm</h4>
                <ul className="list-product">
                    {listProductSideBar && listProductSideBar.length > 0 && listProductSideBar.map((item, index) => {
                        return (
                            <li className='item-lv1'>
                                {item.path &&
                                    <a onClick={() => dispatch(setMenuActive(item.path))} className='title-lv1 active' href="#">
                                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                                        {item.title_lv1}
                                    </a>
                                }
                                {!item.path &&
                                    <a className='title-lv1' href="#">
                                        <i class="fa fa-caret-right" aria-hidden="true"></i>
                                        {item.title_lv1}
                                    </a>
                                }
                                <ul >
                                    {item.lv2 && item.lv2.length > 0 && item.lv2.map((item2, index) => {
                                        return (
                                            <li className='item-lv2'>
                                                <a className='title-lv2' onClick={() => dispatch(setMenuActive(item2.path))}>- {item2.title_lv2}</a>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </li>
                        )
                    })}
                </ul>


                {/* <ul>
                    <li>
                        <a href="#">Kệ để hàng nặng</a>
                        <ul>
                            <li><a href="/products/ke-drive-in">Kệ Drive-in</a></li>
                            <li><a href="/products/ke-selective">Kệ Selective</a></li>
                            <li><a href="/products/ke-double-deep">Kệ Double Deep</a></li>
                            <li><a href="/products/ke-narrow-aisle">Kệ Narrow Aisle</a></li>
                            <li><a href="/products/ke-pallet-di-dong">Kệ Pallet di động</a></li>
                            <li><a href="/products/ke-con-lan-pallet-flow-rack">Kệ con lăn</a></li>
                            <li><a href="/products/ke-push-back">Kệ Pushback</a></li>
                            <li><a href="/products/ke-tay-do">Kệ tay đỡ</a></li>
                            <li><a href="/products/ke-de-khuon-mould-rack">Kệ khuôn</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Kệ để hàng trung tải</a>
                        <ul>
                            <li><a href="/products/ke-trung-tai">Kệ trung tải</a></li>
                            <li><a href="/products/ke-con-lan-trung-tai">Kệ con lăn trung tải</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">Kệ để hàng nhẹ</a>
                        <ul>
                            <li><a href="/products/ke-rivet">Kệ Rivet</a></li>

                            <li><a href="/products/ke-v-hoa">Kệ V hoa</a></li>

                            <li><a href="/products/ke-v-lo">Kệ V lỗ</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="/products/ke-ho-so-di-dong">Kệ hồ sơ di động</a>

                    </li>

                    <li>
                        <a href="/products/ke-san-mezzanine">Kệ sàn (Mezzanine)</a>
                    </li>

                    <li>
                        <a href="/products/ke-xep-chong">Kệ xếp chồng</a>
                    </li>

                    <li>
                        <a href="/products/ke-de-hang-ban-tu-dong">Kệ để hàng tự động (Radio shuttle)</a>
                    </li>

                    <li>
                        <a href="/products/ke-sieu-thi">Kệ siêu thị</a>
                    </li>

                    <li>
                        <a href="/products/cac-san-pham-thiet-ke-theo-yeu-cau">Các sản phẩm thiết kế theo yêu cầu</a>
                    </li>

                </ul> */}
            </div >
        </div >
    )
}

export default ListProductSidebar