import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

export default function Hero({ slice }) {
  const { heading, subheading, image } = slice.primary;

  return (
    <div
      className="banner__one"
      style={{ backgroundImage: "url(/assets/img/shape/banner-shape.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner__one-content">
              <h1 className="wow fadeInRight" data-wow-delay=".4s">
                {heading}
              </h1>
              <div
                className="banner__one-content-user wow fadeInUp"
                data-wow-delay=".6s"
              >
                {/* Styled subheading without background */}
                <h5
                  className="hero-subheading"
                  style={{
                    maxWidth: 600,
                    width: "100%",
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#222",
                    padding: "18px 32px",
                    borderRadius: 12,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  {subheading}
                </h5>
              </div>
              <div
                className="banner__one-content-award bounce_y"
                style={{ bottom: 40 }}
              >
                <Image
                  src="/assets/img/shape/award.png"
                  width={104}
                  height={104}
                  alt="Award"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__one-image">
        {image?.url && (
          <PrismicNextImage
            className="img_full"
            field={image}
            alt={image.alt || "Hero image"}
          />
        )}
      </div>
    </div>
  );
}
