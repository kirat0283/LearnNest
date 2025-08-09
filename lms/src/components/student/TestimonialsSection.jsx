import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        See what our students are saying about their learning journey and how our platform has helped them unlock their full potential.
      </p>
      
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='text-sm text-left border border-gray-500/30 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
            <div className='px-5 py-4 bg-gray-500/10'>
              <div className='flex items-center gap-4'>
                <img className='h-12 w-12 rounded-full object-cover' src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                  <p className='text-gray-800/80'>{testimonial.role}</p>
                </div>
              </div>
            </div>

           
            <div className='p-5'>
              <div className='flex gap-0.5 mb-3'>
                
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5 w-5'
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
