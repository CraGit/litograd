import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

export default function AboutUs({ slice }) {
  const {
    heading,
    overtitle,
    content,
    subheadingOne,
    contentOne,
    subheadingTwo,
    contentTwo,
    button,
    imageLeft,
    imageRight,
  } = slice.primary;

  return (
    <div className="about__one section-padding">
      <div className="container">
        <div className="row al-end">
          <div className="col-lg-7 lg-mb-25">
            <div className="about__one-left">
              <div className="about__one-left-title">
                {overtitle && (
                  <span
                    className="subtitle wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    {overtitle}
                  </span>
                )}
                {heading && (
                  <h2 className="wow fadeInRight" data-wow-delay=".6s">
                    {heading}
                  </h2>
                )}
                {content && <p className="mt-20">{content}</p>}
              </div>
              <div className="row al-center mt-45">
                <div className="col-md-4 md-mb-25">
                  <div
                    className="about__one-left-image wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    {imageLeft && (
                      <PrismicNextImage
                        field={imageLeft}
                        className="md_img_full"
                        alt={imageLeft.alt || "About image"}
                      />
                    )}
                  </div>
                </div>
                <div className="col-md-8 pl-50 xl-pl-10">
                  <div className="about__one-left-list">
                    {subheadingOne && contentOne && (
                      <div
                        className="about__one-left-list-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <i className="flaticon-technology"></i>
                        <div className="about__one-left-list-item-content">
                          <h4>{subheadingOne}</h4>
                          <p>{contentOne}</p>
                        </div>
                      </div>
                    )}
                    {subheadingTwo && contentTwo && (
                      <div
                        className="about__one-left-list-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <i className="flaticon-team"></i>
                        <div className="about__one-left-list-item-content">
                          <h4>{subheadingTwo}</h4>
                          <p>{contentTwo}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {button?.url && (
                    <div className="wow fadeInDown" data-wow-delay="1.2s">
                      <Link
                        className="build_button mt-40"
                        href={button.url}
                        target={button.target || undefined}
                        style={{ textDecoration: 'none' }}
                      >
                        {button.text || "Discover more"}
                        <i className="flaticon-right-up"></i>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about__one-right t-right">
              {imageRight && (
                <PrismicNextImage
                  field={imageRight}
                  className="wow img_right_animation lg_img_full"
                  alt={imageRight.alt || "About main image"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
