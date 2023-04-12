import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Contact.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';

const Contact = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='contact' className='contact'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.CONTACT,
                        title: "Liên hệ"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='div-map' style={{ height: "300px" }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8864789117674!2d105.90582881476409!3d21.077195785972112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9c42b3dc675%3A0xda50975737666595!2zQ-G6p3UgxJB14buRbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1676727612074!5m2!1svi!2s" style={{ height: "100%", width: "100%", border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="info-company">
                                <li>
                                    <i class="fa fa-building-o" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Công ty sản xuất và thương mại
                                        </strong>
                                    </span>
                                </li>
                                <li>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Nhà máy sản xuất:&nbsp;
                                        </strong>
                                        Phố Hộ Vệ, Lạc Vệ, Tiên Du, Bắc Ninh
                                    </span>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Hotline:&nbsp;
                                        </strong>
                                        0982 535 391
                                    </span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    <span>
                                        <strong>
                                            Email:&nbsp;
                                        </strong>
                                        sales.giakettp@gmail.com
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
export default Contact