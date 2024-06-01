import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo
  );

  function handleResize() {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity:1 , y:50 , delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="flex h-5/6 w-full flex-col items-center justify-center">
        <p id="hero-title" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="flext justify-center w-9/12 md:w-10/12">
          <video key={videoSrc} autoPlay muted playsInline className="pointer-events-none">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="text-xl font-normal">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
