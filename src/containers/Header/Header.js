import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { TYPE_USER } from '../../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss"
const src = "https://onetechvietnam.com/wp-content/uploads/2022/07/logo-website-onetech-vietnam.png"

const ElementColumn = () => {
    return (
        <div class="elementor-column col-4" data-id="5fcb72ee" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-19c5c969 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="19c5c969" data-element_type="widget" data-widget_type="icon-box.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-icon-box-wrapper">
                            <div class="elementor-icon-box-icon">
                                <span class="elementor-icon elementor-animation-">
                                    {/* <i aria-hidden="true" class="far fa-check-circle"></i> */}
                                    {/* <i class="fa fa-check-circle-o" aria-hidden="true"></i> */}
                                    <FontAwesomeIcon icon="fa-sharp fa-regular fa-circle-check" />
                                </span>
                            </div>
                            <div class="elementor-icon-box-content">
                                <span class="elementor-icon-box-title">
                                    <span>
                                        Tư vấn, thiết kế 3D
                                    </span>
                                </span>
                                <p class="elementor-icon-box-description">
                                    Hoàn toàn miễn phí
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const onRedirectHome = () => {
        history.push("/")
    }

    return (
        <div className='header'>
            <div className="container container-header">
                <div className="row gutters-0 w-100">
                    <div className="col-12 col-ms-6 col-lg-4 navbar-logo item-center">
                        <div onClick={onRedirectHome}>
                            <img className="img-logo" src={src} />
                        </div>
                    </div>
                    <div class="elementor-container elementor-column-gap-default col-12 col-ms-6 col-lg-8 ">
                        <div class="row w-100 gutters-0">
                            <ElementColumn />
                            <ElementColumn />
                            <ElementColumn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header