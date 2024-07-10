import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>


            <div className='descriptionbox-description'>
                <p>
                    An e-commerce website is an online platform where customers can purchase products and services directly from sellers. It features a homepage with a search bar, product categories, and promotional banners. Each product page includes high-quality images, detailed descriptions, and customer reviews. Users can add items to their cart and proceed to a secure checkout process, providing billing and shipping information. The site also offers user accounts for tracking orders, managing wishlists, and accessing personalized settings.</p>
                <p>
                    Additionally, the website includes robust search functionality, filter options, and live chat support for customer inquiries. Mobile responsiveness ensures a seamless experience on all devices. With SSL encryption and multiple payment gateway integrations, the platform prioritizes secure transactions and user data protection.

                </p>
            </div>

        </div>
    )
}

export default DescriptionBox