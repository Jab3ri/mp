import Slider from "react-slick";
import Image from "next/image";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mt-16">
      <Slider {...settings}>
        <div>
          <div className="relative w-full h-[calc(100vh-4rem)] md:h-[500px]">
            <Image
              src="/images/carousel1.jpg"
              alt="Margbrook Pure"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="relative w-full h-[calc(100vh-4rem)] md:h-[500px]">
            <Image
              src="/images/carousel2.jpg"
              alt="Pure Water"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
        <div>
          <div className="relative w-full h-[calc(100vh-4rem)] md:h-[500px]">
            <Image
              src="/images/carousel3.jpg"
              alt="Delivery Service"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="relative w-full h-[calc(100vh-4rem)] md:h-[500px]">
            <Image
              src="/images/carousel4.jpg"
              alt="Customized Bottles"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        
      </Slider>
    </div>
    
  );
};

export default HeroCarousel;
