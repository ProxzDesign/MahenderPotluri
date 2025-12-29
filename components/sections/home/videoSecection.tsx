"use client";

import { useEffect, useRef } from "react";
// import Link from "next/link";
import "./videoSection.css";

export default function VideoSection(props: any) {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const numbers = Array.from(
      sectionEl.querySelectorAll<HTMLElement>(".statNumber")
    );

    type CounterConfig = {
      el: HTMLElement;
      finalText: string;
      end: number;
      prefix: string;
      suffix: string;
    };

    const parseNumber = (text: string): CounterConfig => {
      const trimmed = text.trim();
      const match = trimmed.match(/^([^0-9\-+]*)([0-9.,+-]+)(.*)$/);
      if (!match) {
        return { el: document.createElement("div"), finalText: trimmed, end: 0, prefix: "", suffix: "" };
      }
      const [, prefix, core, suffix] = match;
      const numeric = Number(core.replace(/,/g, "").replace(/\+/g, ""));
      return {
        el: null as any, // filled later
        finalText: trimmed,
        end: numeric,
        prefix,
        suffix,
      };
    };

    const configs: CounterConfig[] = numbers.map((el) => {
      const cfg = parseNumber(el.textContent || "0");
      cfg.el = el;
      return cfg;
    });

    const duration = 3000; // ms per counter
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const runCounter = (cfg: CounterConfig) => {
      const { el, end, prefix, suffix, finalText } = cfg;
      let startTime: number | null = null;
      const startValue = 0;

      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(rawProgress);
        const current = Math.round(startValue + (end - startValue) * eased);

        // Format without decimals and add back prefix/suffix (+, %, M+, etc.)
        el.textContent = `${prefix}${current}${suffix}`;

        if (rawProgress < 1) {
          requestAnimationFrame(step);
        } else {
          // ensure exact original text (for 10B+, 25M+, etc.)
          el.textContent = finalText;
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            configs.forEach(runCounter);
            obs.unobserve(entry.target); // run once
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
    };
  }, []);


    return (
        <section className="videoSection">
            <div className="container-main">
                <div className="sectionWrapper">
                    <div className="videoBox">
                        <video autoPlay loop muted playsInline src="./Introvideo.mp4" >
                        </video>
                    </div>
                    <div className="statistics" ref={sectionRef}>
                        <h2 className="statsTitle">Bold UX that drives measurable growth, we deliver results, <span>not just designs.</span></h2>
                        <div className="statisticsCards">
                            <div className="statCard">
                                <p className="label">/01</p>
                                <div className="statsData">
                                    <h3 className="statNumber">92%</h3>
                                    <p className="statLabel">client satisfaction<br/>in post-project reviews.</p>
                                </div>
                            </div>
                            <div className="statCard">
                                <p className="label">/02</p>
                                <div className="statsData">
                                    <h3 className="statNumber">$10B+</h3>
                                    <p className="statLabel">valuation influenced<br/>by our design</p>
                                </div>
                            </div>
                            <div className="statCard">
                                <p className="label">/03</p>
                                <div className="statsData">
                                    <h3 className="statNumber">2019</h3>
                                    <p className="statLabel">Founded, 6 years<br/>of experience</p>
                                </div>
                            </div>
                            <div className="statCard">
                                <p className="label">/04</p>
                                <div className="statsData">
                                    <h3 className="statNumber">25M+</h3>
                                    <p className="statLabel">monthly visits<br/>on client platforms</p>
                                </div>
                            </div>
                            <div className="statCard">
                                <p className="label">/05</p>
                                <div className="statsData">
                                    <h3 className="statNumber">500+</h3>
                                    <p className="statLabel">global project & 250+ testimonial with trusted by YC-backed,<br/>VC-funded, a16z, Sequoia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}