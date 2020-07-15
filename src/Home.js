import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    return (
        <Carousel>
            <div>
                <img alt="banner" src="http://splashythemes.com/opencart/OPC01/OPC010032/image/cache/catalog/demo/banners/main-banner3-1903x820.jpg" />
            </div>
            <div>
                <img alt="banner" src="http://splashythemes.com/opencart/OPC01/OPC010032/image/cache/catalog/demo/banners/main-banner1-1903x820.jpg" />
            </div>
        </Carousel>
    )
}
