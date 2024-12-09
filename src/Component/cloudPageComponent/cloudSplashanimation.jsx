'use client'
import Image from 'next/image'
import parallex_bg from '../../images/cloud/bg_parallex.png'
import SparklesPreview2 from '../Text animation/subheading text effect/bannerSubheading'
import './cloudService.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { CustomEase, ScrollTrigger } from 'gsap/all'


export const SplashHeading = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let windowheight = window.innerHeight
        gsap.registerPlugin(CustomEase)
        const mm = gsap.matchMedia();
        CustomEase.create(
            "cloudSplash",
            "0.165, 0.84, 0.44, 1"
          );
        gsap.fromTo(".C-banner-center-char", {y : 60, opacity : 0}, {y : 0, opacity: 1, stagger : 0.032, duration : 1.2, ease : "cloudSplash" })
        gsap.fromTo(".banner-center-subtitle-char", {y : 40, opacity: 0}, {y: 0, opacity : 1, stagger : 0.032, duration : 1.2, ease : "cloudSplash"})

        mm.add("(min-width: 1199px)", () => {
           let splashScreen = gsap.timeline({
                scrollTrigger: {
                    trigger: ".starting-parallex",
                    start: "top top",
                    end: () => windowheight * 2,
                    pin: true,
                    pinSpacing : true,
                    scrub: true,
                    onLeave: () => {
                        // document.querySelector(".Cloud-banner").style.position = "relative"
                        document.querySelector(".starting-parallex").style.opacity = 0;
                        document.querySelector(".starting-parallex").style.zIndex = -2;
                    },
                    onEnterBack: () => {
                        document.querySelector(".starting-parallex").style.opacity = 1;
                        document.querySelector(".starting-parallex").style.zIndex = 2;
                    }
                },
            });
            splashScreen.to(".overlay-text", { background: "#00000000", ease: "power1.inOut", duration: 3 }, "key")
            .to(".overlay-text .Cloud-banner-center-text", { scale: 0.6, ease: "power1.inOut", duration: 4 }, "key")
            .to('.parallex-img', { scale: 1.1, x: "-1.5vw", z: "5vw", ease: "power1.inOut", duration: 3, }, "key")
            .to(".overlay-text .Cloud-banner-center-text", { scale: 0.1, opacity: -1, ease: "power1.inOut", duration: 2 }, "key1")
            .to('.parallex-img', { scale: 2.2, z: "22vw", background: "#00000000", ease: "power1.inOut", duration: 3, }, "key1");

            return() => {
                if (splashScreen) splashScreen.kill();
                }
        })
        mm.add("(max-width : 1199px)", () => {

        })
            return () => {
                mm.revert();
            };
    },[])
    return (
            <div className="starting-parallex">
                <div className="parallex-img">
                    <Image src={parallex_bg} alt="server cloud" />
                </div>
                <div className="overlay-text">
                    <div className='Cloud-banner-center-text cloudPage'>
                        <div className='cloudText'>
                            <SparklesPreview2 mainDivClass={"cloudsplash-text"} className={"C-banner-center"} word={[
                                {
                                    text: "Bold",
                                    class: "C-banner-center-word",
                                    className: "inline-block C-banner-center-char"
                                },
                                {
                                    text: "By",
                                    class: "C-bannevr-center-word",
                                    className: "inline-block C-banner-center-char"
                                },
                                {
                                    text: "Vision,",
                                    class: "C-banner-center-word",
                                    className: "inline-block C-banner-center-char"
                                },
                                {
                                    text: "Limited",
                                    class: "C-banner-center-word",
                                    className: "inline-block C-banner-center-char"
                                },
                                {
                                    text: "By",
                                    class: "C-banner-center-word",
                                    className: "inline-block C-banner-center-char"
                                },
                                {
                                    text: "Compute",
                                    class: "C-banner-center-word",
                                    className: "inline-block C-banner-center-char"
                                },
                                {
                                    text: "Resources?",
                                    class: "C-banner-center-word",
                                    className: "inline-block C-banner-center-char"
                                },

                            ]} />
                            <SparklesPreview2 mainDivClass={"parent-of-subtitle"} className={"C-banner-center-subtitle"} word={[
                                {
                                    text: "Our",
                                    class: "banner-center-word-subtitle",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "patented",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "cloud",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "scales",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "with",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "your",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "ambition",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "and",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "adapts",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "to",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "your",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "business",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                                {
                                    text: "needs",
                                    class: "banner-center-word",
                                    className: "inline-block banner-center-subtitle-char"
                                },
                            ]} />
                        </div>

                    </div>
                </div>
            </div>       
    )
}