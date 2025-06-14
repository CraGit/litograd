"use client";

import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

const translations = {
  "en-us": {
    home: "Home",
  },
  hr: {
    home: "Početna",
  },
};

export default function SmallHero({ slice }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLang =
    pathSegments[0] && ["en-us", "hr"].includes(pathSegments[0])
      ? pathSegments[0]
      : "en-us";

  const t = translations[currentLang] || translations["en-us"];
  const { heading, image } = slice.primary;

  return (
    <div
      className="breadcrumb__area"
      style={{
        backgroundImage: image?.url ? `url(${image.url})` : "none",
        backgroundColor: image?.url ? "transparent" : "#222222",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb__area-content">
              {heading && <h2>{heading}</h2>}
              <ul>
                <li>
                  <PrismicNextLink
                    field={{ link_type: "Web", url: `/${currentLang}` }}
                  >
                    {t.home}
                  </PrismicNextLink>
                  <i className="fa-regular fa-angle-right"></i>
                </li>
                <li>{heading}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
