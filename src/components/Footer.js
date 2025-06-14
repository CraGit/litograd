"use client";

import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { usePathname } from "next/navigation";

const translations = {
  "en-us": {
    contactInfo: "Contact Info",
    support: "Support",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  hr: {
    contactInfo: "Kontakt",
    support: "Podrška",
    privacyPolicy: "Pravila privatnosti",
    terms: "Uvjeti korištenja",
  },
};

export function Footer({ settings }) {
  const pathname = usePathname();
  // Extract current locale from pathname, fallback to 'en-us' if not found
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLang =
    pathSegments[0] && ["en-us", "hr"].includes(pathSegments[0])
      ? pathSegments[0]
      : "en-us";

  const t = translations[currentLang] || translations["en-us"];
  return (
    <>
      <div className="footer__one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer__one-cta">
                <div className="row al-center">
                  <div className="col-lg-8 lg-t-center lg-mb-25">
                    <div className="footer__one-cta-title title_split_anim">
                      <h2>
                        {settings.data.footer_cta ||
                          "Your Dream Project Awaits — Get Started Today!"}
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="footer__one-cta-icon t-right lg-t-center wow fadeInDown"
                      data-wow-delay="1.2s"
                    >
                      {settings.data.footer_cta_link?.url ? (
                        <PrismicNextLink field={settings.data.footer_cta_link}>
                          <i className="flaticon-right-up"></i>
                        </PrismicNextLink>
                      ) : (
                        settings.data.quote?.url && (
                          <PrismicNextLink field={settings.data.quote}>
                            <i className="flaticon-right-up"></i>
                          </PrismicNextLink>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="footer__one-area">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="footer__one-widget mr-40">
                      {settings.data.logo?.url && (
                        <PrismicNextLink
                          field={{ link_type: "Web", url: "/" }}
                          className="logo"
                        >
                          <img
                            src={settings.data.logo.url}
                            alt={settings.data.logo.alt || "logo"}
                            style={{
                              filter: "invert(1)",
                              width: "180px",
                              height: "auto",
                            }}
                          />
                        </PrismicNextLink>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 sm-mt-30">
                    <div className="footer__one-widget address">
                      <h4>{t.contactInfo}</h4>
                      <div className="footer__one-widget-address">
                        {settings.data.address && (
                          <h6>
                            <div>
                              <a
                                href={`https://www.google.com/maps/search/${encodeURIComponent(settings.data.address + (settings.data.place ? ", " + settings.data.place : ""))}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {settings.data.address}
                              </a>
                            </div>
                            {settings.data.place && (
                              <div>
                                <a
                                  href={`https://www.google.com/maps/search/${encodeURIComponent(settings.data.address + ", " + settings.data.place)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {settings.data.place}
                                </a>
                              </div>
                            )}
                          </h6>
                        )}
                        {settings.data.phone && (
                          <h4>
                            <a href={`tel:${settings.data.phone}`}>
                              {settings.data.phone}
                            </a>
                          </h4>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 lg-mt-30">
                    <div className="footer__one-widget address">
                      <h4>{t.support}</h4>
                      <div className="footer-widget-menu">
                        <ul>
                          <li>
                            <a href="/privacy-policy">{t.privacyPolicy}</a>
                          </li>
                          <li>
                            <a href="/terms">{t.terms}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row al-center">
            <div className="col-md-7">
              <div className="copyright__area-content md-t-center md-mb-10">
                <p>
                  Copyright 2025 – All Rights Reserved By{" "}
                  <span>{settings.data.company_name}</span> Web by{" "}
                  <a href="https://www.killerclick.com" target="_blank">
                    KillerClick
                  </a>
                </p>
              </div>
            </div>
            {/* <div className="col-md-5">
              <div className="copyright__area-social t-right md-t-center">
                <ul>
                  {settings.data.facebook_link?.url && (
                    <li>
                      <PrismicNextLink
                        field={settings.data.facebook_link}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </PrismicNextLink>
                    </li>
                  )}
                  {settings.data.twitter_link?.url && (
                    <li>
                      <PrismicNextLink
                        field={settings.data.twitter_link}
                        target="_blank"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </PrismicNextLink>
                    </li>
                  )}
                  {settings.data.linkedin_link?.url && (
                    <li>
                      <PrismicNextLink
                        field={settings.data.linkedin_link}
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </PrismicNextLink>
                    </li>
                  )}
                  {settings.data.instagram_link?.url && (
                    <li>
                      <PrismicNextLink
                        field={settings.data.instagram_link}
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </PrismicNextLink>
                    </li>
                  )}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
