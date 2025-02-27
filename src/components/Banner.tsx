import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BannerSlide {
  image: string;
  title: string;
  description: string;
  whatsappNumber: string;
}

const Banner = () => {
  const [slides] = useState<BannerSlide[]>([
    {
      image: '/images/banner-first.jpg',
      title: 'Welcome to PinkcityNagari',
      description: 'Discover the best experiences in Jaipur',
      whatsappNumber: '918003041823'
    },
    {
      image: '/images/banner-second.jpg',
      title: 'Explore Jaipur',
      description: 'Find your perfect companion',
      whatsappNumber: '918003041823'
    },
    {
      image: '/images/banner-third.jpg',
      title: 'Premium Services',
      description: 'Quality and discretion guaranteed',
      whatsappNumber: '918003041823'
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false
  };

  const handleSlideClick = (whatsappNumber: string) => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-screen cursor-pointer"
            onClick={() => handleSlideClick(slide.whatsappNumber)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                {slide.description}
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-colors duration-300 animate-fade-in-delay-2">
                Contact Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;