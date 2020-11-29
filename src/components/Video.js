import React, { useState } from "react";
import { Play } from "react-feather";
import ModalVideo from "react-modal-video";

function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="Video__section"
      style={{ background: "url(assets/images/slide1.jpg)" }}
    >
      <h1 className="Video__title">
        wath our video to <br /> know more
      </h1>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        allowFullScreen
        onClose={() => setOpen(false)}
      />
      <div className="Video__btn" onClick={() => setOpen(true)}>
        <Play size={28} />
      </div>
    </section>
  );
}

export default Video;
