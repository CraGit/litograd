"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

export default function Testimonials({ slice }) {
  const { heading, overtitle, testimonial } = slice.primary;

  const slideControl = {
    spaceBetween: 25,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial_next",
      prevEl: ".testimonial_prev",
    },
    // Touch sensitivity settings for mobile
    touchRatio: 0.7,
    touchAngle: 45,
    threshold: 10,
    longSwipesRatio: 0.3,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    touchMoveStopPropagation: false,
    simulateTouch: true,
    touchStartPreventDefault: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        touchRatio: 0.5, // Less sensitive on mobile
        threshold: 15, // Higher threshold on mobile
      },
      768: {
        slidesPerView: 1.4,
        touchRatio: 0.7,
        threshold: 10,
      },
      1025: {
        slidesPerView: 2.4,
      },
      1600: {
        slidesPerView: 2.5,
      },
    },
  };

  return (
    <div className="testimonial__one section-padding">
      <div className="container">
        <div className="row al-end mb-60">
          <div className="col-xl-6 col-lg-8">
            <div className="testimonial__one-title lg-t-center lg-mb-20">
              {overtitle && (
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  {overtitle}
                </span>
              )}
              {heading && (
                <h2 className="wow fadeInRight" data-wow-delay=".6s">
                  {heading}
                </h2>
              )}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-4 wow fadeInDown"
            data-wow-delay=".4s"
          >
            <div className="slider-arrow jc-end lg-jc-center mb-10">
              <div className="slider-arrow-prev testimonial_prev">
                <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
              </div>
              <div className="slider-arrow-next testimonial_next">
                <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="testimonial_slide swiper lg-pl-10 lg-pr-10 wow fadeInUp data_cursor"
        data-wow-delay=".5s"
        data-cursor-text="Drag"
      >
        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
          {testimonial?.map((item, id) => (
            <SwiperSlide key={id}>
              <div className="testimonial__one-item">
                <div className="testimonial__one-item-client">
                  <div className="testimonial__one-item-client-title">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
                <p>{item.content}</p>
                <div className="testimonial__one-item-reviews">
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                  <i className="flaticon-star"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
