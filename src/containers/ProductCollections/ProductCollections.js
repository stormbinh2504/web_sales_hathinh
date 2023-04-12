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
import product_ke_narrow_aisle_img2 from "../../assets/images/product_collections/product_ke_narrow_aisle/img2.jpg"

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
                                <i className="fa fa-caret-right" aria-hidden="true"></i>
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
    {
        title: "Kệ Narrow Aisle",
        path: PATH_NAME.KE_NARROW_AISLE,
        listImages: [product_ke_narrow_aisle_img1, product_ke_narrow_aisle_img1],
        productDesc: "Các Pallet có thể được chứa ở những vị trí rất cao trong không gian của kho chứa hàng. Chiều ngang của lối đi nhỏ nhất nên tận dụng được diện...",
    },
    {
        title: "Kệ Pallet di động",
        path: PATH_NAME.KE_PALLET_DI_DONG,
        listImages: [product_ke_pallet_di_dong_img1, product_ke_pallet_di_dong_img2],
        productDesc: "Linh hoạt lối đi, tăng khả năng quản lý truy xuất hàng hóaCó sự đa dạng về cách bố trí và thiết kế cho nhiều loại hàng hóa. Hệ thống giá kệ...",
    },
    {
        title: "Kệ con lăn (Pallet Flow Rack)",
        path: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK,
        listImages: [product_ke_con_lan_pallet_flow_rack_img1, product_ke_con_lan_pallet_flow_rack_img2],
        productDesc: "Gia tăng hiệu quả chọn hàng trên nguyên tắc nhập trước xuất trước (FIFO)Vốn đầu tư cơ bản cao hơn so với các loại kệ cùng loại (như Push Back,...",
    },
    {
        title: "Kệ Push Back",
        path: PATH_NAME.KE_PUSH_BACK,
        listImages: [product_ke_push_back_img1, product_ke_push_back_img2],
        productDesc: "Tận dụng được không gian chứa hàng tuyệt hảoPhù hợp cho kho chứa có lượng hàng hóa lớn, chắc chắn,và thời gian xếp dỡ hàng hóa diễn ra nhanh chóng.Có...",
    },
    {
        title: "Kệ tay đỡ (Cantilever rack)",
        path: PATH_NAME.KE_TAY_DO,
        listImages: [product_ke_tay_do_img1, product_ke_tay_do_img2],
        productDesc: "Dễ dàng tháo dỡ, vận chuyển và lắp đặt.Lưu trữ đa dạng hàng hoá có trọng tải và chiều dài lớnLựa chọn vị trí lắp đặt linh hoạt, tay đỡ có...",
    },
    {
        title: "Kệ để khuôn (Mould rack)",
        path: PATH_NAME.KE_DE_KHUON_MOULD_RACK,
        listImages: [product_ke_de_khuon_mould_rack_img1, product_ke_de_khuon_mould_rack_img2],
        productDesc: "Tối ưu hóa không gian nhà xưởng chứa khuôn, giúp quy trình kiểm tra bảo dưỡng định kỳ khuôn mẫu dễ dàng theo tiêu chuẩn công nghiệp.Vận hành an toàn...",
    },
    {
        title: "Kệ trung tải",
        path: PATH_NAME.KE_TRUNG_TAI,
        listImages: [product_ke_trung_tai_img1, product_ke_trung_tai_img2],
        productDesc: "Hệ thống kho chứa hàng cực kỳ linh hoạtThích hợp để lưu trữ hàng hóa có trọng lượng trung bình từ 200-500kg/1 tầng",
    },
    {
        title: "Kệ con lăn trung tải",
        path: PATH_NAME.KE_CON_LAN_TRUNG_TAI,
        listImages: [product_ke_con_lan_trung_tai_img1, product_ke_con_lan_trung_tai_img2],
        productDesc: "Tải trọng 50-80kg / 3 làn roller nhựaKhông cần sử dụng xe nâng, công nhân xuất nhập hàng hóa trực tiếp trên kệTăng khả năng lưu trữ thêm 50%",
    },
    {
        title: "Kệ V hoa",
        path: PATH_NAME.KE_V_HOA,
        listImages: [product_ke_v_hoa_img1, product_ke_v_hoa_img2],
        productDesc: "Là dạng kệ được thiết kế để chưa hàng hóa loại nhẹ từ 50kg/ tầng cho đến 200kg/ tầngLoại kệ này rất đa dụng, dễ tháo lắp, dễ điều chỉnh,...",
    },
    {
        title: "Kệ V lỗ",
        path: PATH_NAME.KE_V_LO,
        listImages: [product_ke_v_lo_img1, product_ke_v_lo_img2],
        productDesc: "Là dạng kệ được thiết kế để chưa hàng hóa loại nhẹ từ 50kg/ tầng cho đến 200kg/ tầngLoại kệ này rất đa dụng, dễ tháo lắp, dễ điều chỉnh,...",
    },
    {
        title: "Kệ sàn Mezzanine",
        path: PATH_NAME.KE_SAN_MEZZANINE,
        listImages: [product_ke_san_mezzanine_img1, product_ke_san_mezzanine_img2],
        productDesc: "Đa dạng về kích thước, thiết kế phù hợp với nhu cầu của khách hàng để mang lại hiệu quả cao nhấtSản phẩm được nghiên cứu và sản xuất theo...",
    },
    {
        title: "Kệ xếp chồng (Stacking rack)",
        path: PATH_NAME.KE_XEP_CHONG,
        listImages: [product_ke_xep_chong_img1, product_ke_xep_chong_img2],
        productDesc: "Các module kệ dạng này có thể được xếp chồng lên nhau tận dụng tối đa không gian nhà khoHàng hóa được giữ nguyên trong kệ khi luân chuyển trong...",
    },
    {
        title: "Kệ để hàng bán tự động",
        path: PATH_NAME.KE_DE_HANG_BAN_TU_DONG,
        listImages: [product_ke_de_ban_hang_tu_dong_img1, product_ke_de_ban_hang_tu_dong_img2],
        productDesc: "Thời gian nhập và xuất hàng nhanh chóng hơn Có cảm biến giúp xác định vị trí pallet cần xuấtTận dụng tối đa diện tích nhà kho, tăng khả năng lưu...",
    },
    {
        title: "Kệ siêu thị",
        path: PATH_NAME.KE_SIEU_THI,
        listImages: [product_ke_sieu_thi_img1, product_ke_sieu_thi_img2],
        productDesc: "Kệ siêu thị Tân Trường Phát Vina sử dụng chất liệu thép, tôn cao cấp và được sản xuất trên dây chuyền máy móc hiện đại, khép kínSản phẩm được áp dụng công nghệ phun...",
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
        <div className="col-12 col-ms-6 col-md-4">
            <div className="product clearfix">
                <div className="product-image">
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
                <div className="product-content text-center">
                    <div className="product-title">
                        <h3><a href="" onClick={(e) => onRedirectByPathname(path)}>{title}</a></h3>
                    </div>
                    <div className="product-desc text-center text3line">
                        {productDesc}
                    </div>
                    <div className="view-all text-center">
                        <a className="btn btn-block" href="" onClick={(e) => onRedirectByPathname(path)} >Chi tiết</a>
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
                                <span className="text-uppercase" >Tân Trường Phát Vina LÀ NHÀ SẢN XUẤT GIÁ KỆ CHỨA HÀNG CHUYÊN NGHIỆP</span>
                            </h3>
                            <div className="rte-col3">
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

                <div className="list-product">
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