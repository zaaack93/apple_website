import { useRef } from "react";
import { hightlightsSlides } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useGSAP(() => {
    gsap.to('#video',{
      scrollTrigger:{
        
    }})
  }, [isEnd,videoId]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      //animate the progress of the video

      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},

        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  const handleProcess = (type,i) => {
    switch (type) {
      case 'video-end':
        setVideo({ ...video, isEnd: true, videoId: i+1 });
        break;
      case 'video-last':
        setVideo({ ...video, isLastVideo: true });
        break;
      case 'video-reset':
        setVideo({ ...video, isLastVideo: false, videoId: 0 });
        break;
      case "play":
        setVideo({ ...video, startPlay: true, isPlaying: true });
        break;
      // case "pause":
      //   setVideo({ ...video, startPlay: false, isPlaying: false });
      //   break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, i) => (
          <div key={i} id="slide" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center overflow-hidden rounded-3xl bg-black">
                <video
                  id="video"
                  preload="auto"
                  playsInline
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={(prevVideo) =>
                    setVideo({ ...prevVideo, isPlaying: true })
                  }
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute z-10 top-12 left-[5%]">
                {slide.textLists.map((text, i) => (
                  <p key={i} className="text-xl md:text-2xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="w-3 h-3 bg-gray-200 rounded-full mx-2 relative cursor-pointer"
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className=" absolute w-full h-full rounded-full"
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img src={isLastVideo ? replayImg : !isPlaying ? playImg :pauseImg} alt={ isLastVideo ? "replay" : !isPlaying ? "play" : "pause"} onClick={ isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')} />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
