import React, { useEffect, useState } from "react";
import poster from "assets/images/signup-video-poster.png";
import video from "assets/images/signup-video.mp4";
import img01 from "assets/images/signup-01.jpeg";
import img02 from "assets/images/signup-02.jpeg";
import img03 from "assets/images/signup-03.jpeg";
import img04 from "assets/images/signup-04.jpeg";

function SignupForm() {
  return <div>Singup</div>;
}

let SHOW_VIDEO = false;

function SignupBranding() {
  const [isShowVideo] = useState(SHOW_VIDEO);
  useEffect(() => {
    SHOW_VIDEO = !SHOW_VIDEO;
  }, []);

  if (isShowVideo) {
    return (
      <div>
        <video poster={poster} src={video} />
      </div>
    );
  }

  return (
    <div>
      <img src={img01} alt="" />
      <img src={img02} alt="" />
      <img src={img03} alt="" />
      <img src={img04} alt="" />
    </div>
  );
}

export { SignupForm, SignupBranding };
