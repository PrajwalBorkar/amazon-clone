import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="New Apple iMac Pro (27-inch, 3.0GHz 10-core Intel Xeon W Processor, 32GB RAM, 1TB SSD Storage)"
                        price={5199}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71tJcgL-zPL._SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
                        price={2390}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Sony WH-XB910N Extra BASS Noise Cancelling Headphones, Wireless Bluetooth Over The Ear Headset with Microphone and Alexa Voice Control, Google Fast Pair & Swift Pair, 30 Hours Battery Life - Black"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
