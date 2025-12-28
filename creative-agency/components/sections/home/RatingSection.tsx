"use client";

import { useEffect, useRef, useState } from "react";
import "./ratingSection.css";

const TOTAL_SLIDES = 6;

export default function RatingSection() {
  const [current, setCurrent] = useState(0); // 0..8
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Measure slide width (in case of responsive changes)
  useEffect(() => {
    const measure = () => {
      const slider = sliderRef.current;
      if (!slider) return;
      // each slide is 25rem but measure real px width
      const slideEl = slider.querySelector<HTMLDivElement>(".slide");
      if (slideEl) setSlideWidth(slideEl.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Apply transform when current changes
  useEffect(() => {
    const track = trackRef.current;
    if (!track || slideWidth === 0) return;
    const offset = current * slideWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }, [current, slideWidth]);

  const goTo = (index: number) => {
    if (index >= TOTAL_SLIDES) {
      setCurrent(0);
    } else if (index < 0) {
      setCurrent(TOTAL_SLIDES - 1);
    } else {
      setCurrent(index);
    }
  };

  const handleSliderClick = () => {
    goTo(current + 1); // advance to next; wrap handled in goTo
  };

  const handleDotClick = (index: number) => {
    goTo(index);
  };

  return (
    <section className="RatingSection">
      <div className="container-main">
        <div className="sectionWrapper">
          <h2 className="sectionTitle">
            Find your best design into us.
            <br />
            <span>We guarantee next success is yours!</span>
          </h2>

          <div
            className="proxzSlider"
            ref={sliderRef}
            onClick={handleSliderClick}
          >
            <div className="sliderTrack" ref={trackRef}>
              <div className="slide firstSlide">
                <div className="rating">
                    <h3 className="ratingNumber">4.9</h3>
                    <div className="ratingStars">
                        <img src="./star.webp" alt="rating Star" />
                        <img src="./star.webp" alt="rating Star" />
                        <img src="./star.webp" alt="rating Star" />
                        <img src="./star.webp" alt="rating Star" />
                        <img src="./star.webp" alt="rating Star" />
                    </div>
                    <p className="ratingAmount">200+ reviews</p>
                </div>
                <div className="clientLogos">
                    <img src="Rating-clutchLogo.webp" alt="Clutch Logo" />
                    <img src="Rating-fiverrLogo.webp" alt="Fiverr Logo" />
                    <img src="Rating-upworkLogo.webp" alt="Upwork Logo" />
                </div>
              </div>
              <div className="slide">
                <p className="companyName">Kodezi</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Creative Agency very <span>reliable</span> at all times and we have enjoyed working &amp; designs are <span>truly impressive</span>”</p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder01.avif" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Israqh Khan</p>
                        <p className="designation">CEO</p>
                    </div>
                </div>
              </div>
              <div className="slide">03</div>
              <div className="slide">04</div>
              <div className="slide">05</div>
              <div className="slide">06</div>
              <div className="slide">07</div>
              <div className="slide">08</div>
              <div className="slide">09</div>
            </div>
          </div>

          <div className="sliderDots">
            {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={
                  "sliderDot" + (idx === current ? " is-active" : "")
                }
                onClick={() => handleDotClick(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}