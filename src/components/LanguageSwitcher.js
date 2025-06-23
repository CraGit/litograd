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

  // Fallback locales if none provided - ensure we always have both languages
  const fallbackLocales = [
    { lang: "hr", lang_name: "Hrvatski", url: "/hr", id: "fallback-hr" },
    {
      lang: "en-us",
      lang_name: "English",
      url: "/en-us",
      id: "fallback-en-us",
    },
  ];

  // Ensure we have valid locales with proper structure
  const actualLocales =
    locales && locales.length > 0 && Array.isArray(locales)
      ? locales.filter((locale) => locale && locale.lang) // Filter out invalid entries
      : fallbackLocales;

  // Find current language from pathname or use first available
  const pathLang = pathname.split("/")[1]; // Extract lang from URL like /en-us/ or /hr/

  const currentLocale =
    actualLocales.find((locale) => locale.lang === pathLang) ||
    actualLocales[0];
  const currentLang = currentLocale?.lang || "hr";

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
                return null;
              }

              // Determine the target URL
              let targetUrl;

              // Check if this is a fallback entry (no alternate language version exists)
              if (locale.id && locale.id.startsWith("fallback-")) {
                // This is a fallback entry, use the generated URL as-is
                targetUrl = locale.url;
              } else if (locale.url && locale.url.startsWith("/")) {
                // Document has a specific URL, use it directly
                targetUrl = locale.url;
              } else {
                // Construct URL by replacing language in current path
                const targetLangCode = locale.lang;
                targetUrl = pathname.replace(
                  /^\/(en-us|hr)/,
                  `/${targetLangCode}`
                );
              }

              return (
                <li key={locale.lang}>
                  <Link
                    href={targetUrl}
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
