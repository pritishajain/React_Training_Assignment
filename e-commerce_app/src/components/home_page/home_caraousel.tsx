import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuxuryFaucetsCollection ,Discount } from "../../assets/constants/constant";
import luxuryf from "../../assets/images/luxuryf.jpg";
import luxuryf1 from "../../assets/images/luxuryf1.jpg";
import luxuryf2 from "../../assets/images/luxuryf2.jpg";
import "../../assets/css/home.css";

const HomeCaraousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <React.Fragment>
      <div className="hcontent">
        <Slider {...settings}>
          <div className="image-box">
            <div className="carouselcontent">
              <p className="hhead">{LuxuryFaucetsCollection}</p>
            <p className="hchild">{Discount}</p>
            </div>
            <img src={luxuryf} alt="caraousel" width="100%"></img>
          </div>

          <div className="image-box">
            <div className="carouselcontent">
              <p className="hhead">{LuxuryFaucetsCollection}</p>
              <p className="hchild">{Discount}</p>
            </div>
            <img src={luxuryf1} alt="caraousel" width="100%"></img>
          </div>

          <div className="image-box">
            <div className="carouselcontent">
              <p className="hhead">{LuxuryFaucetsCollection}</p>
              <p className="hchild">{Discount}</p>
            </div>
            <img src={luxuryf2} alt="caraousel" width="100%"></img>
          </div>
          
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default HomeCaraousel;
