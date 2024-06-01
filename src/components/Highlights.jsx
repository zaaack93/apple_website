import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1,y:0 })
    gsap.to(".link", { opacity: 1,y:0,stagger:'0.25',duration:1 })
  }, [])

  return (
    <section id="highlights" className="bg-zinc common-padding h-full overflow-hidden w-screen">
        <div className="screen-max-width">
            <div className="mb-12 w-full md:flex justify-between items-end">
                <h1 id="title" className="section-heading">Get the Highlights.</h1>
                <div className="flex flex-wrap gap-5 items-end">
                    <p className="link">Watch the film <img src={watchImg} alt="watch film" className="ml-2" /></p>
                    <p className="link">Watch the event <img src={rightImg} alt="event" className="ml-2" /></p>
                </div>
            </div>

            <VideoCarousel />
        </div>

    </section>
  )
}

export default Highlights