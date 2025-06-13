"use client";
import { useEffect } from "react";

export function ClientLayout({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap JavaScript
    import("bootstrap/dist/js/bootstrap.min.js");

    // Dynamically import WOW.js and initialize
    import("wowjs")
      .then((WOWModule) => {
        const WOW = WOWModule.WOW || WOWModule.default;
        if (WOW) {
          new WOW({ live: false }).init();
        }
      })
      .catch((error) => {
        console.log("WOW.js not available:", error);
      });
  }, []);

  return <>{children}</>;
}
