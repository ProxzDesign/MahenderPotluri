"use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
import "./caseStudies.css";

export default function CaseStudies(props: any) {
    return (
        <section className="caseStudies">
            <div className="container-main">
                <div className="sectionWrapper">
                    <h2 className="sectionTitle">Turn your ideas into <span>impactful <br/>solutions like them!</span></h2>
                    <div className="caseStudy-grids">
                        <a className="cards" href="#">
                            <div className="cardImage">
                                <img src="./caseStudy01.avif" alt="Case Study 1" />
                            </div>
                            <div className="cardDetails">
                                <h3 className="cardTitle">Tournament - Sport management web app</h3>
                                <p className="cardDescription">App Design • Saas Design • UI/UX Design</p>
                            </div>
                        </a>
                        <a className="cards" href="#">
                            <div className="cardImage">
                                <img src="./caseStudy02.avif" alt="Case Study 2" />
                            </div>
                            <div className="cardDetails">
                                <h3 className="cardTitle">Off-White - Modern fashion web design</h3>
                                <p className="cardDescription">E-commerce • Branding • Web Design</p>
                            </div>
                        </a>
                        <a className="cards" href="#">
                            <div className="cardImage">
                                <img src="./caseStudy03.avif" alt="Case Study 3" />
                            </div>
                            <div className="cardDetails">
                                <h3 className="cardTitle">Quicky - Mobile finance app design</h3>
                                <p className="cardDescription">User Research • UI UX Design • Workflow</p>
                            </div>
                        </a>
                        <a className="cards" href="#">
                            <div className="cardImage">
                                <img src="./caseStudy04.avif" alt="Case Study 4" />
                            </div>
                            <div className="cardDetails">
                                <h3 className="cardTitle">Solon - Crypto trading platform UX</h3>
                                <p className="cardDescription">UI/UX Design • Branding • Design System</p>
                            </div>
                        </a>
                        <a className="cards" href="#">
                            <div className="cardImage">
                                <img src="./caseStudy05.avif" alt="Case Study 5" />
                            </div>
                            <div className="cardDetails">
                                <h3 className="cardTitle">Kodezi - AI-powered code generator</h3>
                                <p className="cardDescription">SaaS Web Design • Branding • Design System</p>
                            </div>
                        </a>
                        <a className="cards" href="#">
                            <div className="cardImage">
                                <img src="./caseStudy06.avif" alt="Case Study 6" />
                            </div>
                            <div className="cardDetails">
                                <h3 className="cardTitle">Spacebook - Business Accounting dashboard design</h3>
                                <p className="cardDescription">Web Design • Visual Identity • SaaS Dashboard</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}