"use client";
import { useEffect } from "react";

export function ClientLayout({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap JavaScript
    import("bootstrap/dist/js/bootstrap.min.js");

    // Dynamically import WOW.js and initialize
    import("wowjs").then(({ WOW }) => {
      new WOW({ live: false }).init();
    });
  }, []);

  return <>{children}</>;
}
