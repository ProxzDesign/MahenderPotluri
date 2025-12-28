"use client";

import { useEffect, useRef } from "react";
// import Link from "next/link";
import "./achievement.css";

export default function Achievement(props: any) {

    const sectionRef = useRef<HTMLElement | null>(null);
    const leftRef = useRef<HTMLHeadingElement | null>(null);
    const rightRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const leftEl = leftRef.current;
        const rightEl = rightRef.current;
        if (!sectionEl || !leftEl || !rightEl) return;

        const START = 0.1; // 10% visible
        const END = 0.9;   // 70% visible
        const maxOffset = 1000; // px or % you want from sides (using px here)

        const computeVisibility = () => {
        const rect = sectionEl.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;

        const visible =
            Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0)) /
            Math.max(rect.height, 1);

        return visible; // 0..1
        };

        const applyTransforms = (visibility: number) => {
        let t: number;

        if (visibility <= START) {
            t = 0;
        } else if (visibility >= END) {
            t = 1;
        } else {
            t = (visibility - START) / (END - START); // 0..1
        }

        // ease (optional)
        const eased = t * t * (3 - 2 * t); // smoothstep

        const leftX = -maxOffset * (1 - eased);
        const rightX = maxOffset * (1 - eased);
        const opacity = eased;

        leftEl.style.transform = `translateX(${leftX}px)`;
        rightEl.style.transform = `translateX(${rightX}px)`;
        };

        const handleScroll = () => {
        applyTransforms(computeVisibility());
        };

        // initial
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        };
    }, []);



    return (
         <section className="Achievement" ref={sectionRef}>
            <div className="container-main">
                <div className="sectionWrapper">
                    <div className="titleContainer">
                        <h2 className="fromLeft" ref={leftRef}>our award &</h2>
                        <h2 className="fromRight" ref={rightRef}>achievements</h2>
                    </div>
                    <div className="achievementCards">
                        <div className="card">
                            <div className="labelContainer">
                                <p className="cardLabel">01</p>
                                <div className="arrowIcon">
                                    <img src="./arrow.svg" alt="arrow" />
                                </div>
                            </div>
                            <h3 className="cardTitle">140+ International design awards</h3>
                        </div>
                        <div className="card">
                            <div className="labelContainer">
                                <p className="cardLabel">02</p>
                                <div className="arrowIcon">
                                    <img src="./arrow.svg" alt="arrow" />
                                </div>
                            </div>
                            <h3 className="cardTitle">100M+ Global users reached</h3>
                        </div>
                        <div className="card">
                            <div className="labelContainer">
                                <p className="cardLabel">03</p>
                                <div className="arrowIcon">
                                    <img src="./arrow.svg" alt="arrow" />
                                </div>
                            </div>
                            <h3 className="cardTitle">300%+ Average conversion uplift</h3>
                        </div>
                        <div className="card">
                            <div className="labelContainer">
                                <p className="cardLabel">04</p>
                                <div className="arrowIcon">
                                    <img src="./arrow.svg" alt="arrow" />
                                </div>
                            </div>
                            <h3 className="cardTitle">$10B+ raised UX-led launches</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}