"use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
import "./Testimonials.css";

export default function Testimonials(props: any) {
    return (
         <section className="Testimonials">
            <div className="container-main">
                <div className="sectionWrapper">
                    <h2 className="sectionTitle">500+ Founders trusted us. Get return<br/> on your <span>investment, multiplied!</span></h2>
                    <div className="testimonials-list">
                        <div className="list-Items">
                            <div className="clientImage">
                                <img src="./Testimonial01.png" alt="Client Testimonial" />
                            </div>
                            <div className="ClientData">
                                <h3 className="ClientName">/ Matt Kabus</h3>
                                <p className="ClientDesignation">CEO & Founder @LifeTales</p>
                            </div>
                            <div className="TestimonialText">
                                <p>“Creative Agency transformed our brand identity and boosted our online presence. Their innovative strategies and dedicated team delivered exceptional results, exceeding our expectations!”</p>
                            </div>
                        </div>
                        <div className="list-Items">
                            <div className="clientImage">
                                <img src="./Testimonial02.png" alt="Client Testimonial" />
                            </div>
                            <div className="ClientData">
                                <h3 className="ClientName">/ Ishraq Khan</h3>
                                <p className="ClientDesignation">CEO @Kodezi</p>
                            </div>
                            <div className="TestimonialText">
                                <p>“Creative Agency is very reliable at all times and we have enjoyed working & designs are truly impressive An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!”</p>
                            </div>
                        </div>
                        <div className="list-Items">
                            <div className="clientImage">
                                <img src="./Testimonial03.png" alt="Client Testimonial" />
                            </div>
                            <div className="ClientData">
                                <h3 className="ClientName">/ Nikit Ribakovs</h3>
                                <p className="ClientDesignation">Founder & CEO @Tournated</p>
                            </div>
                            <div className="TestimonialText">
                                <p>“Highly happy with a design delivered by Creative Agency. Definitely will keep working with Creative Agency. Great quality and smooth communication”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}