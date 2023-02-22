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


const col_1 = [
    {
        isTitleMain: true,
        title: "Kệ để hàng nặng"
    },
    {
        isTitleMain: false,
        title: "Kệ Drive-in",
        path: PATH_NAME.KE_DRIVER_IN
    },
    {
        isTitleMain: false,
        title: "Kệ Selective",
        path: PATH_NAME.KE_SELECTIVE
    },
    {
        isTitleMain: false,
        title: "Kệ Double Deep",
        path: PATH_NAME.KE_DOUBLE_DEEP
    },
    {
        isTitleMain: false,
        title: "Kệ Narrow Aisle",
        path: PATH_NAME.KE_NARROW_AISLE
    },
    {
        isTitleMain: false,
        title: "Kệ Pallet di động (Heavy duty mobile)",
        path: PATH_NAME.KE_PALLET_DI_DONG
    },
    {
        isTitleMain: false,
        title: "Kệ con lăn (Pallet flow rack)",
        path: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK
    },
    {
        isTitleMain: false,
        title: "Kệ Pushback",
        path: PATH_NAME.KE_PUSH_BACK
    },
    {
        isTitleMain: false,
        title: "Kệ tay đỡ (Cantilever rack)",
        path: PATH_NAME.KE_TAY_DO
    },
    {
        isTitleMain: false,
        title: "Kệ khuôn (Mould rack)",
        path: PATH_NAME.KE_DE_KHUON_MOULD_RACK
    },

]

const col_2 = [
    {
        isTitleMain: true,
        title: "Kệ để hàng trung tải"
    },
    {
        isTitleMain: false,
        title: "Kệ trung tải (Medium duty shelving)",
        path: PATH_NAME.KE_TRUNG_TAI
    },
    {
        isTitleMain: false,
        title: "Kệ con lăn trung tải (Medium duty flow rack)",
        path: PATH_NAME.KE_CON_LAN_TRUNG_TAI
    },
    {
        isTitleMain: true,
        title: "Kệ để hàng nhẹ"
    },
    {
        isTitleMain: false,
        title: "Kệ V hoa",
        path: PATH_NAME.KE_V_HOA
    },
    {
        isTitleMain: false,
        title: "Kệ V lỗ",
        path: PATH_NAME.KE_V_LO
    },
    {
        isTitleMain: true,
        title: "Kệ sàn (Mezzanine)",
        path: PATH_NAME.KE_SAN_MEZZANINE
    },
]

const col_3 = [
    {
        isTitleMain: true,
        title: "Kệ xếp chồng (Stacking rack)",
        path: PATH_NAME.KE_XEP_CHONG
    },
    {
        isTitleMain: true,
        title: "Kệ để hàng tự động (Radio shuttle)",
        path: PATH_NAME.KE_DE_HANG_BAN_TU_DONG
    },
    {
        isTitleMain: true,
        title: "Kệ siêu thị",
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
                            ►
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
        title: "Kệ Drive-in",
        path: PATH_NAME.KE_DRIVER_IN,
        listImages: [product_ke_driver_in_img1, product_ke_driver_in_img2],
        productDesc: "Giải pháp này cho chi phí đầu tư thấp nhưng sức chứa pallet trong kho hàng cao hơn nhiều. Sử dụng được tối đa không gian kho chứa hàng thuận lợi cho...",
    },
    {
        title: "Kệ Selective",
        path: PATH_NAME.KE_SELECTIVE,
        listImages: [product_ke_selective_img1, product_ke_selective_img2],
        productDesc: "Cho phép sử dụng tất cả pallet hàng dễ dàng điều chỉnh thanh đỡ ngang (beam) phù hợp với bất kỳ kích thước hay trọng lượng pallet hàng hóa, có thể ứng...",
    },
    {
        title: "Kệ Double Deep",
        path: PATH_NAME.KE_DOUBLE_DEEP,
        listImages: [product_ke_double_deep_img1, product_ke_double_deep_img2],
        productDesc: "Sức chứa hàng hóa trong kho cao hơn so với kệ Selective tải trọng hàng hóa từ 1000kg-6000kg/ tầng. Vốn đầu tư cơ bản ước tính ngang bẳng với kệ...",
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
        <div class="col-xs-12 col-sm-4">
            <div class="product clearfix">
                <div class="product-image">
                    {listImages && listImages.length > 0 && listImages.map((item, index) => {
                        if (listImages.length > 1) {
                            return (
                                <a class={"block-image " + `block-image${index + 1}`} onClick={(e) => onRedirectByPathname(path)}>
                                    <img src={item} />
                                </a>
                            )
                        } else {
                            return (
                                <a class={"block-image "} onClick={(e) => onRedirectByPathname(path)}>
                                    <img src={item} />
                                </a>
                            )
                        }
                    })}
                </div>
                <div class="product-content text-center">
                    <div class="product-title">
                        <h3><a onClick={(e) => onRedirectByPathname(path)}>{title}</a></h3>
                    </div>
                    <div class="product-desc text-center text3line">
                        {productDesc}
                    </div>
                    <div class="view-all text-center">
                        <a class="btn btn-block" href="/products/ke-drive-in">Chi tiết</a>
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
                        title: "Giá kệ"
                    }
                ]}
            />
            <section className="content">
                <div className="content-wrap">
                    <div className="collection-description" >
                        <div className="container">
                            <h3>
                                <span >MYTEK LÀ NHÀ SẢN XUẤT GIÁ KỆ CHỨA HÀNG CHUYÊN NGHIỆP</span>
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