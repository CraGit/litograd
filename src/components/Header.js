"use client";

import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderClient } from "./HeaderClient";
import { LanguageSwitcher } from "./LanguageSwitcher";

const localeLabels = {
  "en-us": "EN",
  hr: "HR",
};

export function Header({ locales = [], navigation, settings }) {
  const pathname = usePathname();
  // Extract current locale from pathname, fallback to 'en-us' if not found
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale =
    pathSegments[0] && ["en-us", "hr"].includes(pathSegments[0])
      ? pathSegments[0]
      : "en-us";
  const homeUrl = `/${currentLocale}`;

  console.log("Header - current locale:", currentLocale);
  console.log("Header - locales received:", locales);
  console.log("Header - navigation:", navigation);

  return (
    <>
      <HeaderClient />
      <div className="header__area">
        <div className="custom_container">
          <div className="header__area-menubar">
            {/* Left - Logo */}
            <div className="header__area-menubar-left one">
              <div className="header__area-menubar-left-logo">
                <Link href={homeUrl}>
                  <span className="visually-hidden">Go to homepage</span>
                  {prismic.isFilled.image(settings.data.logo) ? (
                    <PrismicNextImage field={settings.data.logo} alt="Logo" />
                  ) : (
                    <img src="/assets/img/logo-1.png" alt="BuildGo" />
                  )}
                </Link>
              </div>
            </div>

            {/* Center - Navigation Menu */}
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <ul style={{ gap: "20px", justifyContent: "flex-end" }}>
                  {navigation.data?.links.map((item) => (
                    <li key={prismic.asText(item.label)}>
                      <PrismicNextLink field={item.link}>
                        <PrismicText field={item.label} />
                      </PrismicNextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Language switcher and action buttons */}
            <div className="header__area-menubar-right">
              {/* Language Switcher */}
              <LanguageSwitcher locales={locales} />

              {/* CTA Button */}
              <div className="header__area-menubar-right-btn one">
                {prismic.isFilled.link(settings.data.quote) ? (
                  <PrismicNextLink
                    field={settings.data.quote}
                    className="build_button"
                  >
                    {settings.data.quote.text || "Get Quote"}
                    <i className="flaticon-right-up"></i>
                  </PrismicNextLink>
                ) : (
                  <a href="#contact" className="build_button">
                    Get Quote
                    <i className="flaticon-right-up"></i>
                  </a>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="header__area-menubar-right-sidebar-icon d-lg-none">
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box Overlay - REMOVED */}
      </div>

      {/* Mobile Sidebar */}
      <div className="header__area-menubar-right-sidebar-popup">
        <div className="sidebar-close-btn">
          <i className="fas fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link href={homeUrl}>
            {prismic.isFilled.image(settings.data.logo) ? (
              <PrismicNextImage field={settings.data.logo} alt="Logo" />
            ) : (
              <img src="/assets/img/logo-2.png" alt="BuildGo" />
            )}
          </Link>
        </div>
        <p>
          We are a company that focuses on construction, engineering, and
          architectural design.
        </p>

        {/* Mobile Navigation Menu */}
        <div className="header__area-menubar-right-sidebar-popup-menu">
          <nav>
            <ul>
              {navigation.data?.links.map((item) => (
                <li key={prismic.asText(item.label)}>
                  <PrismicNextLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="header__area-menubar-right-sidebar-popup-contact">
          <h4>Get In Touch</h4>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>+385 1 234 5678</h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>info@buildgo.hr</h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>Zagreb, Croatia</h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div className="sidebar-overlay"></div>
    </>
  );
}
