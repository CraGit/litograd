"use client";

import { useEffect, useRef } from "react";

export function HeaderClient() {
  const initializationAttempts = useRef(0);
  const maxAttempts = 20;
  const isInitialized = useRef(false);

  useEffect(() => {
    let timeoutId;
    let cleanupFunction = null;

    const forceResetMobileMenu = () => {
      // Force reset any stuck mobile menu states
      const sidebarPopup = document.querySelector(
        ".header__area-menubar-right-sidebar-popup"
      );
      const sidebarOverlay = document.querySelector(".sidebar-overlay");

      if (sidebarPopup) {
        sidebarPopup.classList.remove("active");
        sidebarPopup.style.transform = "";
        sidebarPopup.style.opacity = "";
        sidebarPopup.style.visibility = "";
      }

      if (sidebarOverlay) {
        sidebarOverlay.classList.remove("show");
        sidebarOverlay.style.width = "";
        sidebarOverlay.style.visibility = "";
      }

      document.body.classList.remove("sidebar-open");
      document.body.style.overflow = "";
    };

    const initializeHeader = () => {
      initializationAttempts.current++;

      // Force reset first
      forceResetMobileMenu();

      // Check if DOM elements are available
      const sidebarIcon = document.querySelector(
        ".header__area-menubar-right-sidebar-icon"
      );
      const sidebarPopup = document.querySelector(
        ".header__area-menubar-right-sidebar-popup"
      );
      const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
      const sidebarOverlay = document.querySelector(".sidebar-overlay");

      // If elements aren't ready and we haven't exceeded max attempts, try again
      if (
        (!sidebarIcon || !sidebarPopup || !sidebarOverlay) &&
        initializationAttempts.current < maxAttempts
      ) {
        timeoutId = setTimeout(initializeHeader, 200);
        return;
      }

      // If we still don't have elements after max attempts, log and return
      if (!sidebarIcon || !sidebarPopup || !sidebarOverlay) {
        console.warn(
          "HeaderClient: Could not find required DOM elements after",
          maxAttempts,
          "attempts"
        );
        return;
      }

      // Remove any existing event listeners first
      const oldToggleSidebar = sidebarIcon.toggleSidebar;
      if (oldToggleSidebar) {
        sidebarIcon.removeEventListener("click", oldToggleSidebar);
        if (sidebarCloseBtn)
          sidebarCloseBtn.removeEventListener("click", oldToggleSidebar);
        sidebarOverlay.removeEventListener("click", oldToggleSidebar);
      }

      const toggleSidebar = (e) => {
        e?.preventDefault();
        e?.stopPropagation();

        console.log("Mobile menu toggle triggered");

        if (!sidebarPopup || !sidebarOverlay) return;

        const isCurrentlyOpen = sidebarPopup.classList.contains("active");

        if (isCurrentlyOpen) {
          // Close menu
          sidebarPopup.classList.remove("active");
          sidebarOverlay.classList.remove("show");
          document.body.classList.remove("sidebar-open");
          document.body.style.overflow = "";
        } else {
          // Open menu
          sidebarPopup.classList.add("active");
          sidebarOverlay.classList.add("show");
          document.body.classList.add("sidebar-open");
          document.body.style.overflow = "hidden";
        }
      };

      // Store the function reference for cleanup
      sidebarIcon.toggleSidebar = toggleSidebar;

      // Add event listeners with aggressive event handling
      sidebarIcon.addEventListener("click", toggleSidebar, { passive: false });
      sidebarIcon.addEventListener("touchend", toggleSidebar, {
        passive: false,
      });

      if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener("click", toggleSidebar, {
          passive: false,
        });
        sidebarCloseBtn.addEventListener("touchend", toggleSidebar, {
          passive: false,
        });
      }

      sidebarOverlay.addEventListener("click", toggleSidebar, {
        passive: false,
      });
      sidebarOverlay.addEventListener("touchend", toggleSidebar, {
        passive: false,
      });

      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === "Escape" && sidebarPopup?.classList.contains("active")) {
          toggleSidebar(e);
        }
      };
      document.addEventListener("keydown", handleEscape);

      // Return cleanup function
      cleanupFunction = () => {
        if (sidebarIcon && sidebarIcon.toggleSidebar) {
          sidebarIcon.removeEventListener("click", sidebarIcon.toggleSidebar);
          sidebarIcon.removeEventListener(
            "touchend",
            sidebarIcon.toggleSidebar
          );
          delete sidebarIcon.toggleSidebar;
        }
        if (sidebarCloseBtn) {
          sidebarCloseBtn.removeEventListener("click", toggleSidebar);
          sidebarCloseBtn.removeEventListener("touchend", toggleSidebar);
        }
        if (sidebarOverlay) {
          sidebarOverlay.removeEventListener("click", toggleSidebar);
          sidebarOverlay.removeEventListener("touchend", toggleSidebar);
        }
        document.removeEventListener("keydown", handleEscape);
        forceResetMobileMenu();
      };

      isInitialized.current = true;
      console.log("HeaderClient: Mobile menu initialized successfully");
    };

    // Multiple initialization strategies
    const startInitialization = () => {
      if (isInitialized.current) return;

      // Strategy 1: Immediate if DOM is ready
      if (document.readyState === "complete") {
        timeoutId = setTimeout(initializeHeader, 100);
      }
      // Strategy 2: Wait for DOMContentLoaded
      else if (document.readyState === "loading") {
        document.addEventListener(
          "DOMContentLoaded",
          () => {
            if (!isInitialized.current) {
              timeoutId = setTimeout(initializeHeader, 200);
            }
          },
          { once: true }
        );
      }
      // Strategy 3: Interactive state
      else {
        timeoutId = setTimeout(initializeHeader, 300);
      }
    };

    startInitialization();

    // Fallback: Try again after window load
    const windowLoadHandler = () => {
      if (!isInitialized.current) {
        setTimeout(initializeHeader, 500);
      }
    };
    window.addEventListener("load", windowLoadHandler, { once: true });

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (cleanupFunction) {
        cleanupFunction();
      }
      window.removeEventListener("load", windowLoadHandler);
    };
  }, []);

  return null;
}
