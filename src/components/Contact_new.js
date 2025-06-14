"use client";

import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";

export default function Contact({ slice, settings }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact__area-title t-center">
              {slice?.primary?.overtitle && (
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  {slice.primary.overtitle}
                </span>
              )}
              {slice?.primary?.heading && (
                <PrismicRichText
                  field={slice.primary.heading}
                  components={{
                    heading1: ({ children }) => (
                      <h2 className="title_split_anim">{children}</h2>
                    ),
                    heading2: ({ children }) => (
                      <h2 className="title_split_anim">{children}</h2>
                    ),
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 lg-mb-25">
            <div className="contact__area-left">
              {slice?.primary?.description && (
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <PrismicRichText field={slice.primary.description} />
                </div>
              )}

              <div className="contact__area-left-info">
                {settings?.data?.phone && (
                  <div
                    className="contact__area-left-info-item wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="contact__area-left-info-item-icon">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="contact__area-left-info-item-content">
                      <h4>Phone:</h4>
                      <a href={`tel:${settings.data.phone}`}>
                        {settings.data.phone}
                      </a>
                    </div>
                  </div>
                )}

                {settings?.data?.email && (
                  <div
                    className="contact__area-left-info-item wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="contact__area-left-info-item-icon">
                      <i className="flaticon-email"></i>
                    </div>
                    <div className="contact__area-left-info-item-content">
                      <h4>Email Address:</h4>
                      <a href={`mailto:${settings.data.email}`}>
                        {settings.data.email}
                      </a>
                    </div>
                  </div>
                )}

                {(settings?.data?.address || settings?.data?.place) && (
                  <div
                    className="contact__area-left-info-item wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <div className="contact__area-left-info-item-icon">
                      <i className="flaticon-location"></i>
                    </div>
                    <div className="contact__area-left-info-item-content">
                      <h4>Location:</h4>
                      <p>
                        {settings.data.address}
                        {settings.data.address && settings.data.place && ", "}
                        {settings.data.place}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact__area-right">
              <div className="contact__area-right-title">
                <h3 className="wow fadeInUp" data-wow-delay=".4s">
                  Send Message
                </h3>
              </div>
              <form
                onSubmit={handleSubmit}
                className="contact__area-right-form"
              >
                <div className="row">
                  <div
                    className="col-md-6 mb-25 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div
                    className="col-md-6 mb-25 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div
                    className="col-md-12 mb-25 wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div
                    className="col-md-12 mb-25 wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 wow fadeInUp" data-wow-delay="1.4s">
                    <button type="submit" className="build_button">
                      Submit Message
                      <i className="flaticon-right-up"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
