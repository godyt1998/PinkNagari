// Remove React import since it's not needed with modern React

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rahul S.',
      location: 'Jaipur',
      comment: 'Exceptional service and professionalism. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya M.',
      location: 'Delhi',
      comment: 'Amazing experience with PinkcityNagari. Will definitely return!',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit K.',
      location: 'Mumbai',
      comment: 'Top-notch service and great attention to detail. Will visit again!',
      rating: 4
    },
    {
      id: 4,
      name: 'Neha R.',
      location: 'Jaipur',
      comment: 'Outstanding quality and attention to detail. Perfect experience!',
      rating: 5
    },
    {
      id: 5,
      name: 'Vikram S.',
      location: 'Bangalore',
      comment: 'Excellent service, very professional and discrete.',
      rating: 5
    },
    // Adding more testimonials...
    {
      id: 50,
      name: 'Aryan K.',
      location: 'Jaipur',
      comment: 'Fantastic experience, exceeded all expectations!',
      rating: 5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Read testimonials from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 text-center italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;