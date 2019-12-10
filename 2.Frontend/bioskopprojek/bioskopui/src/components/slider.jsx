import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/styles/movie_1500x580/rcf/news/A4_horz_brandburst_1500x580.jpg?itok=4MqI9imW" alt=""/>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://www.tripsavvy.com/thmb/JBNu3OUV7bLUrNki_H9zjMC_ikI=/3072x1889/filters:fill(auto,1)/GettyImages-50697848-fd819e7d513b406fad405bad3e4b8a97.jpg" alt="" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://cdn.celluloidjunkie.com/wp-content/uploads/2018/04/19172342/CinepolisOrlando-0010.jpg" alt="" />
                    <p className="legend"></p>
                </div>
            </Carousel>
        );
    }
};
 


export default Slider