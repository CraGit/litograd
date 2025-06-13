"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const localeLabels = {
  "en-us": "EN",
  hr: "HR",
};

export function LanguageSwitcher({ locales = [] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  console.log("LanguageSwitcher: Received locales:", locales);

  // Fallback locales if none provided
  const fallbackLocales = [
    { lang: "en-us", lang_name: "English" },
    { lang: "hr", lang_name: "Hrvatski" },
  ];

  // Ensure we have valid locales with proper structure
  const actualLocales =
    locales && locales.length > 0 && Array.isArray(locales)
      ? locales.filter((locale) => locale && locale.lang) // Filter out invalid entries
      : fallbackLocales;

  // Find current language from pathname or use first available
  const pathLang = pathname.split("/")[1]; // Extract lang from URL like /en-us/...
  const currentLocale =
    actualLocales.find((locale) => locale.lang === pathLang) ||
    actualLocales[0];
  const currentLang = currentLocale?.lang || "en-us";

  console.log("LanguageSwitcher: Current language:", currentLang);
  console.log("LanguageSwitcher: Available locales:", actualLocales);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header__area-menubar-right-language">
      <div className="dropdown">
        <button
          className="btn btn-link p-0"
          type="button"
          onClick={handleToggle}
          style={{
            cursor: "pointer",
            backgroundColor: "transparent",
            padding: "6px 8px",
            border: "none",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {localeLabels[currentLang] || currentLang.toUpperCase()}
          <span
            style={{
              fontSize: "14px",
              lineHeight: "1",
              display: "flex",
              alignItems: "center",
              marginTop: "1px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <ul
            style={{
              display: "block",
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 1000,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              minWidth: "80px",
              margin: 0,
              padding: "5px 0",
              listStyle: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {actualLocales.map((locale) => {
              if (!locale || !locale.lang) {
                console.warn("LanguageSwitcher: Invalid locale found:", locale);
                return null;
              }

              const newPath = pathname.replace(
                /^\/(en-us|hr)/,
                `/${locale.lang}`
              );

              return (
                <li key={locale.lang}>
                  <Link
                    href={newPath}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "block",
                      padding: "8px 16px",
                      textDecoration: "none",
                      color: "#333",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    {localeLabels[locale.lang] || locale.lang.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
