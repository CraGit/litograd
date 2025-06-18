"use client";

import React, { useEffect, useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

export default function Services({ slice }) {
  const { heading, overtitle, content, service, button } = slice.primary;
  const [swiperReady, setSwiperReady] = useState(false);

  // Don't use swiper if there are 3 or fewer services
  const shouldUseSwiper = service && service.length > 3;

  useEffect(() => {
    // Delay Swiper initialization for services
    if (shouldUseSwiper) {
      const timer = setTimeout(() => {
        setSwiperReady(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setSwiperReady(true);
    }
  }, [shouldUseSwiper]);

  const slideControl = {
    spaceBetween: 25,
    slidesPerView: 4,
    speed: 1000,
    loop: shouldUseSwiper && service.length > 4,
    autoplay:
      shouldUseSwiper && swiperReady
        ? {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
          }
        : false,
    navigation: {
      nextEl: ".service_next",
      prevEl: ".service_prev",
    },
    // Prevent initialization issues
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    init: swiperReady,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: shouldUseSwiper ? 4 : Math.min(service?.length || 3, 3),
      },
      1600: {
        slidesPerView: shouldUseSwiper ? 4 : Math.min(service?.length || 3, 3),
      },
    },
  };

  return (
    <div className="services__one section-padding">
      <div className="container">
        <div className="row al-end">
          <div className="col-lg-8">
            <div className="services__one-title lg-t-center lg-mb-20">
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
              {content && (
                <p
                  className="wow fadeInUp"
                  data-wow-delay=".8s"
                  style={{
                    marginTop: "20px",
                    fontSize: "16px",
                    color: "var(--text-color)",
                  }}
                >
                  {content}
                </p>
              )}
            </div>
          </div>
          {shouldUseSwiper && (
            <div className="col-lg-4 wow fadeInDown" data-wow-delay=".4s">
              <div className="slider-arrow jc-end lg-jc-center mb-10">
                <div className="slider-arrow-prev service_prev">
                  <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
                </div>
                <div className="slider-arrow-next service_next">
                  <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="row mt-60 wow fadeInUp"
          data-wow-delay=".5s"
          style={{ cursor: shouldUseSwiper ? "grab" : "default" }}
          data-cursor-text={shouldUseSwiper ? "Drag" : ""}
        >
          <div className="col-xl-12">
            {shouldUseSwiper ? (
              <Swiper
                modules={[EffectFade, Autoplay, Navigation]}
                {...slideControl}
              >
                {service?.map((item, id) => (
                  <SwiperSlide key={id}>
                    <div
                      className="services__one-item"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="services__one-item-icon">
                        {id === 0 && <i className="flaticon-project"></i>}
                        {id === 1 && (
                          <i className="flaticon-design-thinking"></i>
                        )}
                        {id === 2 && <i className="flaticon-wrench-1"></i>}
                        {id === 3 && <i className="flaticon-data"></i>}
                        {id === 4 && <i className="flaticon-idea-1"></i>}
                        {id > 4 && <i className="flaticon-it-department"></i>}
                      </div>
                      <h4>
                        {item.button?.url ? (
                          <PrismicNextLink field={item.button}>
                            {item.heading}
                          </PrismicNextLink>
                        ) : (
                          item.heading
                        )}
                      </h4>
                      {item.content && (
                        <p
                          style={{
                            margin: "15px 0",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            color: "var(--text-color)",
                          }}
                        >
                          {item.content}
                        </p>
                      )}
                      {item.button ? (
                        <PrismicNextLink
                          className="more_btn"
                          field={item.button}
                        >
                          {item.button.text}{" "}
                          <i className="flaticon-right-up"></i>
                        </PrismicNextLink>
                      ) : (
                        <div className="more_btn">
                          Read More <i className="flaticon-right-up"></i>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="row">
                {service?.map((item, id) => (
                  <div key={id} className="col-lg-4 col-md-6 mb-30">
                    <div
                      className="services__one-item"
                      style={{ cursor: "pointer", height: "100%" }}
                    >
                      <div className="services__one-item-icon">
                        {id === 0 && <i className="flaticon-project"></i>}
                        {id === 1 && (
                          <i className="flaticon-design-thinking"></i>
                        )}
                        {id === 2 && <i className="flaticon-wrench-1"></i>}
                        {id === 3 && <i className="flaticon-data"></i>}
                        {id === 4 && <i className="flaticon-idea-1"></i>}
                        {id > 4 && <i className="flaticon-it-department"></i>}
                      </div>
                      <h4>
                        {item.button?.url ? (
                          <PrismicNextLink field={item.button}>
                            {item.heading}
                          </PrismicNextLink>
                        ) : (
                          item.heading
                        )}
                      </h4>
                      {item.content && (
                        <p
                          style={{
                            margin: "15px 0",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            color: "var(--text-color)",
                          }}
                        >
                          {item.content}
                        </p>
                      )}
                      {item.button ? (
                        <PrismicNextLink
                          className="more_btn"
                          field={item.button}
                        >
                          {item.button.text}{" "}
                          <i className="flaticon-right-up"></i>
                        </PrismicNextLink>
                      ) : (
                        <div className="more_btn">
                          Read More <i className="flaticon-right-up"></i>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {button?.url && (
          <div className="row mt-40">
            <div className="col-12 text-center">
              <PrismicNextLink
                field={button}
                className="build_button wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "200px",
                  padding: "15px 30px",
                }}
              >
                {button.text || "View All Services"}
                <i
                  className="flaticon-right-up"
                  style={{ marginLeft: "10px" }}
                ></i>
              </PrismicNextLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
