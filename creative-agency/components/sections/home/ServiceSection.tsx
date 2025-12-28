"use client";

import Link from "next/dist/client/link";
// import { useEffect, useRef } from "react";
// import Link from "next/link";
import "./ServiceSection.css";

export default function ServiceSection(props: any) {
    return (
         <section className="ServiceSection">
            <div className="container-main">
                <div className="sectionWrapper">
                    <h2 className="sectionTitle">We deliver on time, in days and weeks<br/> <span>— not months.</span></h2>
                    <div className="meeting-content">
                        <div className="meeting-details-wrap">
                            <div className="meeting-card">
                                <p className="count">01</p>
                                <h3 className="meeting-card-title">Onboard in &lt;1 day</h3>
                            </div>
                            <div className="meeting-card">
                                <p className="count">02</p>
                                <h3 className="meeting-card-title">Understand Scope & Strategy</h3>
                            </div>
                            <div className="meeting-card">
                                <p className="count">03</p>
                                <h3 className="meeting-card-title">First designs in 4-5 days</h3>
                            </div>
                        </div>
                        <div className="meeting-review">
                            <p className="Review">“Creative Studio is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”</p>
                            <div className="ReviewFounder">
                                <img src="./Testimonial01.png" alt="Review Founder Image" />
                                <div className="Founder-Data">
                                    <h4 className="founderName">Matt Kabus</h4>
                                    <p className="founderDesignation">CEO & Founder @LifeTales</p>
                                </div>
                            </div>
                            <div className="contactBtn">
                                <Link
                                href="/contact"
                                className="btn-primary greenBtn"
                                data-anim-btn
                                >
                                Book a Call
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
                                        src="/btn icon black.webp"
                                        className="bp_icon"
                                    />
                                    <img
                                        width="28"
                                        loading="lazy"
                                        alt="Arrow white"
                                        src="/btn icon black.webp"
                                        className="bp_icon main"
                                    />
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serviceCards">
                <div className="container-main">
                  <h3 className="sectionTitle">From startup to enterprise, grow your business <br/> <span>with fast and creative designs!</span></h3>
                </div>
                <div className="service-card blueCard">
                    <div className="container-main">
                        <div className="serviceWrapper">
                            <div className="serviceDetail">
                                <h4 className="serviceTitle">Branding Identity</h4>
                                <div className="serviceData">
                                    <div className="serviceOverview">
                                        <p className="serviceDescription">Create a trusted, global brand with our expert designs and strategies. We help improve your brand's visibility, credibility, and connection with customers both online and offline.</p>
                                        <div className="contactBtn">
                                            <Link
                                            href="/contact"
                                            className="btn-primary whiteBtn"
                                            data-anim-btn
                                            >
                                            Build brand identity
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
                                                    src="/btn icon black.webp"
                                                    className="bp_icon"
                                                />
                                                <img
                                                    width="28"
                                                    loading="lazy"
                                                    alt="Arrow white"
                                                    src="/btn icon black.webp"
                                                    className="bp_icon main"
                                                />
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li>Motion graphics design</li>
                                            <li>Graphic design</li>
                                            <li>Startup branding</li>
                                            <li>Brand identity design</li>
                                            <li>Corporate identity design</li>
                                            <li>Brand strategy</li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div className="serviceImage">
                                <img src="./service01.avif" alt="Service Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-card whiteCard">
                    <div className="container-main">
                        <div className="serviceWrapper">
                            <div className="serviceDetail">
                                <h4 className="serviceTitle">UI UX Design</h4>
                                <div className="serviceData">
                                    <div className="serviceOverview">
                                        <p className="serviceDescription">Turn your ideas into designs that help to business growth. Our UI UX services create easy-to-use, eye-catching digital experiences that keep users engaged, improve satisfaction..</p>
                                        <div className="contactBtn">
                                            <Link
                                            href="/contact"
                                            className="btn-primary blackBtn"
                                            data-anim-btn
                                            >
                                            Improve product UX
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
                                    <div className="serviceList">
                                        <ul>
                                            <li>UI UX Consulting</li>
                                            <li>UX Research</li>
                                            <li>Usability Testing</li>
                                            <li>UX Audit</li>
                                            <li>UI UX Design</li>
                                            <li>Design System Audit</li>
                                            <li>Visual Design</li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div className="serviceImage">
                                <img src="./service02.avif" alt="Service Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-card yellowCard">
                    <div className="container-main">
                        <div className="serviceWrapper">
                            <div className="serviceDetail">
                                <h4 className="serviceTitle">Web Design</h4>
                                <div className="serviceData">
                                    <div className="serviceOverview">
                                        <p className="serviceDescription">Get a website that looks great and drives real results. With responsive, user-friendly design, your site will engage visitors, boost conversions, and enhance your brand’s online presence.</p>
                                        <div className="contactBtn">
                                            <Link
                                            href="/contact"
                                            className="btn-primary blackBtn"
                                            data-anim-btn
                                            >
                                            Design website today
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
                                    <div className="serviceList">
                                        <ul>
                                            <li>Website Strategy</li>
                                            <li>UX Planning</li>
                                            <li>Custom UX/UI Design</li>
                                            <li>Responsive Design</li>
                                            <li>Landing Page Design</li>
                                            <li>Custom Web Development</li>
                                            <li>Post-Launch & Maintenance</li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div className="serviceImage">
                                <img src="./service03.avif" alt="Service Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-card redCard">
                    <div className="container-main">
                        <div className="serviceWrapper">
                            <div className="serviceDetail">
                                <h4 className="serviceTitle">Build Product (MVP)</h4>
                                <div className="serviceData">
                                    <div className="serviceOverview">
                                        <p className="serviceDescription">Change your idea into a real product with our MVP development services. We focus on the essential features, test with real users, and help you launch fast, get feedback, for saving your time and money.</p>
                                        <div className="contactBtn">
                                            <Link
                                            href="/contact"
                                            className="btn-primary whiteBtn"
                                            data-anim-btn
                                            >
                                            Build brand identity
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
                                                    src="/btn icon black.webp"
                                                    className="bp_icon"
                                                />
                                                <img
                                                    width="28"
                                                    loading="lazy"
                                                    alt="Arrow white"
                                                    src="/btn icon black.webp"
                                                    className="bp_icon main"
                                                />
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li>Discovery & MVP Strategy</li>
                                            <li>UX/UI Design for MVP</li>
                                            <li>Prototypes & Wireframes</li>
                                            <li>Front & Back Development</li>
                                            <li>Third-Party API & Integration</li>
                                            <li>Quality Assurance & Testing</li>
                                            <li>Launch & Post-MVP Iteration</li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div className="serviceImage">
                                <img src="./service04.avif" alt="Service Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-card blackCard">
                    <div className="container-main">
                        <div className="serviceWrapper">
                            <div className="serviceDetail">
                                <h4 className="serviceTitle">Webflow</h4>
                                <div className="serviceData">
                                    <div className="serviceOverview">
                                        <p className="serviceDescription">Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly.</p>
                                        <div className="contactBtn">
                                            <Link
                                            href="/contact"
                                            className="btn-primary whiteBtn"
                                            data-anim-btn
                                            >
                                            Build brand identity
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
                                                    src="/btn icon black.webp"
                                                    className="bp_icon"
                                                />
                                                <img
                                                    width="28"
                                                    loading="lazy"
                                                    alt="Arrow white"
                                                    src="/btn icon black.webp"
                                                    className="bp_icon main"
                                                />
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li>Figma to Webflow Build</li>
                                            <li>Full Webflow Design + Dev</li>
                                            <li>CMS Architecture</li>
                                            <li>Animations & Interactions</li>
                                            <li>Webflow SEO Setup</li>
                                            <li>No-code Integrations</li>
                                            <li>Enterprise Webflow Builds</li>
                                        </ul>
                                    </div>
                                </div>                                
                            </div>
                            <div className="serviceImage">
                                <img src="./service05.webp" alt="Service Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}