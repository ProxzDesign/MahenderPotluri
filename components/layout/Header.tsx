"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./header.css"; // only layout/visual styles, NO animation here

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    let lastY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        // scrolling down -> hide header
        headerEl.style.transform = "translateY(-100%)";
      } else {
        // scrolling up -> show header
        headerEl.style.transform = "translateY(0%)";
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    // initial state
    headerEl.style.willChange = "transform";
    headerEl.style.transition = "transform 0.25s ease-out";

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container-main">
        <div className="header">
          <div className="logoContainer h-[40px]">
            <Link href="/" className="logo h-full">
              <img src="/main-logo.svg" alt="Creative Agency" className="h-full" />
            </Link>
          </div>

          <nav className="nav">
            <Link href="/" className="logo">Service</Link>
            <Link href="/" className="logo">Case Studies</Link>
            <Link href="/" className="logo">Pricing</Link>
            <Link href="/" className="logo">Startups</Link>
            <Link href="/" className="logo">About Us</Link>
          </nav>

          <div className="contactBtn">
            <Link
              href="/contact"
              className="btn-primary blueBtn"
              data-anim-btn
            >
              Contact Us
              <div className="icon-wrap">
                <div
                  className="btn_icon_wrapper"
                  data-anim-icon
                  style={{ transform: "translate3d(0%, 0%, 0)" }}
                >
                  <img
                    width="22.5"
                    loading="lazy"
                    alt="Arrow white"
                    src="/arrow.svg"
                    className="bp_icon"
                  />
                  <img
                    width="28"
                    loading="lazy"
                    alt="Arrow white"
                    src="/arrow.svg"
                    className="bp_icon main"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
