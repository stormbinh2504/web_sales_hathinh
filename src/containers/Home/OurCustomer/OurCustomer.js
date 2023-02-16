import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./OurCustomer.scss"
import { useEffect } from 'react';

const listOurCustomer = [
    {
        id: "1",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client1.png?v=1455",
    },
    {
        id: "2",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client2.png?v=1455",
    },
    {
        id: "3",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client3.png?v=1455",
    },
    {
        id: "4",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client4.png?v=1455",
    },
    {
        id: "5",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client5.png?v=1455",
    },
    {
        id: "6",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client6.png?v=1455",
    },
    {
        id: "7",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client7.png?v=1455",
    },
    {
        id: "8",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client8.png?v=1455",
    },
    {
        id: "9",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client9.png?v=1455",
    },
    {
        id: "10",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client10.png?v=1455",
    },

    {
        id: "11",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client11.png?v=1455",
    },
    {
        id: "12",
        image: "//theme.hstatic.net/200000335999/1000709370/14/logo_client12.png?v=1455",
    },
]

const OurCustomer = () => {
    return (

        <div id="our-customer" className="our-customer">
            <div class="container">
                <div class="section-heading text-center">
                    <h2 class="section-title">Khách hàng của chúng tôi</h2>
                </div>
                <div className="row">
                    {listOurCustomer && listOurCustomer.length > 0 && listOurCustomer.map((item, index) => {
                        return (
                            <div className="col-4 col-sm-3 col-md-2">
                                <div class="img-brand">
                                    <img src={item.image} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurCustomer