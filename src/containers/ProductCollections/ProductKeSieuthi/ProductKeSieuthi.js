import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductKeSieuthi.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ke_sieu_thi/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ke_sieu_thi/img2.jpg"

const ProductKeSieuthi = () => {
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
                        title: "Kệ siêu thị"
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
                                                            title: "Kệ siêu thị"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Kệ siêu thị Tân Trường Phát Vina sử dụng chất liệu thép, tôn cao cấp và được sản xuất trên dây chuyền máy móc hiện đại, khép kín",
                                                "Sản phẩm được áp dụng công nghệ phun sơn tĩnh điện giúp màu sơn đồng đều, không bị rỉ sét",
                                                "Độ chịu lực của kệ cực tốt, có thể bày hàng trọng lượng từ 50 - 100kg/tầng. Tuổi thọ kệ lâu dài, sử dụng 15 - 20 năm.",
                                            ]}

                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <p></p>
                                                <br />
                                                <p>
                                                    <span style={{ fontSize: "15px" }}>Khách hàng có nhu cầu lắp đặt kệ siêu thị vui lòng liên hệ với chúng tôi để được tư vấn và báo giá chính xác nhất:&nbsp;
                                                    </span>
                                                </p>
                                                <br />
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

export default ProductKeSieuthi