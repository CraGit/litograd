"use client";

import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export default function Contact({ slice, settings }) {
  const [formData, setFormData] = useState({
    name: "",
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
          <div className="col-lg-5 lg-mb-25">
            <div className="contact__area-left mr-40 xl-mr-0">
              <div className="title">
                {slice?.primary?.overtitle && (
                  <span
                    className="subtitle wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    {slice.primary.overtitle}
                  </span>
                )}
                {slice?.primary?.heading && (
                  <PrismicRichText
                    field={slice.primary.heading}
                    components={{
                      heading1: ({ children }) => (
                        <h2 className="title_split_anim mb-25">{children}</h2>
                      ),
                      heading2: ({ children }) => (
                        <h2 className="title_split_anim mb-25">{children}</h2>
                      ),
                    }}
                  />
                )}
                {slice?.primary?.description && (
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                    <PrismicRichText field={slice.primary.description} />
                  </div>
                )}
              </div>
              <div
                className="contact__area-left-contact wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="contact__area-left-contact-item">
                  <div className="contact__area-left-contact-item-icon">
                    <i className="flaticon-phone"></i>
                  </div>
                  <div className="contact__area-left-contact-item-content">
                    <span>{slice?.primary?.phone_label || "Phone:"}</span>
                    <h6>
                      <Link
                        href={`tel:${settings?.data?.phone || "+123 (256) 568 58"}`}
                      >
                        {settings?.data?.phone || "+123 (256) 568 58"}
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-left-contact-item">
                  <div className="contact__area-left-contact-item-icon">
                    <i className="flaticon-email-3"></i>
                  </div>
                  <div className="contact__area-left-contact-item-content">
                    <span>
                      {slice?.primary?.email_label || "Email Address:"}
                    </span>
                    <h6>
                      <Link
                        href={`mailto:${settings?.data?.email || "needhelp@gmail.com"}`}
                      >
                        {settings?.data?.email || "needhelp@gmail.com"}
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-left-contact-item">
                  <div className="contact__area-left-contact-item-icon">
                    <i className="flaticon-location-1"></i>
                  </div>
                  <div className="contact__area-left-contact-item-content">
                    <span>{slice?.primary?.location_label || "Location:"}</span>
                    <h6>
                      <Link
                        href={
                          settings?.data?.google_map_embed ||
                          "https://google.com/maps"
                        }
                        target="_blank"
                      >
                        {settings?.data?.address && settings?.data?.place
                          ? `${settings.data.address}, ${settings.data.place}`
                          : "2464 Royal Ln. Mesa, New Jersey 45463"}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay=".4s">
            <div className="contact__area-form">
              <h4>{slice?.primary?.form_title || "Send Message"}</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-25">
                    <div className="contact__form-area-item">
                      <input
                        type="text"
                        name="name"
                        placeholder={
                          slice?.primary?.name_placeholder || "Full Name"
                        }
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 md-mb-25">
                    <div className="contact__form-area-item">
                      <input
                        type="email"
                        name="email"
                        placeholder={
                          slice?.primary?.email_placeholder || "Email Address"
                        }
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-25">
                    <div className="contact__form-area-item">
                      <input
                        type="text"
                        name="subject"
                        placeholder={
                          slice?.primary?.subject_placeholder || "Subject"
                        }
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-25">
                    <div className="contact__form-area-item">
                      <textarea
                        name="message"
                        placeholder={
                          slice?.primary?.message_placeholder || "Message"
                        }
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact__form-area-item">
                      <button className="build_button" type="submit">
                        {slice?.primary?.submit_button_text || "Submit Message"}
                        <i className="flaticon-right-up"></i>
                      </button>
                    </div>
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
