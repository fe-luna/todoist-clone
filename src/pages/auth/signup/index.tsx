import React, { useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { register } from "services/user";
import poster from "assets/images/signup-video-poster.png";
import video from "assets/images/signup-video.mp4";
import img01 from "assets/images/signup-01.jpeg";
import img02 from "assets/images/signup-02.jpeg";
import img03 from "assets/images/signup-03.jpeg";
import img04 from "assets/images/signup-04.jpeg";
import BaseForm, { FormData } from "../base";

dayjs.extend(timezone);

function SignupForm() {
  const handleSignup = async (formData: FormData) => {
    const payload = {
      ...formData,
      accept_terms: true,
      lang: "en",
      permanent_login: true,
      pkce_oauth: null,
      sample_projects: null,
      timezone: dayjs.tz.guess(),
      web_session: true,
    };
    await register(payload);
  };

  return <BaseForm action="signup" onSubmit={handleSignup} />;
}

function SignupBranding() {
  const [isShowVideo] = useState(Math.random() < 0.5);
  if (isShowVideo) {
    return (
      <div>
        <video poster={poster} src={video} autoPlay />
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
