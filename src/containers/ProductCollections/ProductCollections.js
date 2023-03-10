import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./ProductCollections.scss"
import PageTitle from './../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import product_ke_driver_in_img1 from "../../assets/images/product_collections/product_ke_driver_in/img1.jpg"
import product_ke_driver_in_img2 from "../../assets/images/product_collections/product_ke_driver_in/img2.jpg"

import product_ke_selective_img1 from "../../assets/images/product_collections/product_ke_selective/img1.jpg"
import product_ke_selective_img2 from "../../assets/images/product_collections/product_ke_selective/img2.jpg"

import product_ke_double_deep_img1 from "../../assets/images/product_collections/product_ke_double_deep/img1.jpg"
import product_ke_double_deep_img2 from "../../assets/images/product_collections/product_ke_double_deep/img2.jpg"

import product_ke_narrow_aisle_img1 from "../../assets/images/product_collections/product_ke_narrow_aisle/img1.jpg"

import product_ke_pallet_di_dong_img1 from "../../assets/images/product_collections/product_ke_pallet_di_dong/img1.jpg"
import product_ke_pallet_di_dong_img2 from "../../assets/images/product_collections/product_ke_pallet_di_dong/img2.jpg"

import product_ke_con_lan_pallet_flow_rack_img1 from "../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img1.jpg"
import product_ke_con_lan_pallet_flow_rack_img2 from "../../assets/images/product_collections/product_ke_con_lan_pallet_flow_rack/img2.jpg"

import product_ke_push_back_img1 from "../../assets/images/product_collections/product_ke_push_back/img1.jpg"
import product_ke_push_back_img2 from "../../assets/images/product_collections/product_ke_push_back/img2.jpg"

import product_ke_tay_do_img1 from "../../assets/images/product_collections/product_ke_tay_do/img1.jpg"
import product_ke_tay_do_img2 from "../../assets/images/product_collections/product_ke_tay_do/img2.jpg"

import product_ke_de_khuon_mould_rack_img1 from "../../assets/images/product_collections/product_ke_de_khuon_mould_rack/img1.jpg"
import product_ke_de_khuon_mould_rack_img2 from "../../assets/images/product_collections/product_ke_de_khuon_mould_rack/img2.jpg"

import product_ke_trung_tai_img1 from "../../assets/images/product_collections/product_ke_trung_tai/img1.jpg"
import product_ke_trung_tai_img2 from "../../assets/images/product_collections/product_ke_trung_tai/img2.jpg"

import product_ke_con_lan_trung_tai_img1 from "../../assets/images/product_collections/product_ke_con_lan_trung_tai/img1.jpg"
import product_ke_con_lan_trung_tai_img2 from "../../assets/images/product_collections/product_ke_con_lan_trung_tai/img2.jpg"

import product_ke_v_hoa_img1 from "../../assets/images/product_collections/product_ke_v_hoa/img1.jpg"
import product_ke_v_hoa_img2 from "../../assets/images/product_collections/product_ke_v_hoa/img2.jpg"

import product_ke_v_lo_img1 from "../../assets/images/product_collections/product_ke_v_lo/img1.jpg"
import product_ke_v_lo_img2 from "../../assets/images/product_collections/product_ke_v_lo/img2.jpg"

import product_ke_san_mezzanine_img1 from "../../assets/images/product_collections/product_ke_san_mezzanine/img1.jpg"
import product_ke_san_mezzanine_img2 from "../../assets/images/product_collections/product_ke_san_mezzanine/img2.jpg"

import product_ke_xep_chong_img1 from "../../assets/images/product_collections/product_ke_xep_chong/img1.jpg"
import product_ke_xep_chong_img2 from "../../assets/images/product_collections/product_ke_xep_chong/img2.jpg"

import product_ke_de_ban_hang_tu_dong_img1 from "../../assets/images/product_collections/product_ke_de_ban_hang_tu_dong/img1.jpg"
import product_ke_de_ban_hang_tu_dong_img2 from "../../assets/images/product_collections/product_ke_de_ban_hang_tu_dong/img2.jpg"

import product_ke_sieu_thi_img1 from "../../assets/images/product_collections/product_ke_sieu_thi/img1.jpg"
import product_ke_sieu_thi_img2 from "../../assets/images/product_collections/product_ke_sieu_thi/img2.jpg"


const col_1 = [
    {
        isTitleMain: true,
        title: "K??? ????? h??ng n???ng"
    },
    {
        isTitleMain: false,
        title: "K??? Drive-in",
        path: PATH_NAME.KE_DRIVER_IN
    },
    {
        isTitleMain: false,
        title: "K??? Selective",
        path: PATH_NAME.KE_SELECTIVE
    },
    {
        isTitleMain: false,
        title: "K??? Double Deep",
        path: PATH_NAME.KE_DOUBLE_DEEP
    },
    {
        isTitleMain: false,
        title: "K??? Narrow Aisle",
        path: PATH_NAME.KE_NARROW_AISLE
    },
    {
        isTitleMain: false,
        title: "K??? Pallet di ?????ng (Heavy duty mobile)",
        path: PATH_NAME.KE_PALLET_DI_DONG
    },
    {
        isTitleMain: false,
        title: "K??? con l??n (Pallet flow rack)",
        path: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK
    },
    {
        isTitleMain: false,
        title: "K??? Pushback",
        path: PATH_NAME.KE_PUSH_BACK
    },
    {
        isTitleMain: false,
        title: "K??? tay ????? (Cantilever rack)",
        path: PATH_NAME.KE_TAY_DO
    },
    {
        isTitleMain: false,
        title: "K??? khu??n (Mould rack)",
        path: PATH_NAME.KE_DE_KHUON_MOULD_RACK
    },

]

const col_2 = [
    {
        isTitleMain: true,
        title: "K??? ????? h??ng trung t???i"
    },
    {
        isTitleMain: false,
        title: "K??? trung t???i (Medium duty shelving)",
        path: PATH_NAME.KE_TRUNG_TAI
    },
    {
        isTitleMain: false,
        title: "K??? con l??n trung t???i (Medium duty flow rack)",
        path: PATH_NAME.KE_CON_LAN_TRUNG_TAI
    },
    {
        isTitleMain: true,
        title: "K??? ????? h??ng nh???"
    },
    {
        isTitleMain: false,
        title: "K??? V hoa",
        path: PATH_NAME.KE_V_HOA
    },
    {
        isTitleMain: false,
        title: "K??? V l???",
        path: PATH_NAME.KE_V_LO
    },
    {
        isTitleMain: true,
        title: "K??? s??n (Mezzanine)",
        path: PATH_NAME.KE_SAN_MEZZANINE
    },
]

const col_3 = [
    {
        isTitleMain: true,
        title: "K??? x???p ch???ng (Stacking rack)",
        path: PATH_NAME.KE_XEP_CHONG
    },
    {
        isTitleMain: true,
        title: "K??? ????? h??ng t??? ?????ng (Radio shuttle)",
        path: PATH_NAME.KE_DE_HANG_BAN_TU_DONG
    },
    {
        isTitleMain: true,
        title: "K??? si??u th???",
        path: PATH_NAME.KE_SIEU_THI
    },

]

const RenderCol = ({ col }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <div>
            {col && col.length > 0 && col.map((item, index) => {
                if (item.isTitleMain) {
                    return (
                        <div className='title-main'>
                            {/* <span className='item-center'>
                                <i class="fa fa-caret-right" aria-hidden="true"></i>
                            </span> */}
                            ???
                            {
                                item.path ?
                                    <span
                                        className='active'
                                        onClick={() => dispatch(setMenuActive(item.path))}
                                    >
                                        <strong>{item.title}</strong>
                                    </span>
                                    :
                                    <span>
                                        <strong>{item.title}</strong>
                                    </span>
                            }

                        </div>
                    )
                }
                else {
                    return (
                        <div className='title-child'>
                            <span className='item-center'>
                                -
                            </span>
                            <span className='item-center active'
                                onClick={() => dispatch(setMenuActive(item.path))}
                            >
                                {item.title}
                            </span>
                        </div>
                    )
                }
            })}
        </div>
    )
}


const listProDuct = [
    {
        title: "K??? Drive-in",
        path: PATH_NAME.KE_DRIVER_IN,
        listImages: [product_ke_driver_in_img1, product_ke_driver_in_img2],
        productDesc: "Gi???i ph??p n??y cho chi ph?? ?????u t?? th???p nh??ng s???c ch???a pallet trong kho h??ng cao h??n nhi???u. S??? d???ng ???????c t???i ??a kh??ng gian kho ch???a h??ng thu???n l???i cho...",
    },
    {
        title: "K??? Selective",
        path: PATH_NAME.KE_SELECTIVE,
        listImages: [product_ke_selective_img1, product_ke_selective_img2],
        productDesc: "Cho ph??p s??? d???ng t???t c??? pallet h??ng d??? d??ng ??i???u ch???nh thanh ????? ngang (beam) ph?? h???p v???i b???t k??? k??ch th?????c hay tr???ng l?????ng pallet h??ng h??a, c?? th??? ???ng...",
    },
    {
        title: "K??? Double Deep",
        path: PATH_NAME.KE_DOUBLE_DEEP,
        listImages: [product_ke_double_deep_img1, product_ke_double_deep_img2],
        productDesc: "S???c ch???a h??ng h??a trong kho cao h??n so v???i k??? Selective t???i tr???ng h??ng h??a t??? 1000kg-6000kg/ t???ng. V???n ?????u t?? c?? b???n ?????c t??nh ngang b???ng v???i k???...",
    },
    {
        title: "K??? Narrow Aisle",
        path: PATH_NAME.KE_NARROW_AISLE,
        listImages: [product_ke_narrow_aisle_img1],
        productDesc: "C??c Pallet c?? th??? ???????c ch???a ??? nh???ng v??? tr?? r???t cao trong kh??ng gian c???a kho ch???a h??ng. Chi???u ngang c???a l???i ??i nh??? nh???t n??n t???n d???ng ???????c di???n...",
    },
    {
        title: "K??? Pallet di ?????ng",
        path: PATH_NAME.KE_PALLET_DI_DONG,
        listImages: [product_ke_pallet_di_dong_img1, product_ke_pallet_di_dong_img2],
        productDesc: "Linh ho???t l???i ??i, t??ng kh??? n??ng qu???n l?? truy xu???t h??ng h??aC?? s??? ??a d???ng v??? c??ch b??? tr?? v?? thi???t k??? cho nhi???u lo???i h??ng h??a. H??? th???ng gi?? k???...",
    },
    {
        title: "K??? con l??n (Pallet Flow Rack)",
        path: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK,
        listImages: [product_ke_con_lan_pallet_flow_rack_img1, product_ke_con_lan_pallet_flow_rack_img2],
        productDesc: "Gia t??ng hi???u qu??? ch???n h??ng tr??n nguy??n t???c nh???p tr?????c xu???t tr?????c (FIFO)V???n ?????u t?? c?? b???n cao h??n so v???i c??c lo???i k??? c??ng lo???i (nh?? Push Back,...",
    },
    {
        title: "K??? Push Back",
        path: PATH_NAME.KE_PUSH_BACK,
        listImages: [product_ke_push_back_img1, product_ke_push_back_img2],
        productDesc: "T???n d???ng ???????c kh??ng gian ch???a h??ng tuy???t h???oPh?? h???p cho kho ch???a c?? l?????ng h??ng h??a l???n, ch???c ch???n,v?? th???i gian x???p d??? h??ng h??a di???n ra nhanh ch??ng.C??...",
    },
    {
        title: "K??? tay ????? (Cantilever rack)",
        path: PATH_NAME.KE_TAY_DO,
        listImages: [product_ke_tay_do_img1, product_ke_tay_do_img2],
        productDesc: "D??? d??ng th??o d???, v???n chuy???n v?? l???p ?????t.L??u tr??? ??a d???ng h??ng ho?? c?? tr???ng t???i v?? chi???u d??i l???nL???a ch???n v??? tr?? l???p ?????t linh ho???t, tay ????? c??...",
    },
    {
        title: "K??? ????? khu??n (Mould rack)",
        path: PATH_NAME.KE_DE_KHUON_MOULD_RACK,
        listImages: [product_ke_de_khuon_mould_rack_img1, product_ke_de_khuon_mould_rack_img2],
        productDesc: "T???i ??u h??a kh??ng gian nh?? x?????ng ch???a khu??n, gi??p quy tr??nh ki???m tra b???o d?????ng ?????nh k??? khu??n m???u d??? d??ng theo ti??u chu???n c??ng nghi???p.V???n h??nh an to??n...",
    },
    {
        title: "K??? trung t???i",
        path: PATH_NAME.KE_TRUNG_TAI,
        listImages: [product_ke_trung_tai_img1, product_ke_trung_tai_img2],
        productDesc: "H??? th???ng kho ch???a h??ng c???c k??? linh ho???tTh??ch h???p ????? l??u tr??? h??ng h??a c?? tr???ng l?????ng trung b??nh t??? 200-500kg/1 t???ng",
    },
    {
        title: "K??? con l??n trung t???i",
        path: PATH_NAME.KE_CON_LAN_TRUNG_TAI,
        listImages: [product_ke_con_lan_trung_tai_img1, product_ke_con_lan_trung_tai_img2],
        productDesc: "T???i tr???ng 50-80kg / 3 l??n roller nh???aKh??ng c???n s??? d???ng xe n??ng, c??ng nh??n xu???t nh???p h??ng h??a tr???c ti???p tr??n k???T??ng kh??? n??ng l??u tr??? th??m 50%",
    },
    {
        title: "K??? V hoa",
        path: PATH_NAME.KE_V_HOA,
        listImages: [product_ke_v_hoa_img1, product_ke_v_hoa_img2],
        productDesc: "L?? d???ng k??? ???????c thi???t k??? ????? ch??a h??ng h??a lo???i nh??? t??? 50kg/ t???ng cho ?????n 200kg/ t???ngLo???i k??? n??y r???t ??a d???ng, d??? th??o l???p, d??? ??i???u ch???nh,...",
    },
    {
        title: "K??? V l???",
        path: PATH_NAME.KE_V_LO,
        listImages: [product_ke_v_lo_img1, product_ke_v_lo_img2],
        productDesc: "L?? d???ng k??? ???????c thi???t k??? ????? ch??a h??ng h??a lo???i nh??? t??? 50kg/ t???ng cho ?????n 200kg/ t???ngLo???i k??? n??y r???t ??a d???ng, d??? th??o l???p, d??? ??i???u ch???nh,...",
    },
    {
        title: "K??? s??n Mezzanine",
        path: PATH_NAME.KE_SAN_MEZZANINE,
        listImages: [product_ke_san_mezzanine_img1, product_ke_san_mezzanine_img2],
        productDesc: "??a d???ng v??? k??ch th?????c, thi???t k??? ph?? h???p v???i nhu c???u c???a kh??ch h??ng ????? mang l???i hi???u qu??? cao nh???tS???n ph???m ???????c nghi??n c???u v?? s???n xu???t theo...",
    },
    {
        title: "K??? x???p ch???ng (Stacking rack)",
        path: PATH_NAME.KE_XEP_CHONG,
        listImages: [product_ke_xep_chong_img1, product_ke_xep_chong_img2],
        productDesc: "C??c module k??? d???ng n??y c?? th??? ???????c x???p ch???ng l??n nhau t???n d???ng t???i ??a kh??ng gian nh?? khoH??ng h??a ???????c gi??? nguy??n trong k??? khi lu??n chuy???n trong...",
    },
    {
        title: "K??? ????? h??ng b??n t??? ?????ng",
        path: PATH_NAME.KE_DE_HANG_BAN_TU_DONG,
        listImages: [product_ke_de_ban_hang_tu_dong_img1, product_ke_de_ban_hang_tu_dong_img2],
        productDesc: "Th???i gian nh???p v?? xu???t h??ng nhanh ch??ng h??n C?? c???m bi???n gi??p x??c ?????nh v??? tr?? pallet c???n xu???tT???n d???ng t???i ??a di???n t??ch nh?? kho, t??ng kh??? n??ng l??u...",
    },
    {
        title: "K??? si??u th???",
        path: PATH_NAME.KE_SIEU_THI,
        listImages: [product_ke_sieu_thi_img1, product_ke_sieu_thi_img2],
        productDesc: "K??? si??u th??? MYTEK s??? d???ng ch???t li???u th??p, t??n cao c???p v?? ???????c s???n xu???t tr??n d??y chuy???n m??y m??c hi???n ?????i, kh??p k??nS???n ph???m ???????c ??p d???ng c??ng ngh??? phun...",
    },
]

const RenderProduct = ({ data }) => {
    const { title, path, productDesc, listImages } = data
    const history = useHistory()
    const dispatch = useDispatch()

    const onRedirectByPathname = (path) => {
        history.push(path);
    }

    return (
        <div class="col-12 col-ms-6 col-md-4">
            <div class="product clearfix">
                <div class="product-image">
                    {listImages && listImages.length > 0 && listImages.map((item, index) => {
                        if (listImages.length > 1) {
                            return (
                                <a class={"block-image " + `block-image${index + 1}`} href="" onClick={(e) => onRedirectByPathname(path)}>
                                    <img src={item} />
                                </a>
                            )
                        } else {
                            return (
                                <a class={"block-image "} href="" onClick={(e) => onRedirectByPathname(path)}>
                                    <img src={item} />
                                </a>
                            )
                        }
                    })}
                </div>
                <div class="product-content text-center">
                    <div class="product-title">
                        <h3><a href="" onClick={(e) => onRedirectByPathname(path)}>{title}</a></h3>
                    </div>
                    <div class="product-desc text-center text3line">
                        {productDesc}
                    </div>
                    <div class="view-all text-center">
                        <a class="btn btn-block" href="" onClick={(e) => onRedirectByPathname(path)} >Chi ti???t</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
const ProductCollections = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className='product-collections'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.COLLECTIONS,
                        title: "Gi?? k???"
                    }
                ]}
            />
            <section className="content">
                <div className="content-wrap">
                    <div className="collection-description" >
                        <div className="container">
                            <h3>
                                <span >MYTEK L?? NH?? S???N XU???T GI?? K??? CH???A H??NG CHUY??N NGHI???P</span>
                            </h3>
                            <div class="rte-col3">
                                <RenderCol
                                    col={col_1}
                                />
                                <RenderCol
                                    col={col_2}
                                />
                                <RenderCol
                                    col={col_3}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="list-product">
                    <div className="container">
                        <div className="row">
                            {listProDuct && listProDuct.length > 0 && listProDuct.map((item, index) => {
                                return (
                                    <RenderProduct
                                        data={item}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ProductCollections