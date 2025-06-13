"use client";

import { useEffect } from "react";

export function HeaderClient() {
  useEffect(() => {
    // Mobile Sidebar Toggle
    const sidebarIcon = document.querySelector(
      ".header__area-menubar-right-sidebar-icon"
    );
    const sidebarPopup = document.querySelector(
      ".header__area-menubar-right-sidebar-popup"
    );
    const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");

    const toggleSidebar = () => {
      if (sidebarPopup && sidebarOverlay) {
        sidebarPopup.classList.toggle("active");
        sidebarOverlay.classList.toggle("show");
        document.body.classList.toggle("sidebar-open");
      }
    };

    // Event Listeners (no sticky header)
    if (sidebarIcon) {
      sidebarIcon.addEventListener("click", toggleSidebar);
    }

    if (sidebarCloseBtn) {
      sidebarCloseBtn.addEventListener("click", toggleSidebar);
    }

    if (sidebarOverlay) {
      sidebarOverlay.addEventListener("click", toggleSidebar);
    }

    // Cleanup
    return () => {
      if (sidebarIcon) {
        sidebarIcon.removeEventListener("click", toggleSidebar);
      }

      if (sidebarCloseBtn) {
        sidebarCloseBtn.removeEventListener("click", toggleSidebar);
      }

      if (sidebarOverlay) {
        sidebarOverlay.removeEventListener("click", toggleSidebar);
      }
    };
  }, []);

  return null;
}
