"use client";

import { useEffect } from "react";

export function HeaderClient() {
  useEffect(() => {
    // Sticky Header Functionality
    const handleScroll = () => {
      const header = document.querySelector(".header__area");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("header__sticky-sticky-menu");
        } else {
          header.classList.remove("header__sticky-sticky-menu");
        }
      }
    };

    // Search Box Toggle - REMOVED

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

    // Event Listeners
    window.addEventListener("scroll", handleScroll);

    // Search event listeners removed

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
      window.removeEventListener("scroll", handleScroll);

      // Search cleanup removed

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
