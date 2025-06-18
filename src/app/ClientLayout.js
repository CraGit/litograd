"use client";
import { useEffect, useState } from "react";

export function ClientLayout({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let timeoutId;

    const initializeScripts = () => {
      // Ensure DOM is completely ready
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeScripts);
        return;
      }

      // Wait a bit more to ensure all elements are rendered
      timeoutId = setTimeout(async () => {
        try {
          // Dynamically import Bootstrap JavaScript
          await import("bootstrap/dist/js/bootstrap.min.js");

          // Dynamically import WOW.js and initialize
          const WOWModule = await import("wowjs");
          const WOW = WOWModule.WOW || WOWModule.default;

          if (WOW) {
            // Initialize WOW with mobile-friendly settings
            new WOW({
              live: false,
              mobile: true,
              offset: 50,
              animateClass: "animated",
            }).init();
          }

          setIsInitialized(true);
        } catch (error) {
          console.log("Script initialization error:", error);
          setIsInitialized(true);
        }
      }, 100);
    };

    initializeScripts();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener("DOMContentLoaded", initializeScripts);
    };
  }, []);

  // Add initialization class to body
  useEffect(() => {
    if (isInitialized) {
      document.body.classList.add("scripts-initialized");
    }
  }, [isInitialized]);

  return <>{children}</>;
}
