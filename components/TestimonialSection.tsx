'use client'

import SectionHeading from "@/components/SectionHeading"
import {reviews} from "@/constants"
import {ChevronLeft, ChevronRight, Star} from "lucide-react"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css'
import {useEffect, useRef, useState} from "react";
import {useWindowsSize} from "@/hooks/useWindowsSize";

const TestimonialSection = () => {
    const swiperRef = useRef<SwiperType>()
    const [ sliderPerView, setSliderPerView ] = useState(3)

    const { width } = useWindowsSize()

    useEffect(() => {
        if (width < 768) {
            setSliderPerView(1)
        } else if (width < 1268) {
            setSliderPerView(2)
        } else {
            setSliderPerView(3)
        }
    }, [width]);

  return (
      <section className='max-width section-padding'>
        <SectionHeading title='Что говорят о нас наши покупатели' subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur magni officiis placeat quidem sunt voluptatum?'/>
        <div>
          <div className='pb-3 border-b border-peach flex justify-between items-center'>
            <p>Всего отзывов: {reviews.length}</p>
            <div className='flex gap-2'>
              <button className='bg-peach-200 border border-paech p-1 rounded text-grey-700' onClick={() => swiperRef.current?.slidePrev()}>
                  <ChevronLeft />
              </button>
              <button className='bg-peach-200 border border-paech p-1 rounded text-grey-700' onClick={() => swiperRef.current?.slideNext()}>
                  <ChevronRight />
              </button>
            </div>
          </div>
          <div className='pt-8'>
              <Swiper spaceBetween={20} slidesPerView={sliderPerView} loop={true} onSwiper={(swiper) => (swiperRef.current = swiper)}>
                  {reviews.map((review, index) => (
                      <SwiperSlide key={index}>
                          <SingleReview review={review} />
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
        </div>

      </section>
  )
}

export default TestimonialSection

const SingleReview = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
      <div className='box flex flex-col gap-5'>
          <div className='flex items-center justify-between'>
              <div>
                  <h6 className='text-grey-700'>{review.name}</h6>
                  <p className='text-grey-500 text-sm'>{review.designation}</p>
              </div>
              <div className='flex gap-3 items-center justify-between'>
                  {review.socialLinks.map((link, index) => (
                      <a key={index} href={link.url} className='text-purple hover:scale-105 transition-transform duration-300'>
                          <link.icon strokeWidth={0} fill='currentColor'></link.icon>
                      </a>
                  ))}
              </div>
          </div>
          <div>
              <div className='flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={20} fill='currentColor' className={`text-purple ${index < review.stars ? 'opacity-100' : 'opacity-30'}`}/>
                  ))}
              </div>
          </div>
          <p className='text-grey-600'>{review.review}</p>
      </div>
  )
}