import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your content to the following object
  const testimonials = [
    {
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta!',
      name: 'David',
      title: 'Client, Colorado',
      image: './assets/img/testimonials/testimonial-1.png',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta!',
      name: 'Peyton Warren',
      title: 'Business Analyst',
      image: './assets/img/testimonials/testimonial-2.jpg',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero deleniti magnam recusandae. Ab laudantium expedita distinctio accusantium quasi, quas voluptate quaerat voluptatem quod. Optio consequatur ab aliquid illo dicta!',
      name: 'Gary Burton',
      title: 'CEO of A-MFM',
      image: './assets/img/testimonials/testimonial-3.jpg',
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    cssEase: "ease-out",
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    sliderRef.slickGoTo(slideIndex);
  };

  let sliderRef;

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-y-4 md:gap-x-8 gap-x-0 p-5 lg:p-20 border border-slate-400 mt-16 mx-auto'>
      <div className='md:px-4 py-4 flex flex-col justify-center items-center'>
        <h2 className='lg:text-3xl text-2xl font-semibold w-auto'>People love to learn code from LCO.</h2>
        <h2 className='lg:text-xl text-lg text-center md:text-left font-normal py-6 w-auto text-slate-200'>People love to learn code from LCO. People from following companies/universities are registered with us and are active learners</h2>
        <div className='flex justify-center items-start mt-4 w-1/4 gap-4 mr-0 md:mr-6'>
          <button className='text-5xl hover:text-sky-400 transition-all ease-out duration-300' onClick={() => goToSlide(currentSlide - 1)}>&larr;</button>
          <button className='text-5xl hover:text-sky-400 transition-all ease-out duration-300' onClick={() => goToSlide(currentSlide + 1)}>&rarr;</button>
        </div>
      </div>
      <div className='col-span-2 text-slate-300'>
        <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
          {testimonials.map((testimonial, index) => (
            <div className='mb-5' key={index}>
              <div className='bg-slate-600 lg:p-8 p-4 mb-6'>
                <p className='md:text-lg text-normal italic'>{testimonial.quote}</p>
              </div>
              <div className='flex gap-4 items-center'>
                <div className=''>
                  <img src={testimonial.image} alt={`testimonial ${index + 1}`} className='rounded-full' />
                </div>
                <div className='text-white'>
                  <h3 className='font-bold text-lg'>{testimonial.name}</h3>
                  <p className='text-gray-400'>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
