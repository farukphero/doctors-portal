import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import icon from '../../../assets/icons/quote.svg'
import Reviews from './Reviews';
 

const Testimonial = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]

    return (
       <section>
        <div  className='flex justify-between'>
         <div>
         <h3 className='text-secondary font-semibold p-2 md:p-0'>Testimonial</h3>
          <h1 className='text-3xl md:text-4xl p-2 md:p-0'>What Our Patients Says</h1>
         </div>
         <div>
            <img className='w-24 md:w-48' src={icon} alt="" />
         </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
            {
                reviews.map(review=> <Reviews
                
                key={review.id}
                review={review}
                >

                </Reviews>)
            }
        </div>
       </section>
    );
};

export default Testimonial;