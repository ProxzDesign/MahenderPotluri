"use client";

import { useEffect, useRef } from "react";
// import Link from "next/link";
import "./hero.css";

export default function HeroSection(props: any) {

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const wrapper = wrapperRef.current;
    const slide = slideRef.current;
    if (!wrapper || !slide) return;

    const totalSlides = 4;
    const moveDuration = 700;
    const holdDuration = 1000;
    const stepDuration = moveDuration + holdDuration;
    const slideHeight = slide.offsetHeight;

    let frameId: number | null = null;
    let startTime: number | null = null;

    // cubic ease-in-out
    const easeInOutCubic = (t: number) =>
        1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2);

    const setPosition = (index: number, easedProgress: number) => {
        const baseOffset = index * slideHeight;
        const moveOffset = slideHeight * easedProgress;
        wrapper.style.transform = `translateY(-${baseOffset + moveOffset}px)`;
    };

    const loop = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const stepProgress = elapsed / stepDuration;
        const stepIndex = Math.floor(stepProgress);
        const withinStep = elapsed % stepDuration;

        const currentIndex = stepIndex % totalSlides;

        let eased = 0;

        if (withinStep > holdDuration) {
        const raw =
            (withinStep - holdDuration) / moveDuration; // 0..1 linear
        const clamped = Math.max(0, Math.min(1, raw));
        eased = easeInOutCubic(clamped);
        }

        setPosition(currentIndex, eased);

        frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
        if (frameId !== null) cancelAnimationFrame(frameId);
    };
    }, []);


    return (
        <section className="heroSection">
            <div className="container-main">
                <div className="heroContent">
                    <div className="heroTitle-wrapper">
                        <div className="heroDot-container">
                            <div className="heroDot">
                                <div className="smallDot"></div>
                                <div className="largeDot"></div>
                            </div>
                            <p>Available for New Projects</p>
                        </div>
                        <div className="heroTitle-Container">
                            <h1>
                                Designing the Future, UX Partners for
                                <span className="heroSpan">for</span>
                            </h1>
                            <div className="textAnimation">
                                {/* <p className="heroHeadingSpan span">for</p> */}
                                <div className="heroTextAnimation-wrapper" ref={wrapperRef} style={{ transform: "translateY(0px)" }}>
                                    <div className="textAnimation-text _01" ref={slideRef}>
                                        <p className="gradient-Text">Future Unicorns.</p>
                                    </div>
                                    <div className="textAnimation-text _02">
                                        <p className="gradient-Text">Startups.</p>
                                    </div>
                                    <div className="textAnimation-text _03">
                                        <p className="gradient-Text">AL/ML solutions.</p>
                                    </div>
                                    <div className="textAnimation-text _04">
                                        <p className="gradient-Text">SAAS Companies.</p>
                                    </div>
                                    <div className="textAnimation-text _05">
                                        <p className="gradient-Text">Future Unicorns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroDescription">
                        <p>Wavespace is a global UX agency that helps brands scale with fast, high performance digital experiences.</p>
                        <div className="rating">
                            <div className="founderList">
                                <div className="founderFaces">
                                    <div className="userImage">
                                        <img src="./founderImage01.png" alt="Founder Image"/>
                                    </div>
                                    <div className="userImage">
                                        <img src="./founderImage03.png" alt="Founder Image"/>
                                    </div>
                                    <div className="userImage">
                                        <img src="./founderImage02.png" alt="Founder Image"/>
                                    </div>
                                </div>
                                <p className="reviewText">Loved by 500+ Founders</p>
                            </div>
                            <div className="clutchRating">
                                <img src="./clutch-Review.svg" alt="Reviews on clutch" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroCTA">
                    <div className="ctaWrap">
                        <a className="btn-primary blueBtn" href="#">Book a Call</a>
                        <a className="btn-secondary" href="#">View Work</a>
                    </div>
                </div>
            </div>
        </section>
    );
}