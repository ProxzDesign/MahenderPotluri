"use client";

import { useEffect, useRef, useState } from "react";
import "./ratingSection.css";

const TOTAL_SLIDES = 7;

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
              <div className="slide">
                <p className="companyName">tournated</p>
                <div className="companyWords">
                    <p className="ratingText">
                        <span>“Highly happy</span> with a design delivered by Creative Agency. <span>Definitely will keep working</span> Great and quality smooth communication.”</p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder02.avif" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Nick Fisher</p>
                        <p className="designation">CEO</p>
                    </div>
                </div>
              </div>
              <div className="slide">
                <p className="companyName">ActiveSync</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Creative Agency brought my <span>idea to life.</span>  Taken great care of my business & implement <span>best user experience</span> possible”</p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder03.avif" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Abraham Ajayi </p>
                        <p className="designation">CEO</p>
                    </div>
                </div>
              </div>
              <div className="slide">
                <p className="companyName">Luxara</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Very professional, <span> top notch communication</span> & absolute pleasure to work. Super satisfied with results. <span>Highly recommended!”</span></p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder04.webp" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Danny P</p>
                        <p className="designation">Director of Sales</p>
                    </div>
                </div>
              </div>
              <div className="slide">
                <p className="companyName">HBIT App</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Creative Agency delivered a <span>stunning</span> and professional mobile UI design quickly. Highly recommend their <span>excellent work!”</span></p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder05.webp" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Mark Gawlyk</p>
                        <p className="designation">Co-founder & CTO</p>
                    </div>
                </div>
              </div>
              <div className="slide">
                <p className="companyName">Augalo</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Creative Agency <span>satisfied</span> me from the very first order. I able to call on him again & the result as <span>brilliant</span> as ever.”</p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder06.webp" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Camille</p>
                        <p className="designation">CEO & Founder</p>
                    </div>
                </div>
              </div>
              <div className="slide">
                <p className="companyName">LifeTales</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Creative Agency is a fantastic design team, with a <span>healthy blend of UI and UX skills</span>. Highly recommended.”</p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder06.webp" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Matt Kabus</p>
                        <p className="designation">CEO & Founder</p>
                    </div>
                </div>
              </div>
              <div className="slide">
                <p className="companyName">Krispy</p>
                <div className="companyWords">
                    <p className="ratingText">
                        “Super awesome design team, <span>I came back again</span> because how satisfied I was last time. <span>As usual, great”</span></p>
                </div>
                <div className="ratingUser">
                    <img src="Rating-Founder06.webp" alt="Comapny Owner" />
                    <div className="UserDetails">
                        <p className="name">Shah Taj</p>
                        <p className="designation">CEO</p>
                    </div>
                </div>
              </div>
              
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