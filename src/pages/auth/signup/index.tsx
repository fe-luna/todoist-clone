import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import { register, update } from "services/user";
import poster from "assets/images/signup-video-poster.png";
import video from "assets/images/signup-video.mp4";
import img01 from "assets/images/signup-01.jpeg";
import img02 from "assets/images/signup-02.jpeg";
import img03 from "assets/images/signup-03.jpeg";
import img04 from "assets/images/signup-04.jpeg";
import BaseForm, { FormData } from "../base";
import styles from "./style.module.scss";

dayjs.extend(timezone);

function SignupForm() {
  const navigate = useNavigate();
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
    // TODO onborad page
    await update({
      full_name: payload.email.split("@")[0],
      onboarding_use_cases: ["personal"],
      onboarding_level: "beginner",
    });
    navigate("/app/today");
  };

  return <BaseForm action="signup" onSubmit={handleSignup} />;
}

function SignupBranding() {
  const [isShowVideo] = useState(Math.random() < 0.5);
  if (isShowVideo) {
    return (
      <div>
        <video
          className={styles.video}
          poster={poster}
          playsInline
          autoPlay
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.comment}>
          <p>
            Before Todoist, my to-do lists were scattered all around! Now,
            everything is in order and in one place.
          </p>
          <p className={styles.commentName}>– Matt M.</p>
        </div>
      </div>
    );
  }

  const list = [
    { img: img01, title: "30 million+", subTitle: "app downloads" },
    { img: img02, title: "15 years+", subTitle: "in business" },
    { img: img03, title: "2 billion+", subTitle: "tasks completed" },
    { img: img04, title: "1 million+", subTitle: "pro users" },
  ];

  return (
    <div className={styles.list}>
      {list.map((item) => (
        <div key={item.title} className={styles.item}>
          <img className={styles.img} src={item.img} alt="" />
          <div className={styles.title}>{item.title}</div>
          <div className={styles.subTitle}>{item.subTitle}</div>
        </div>
      ))}
    </div>
  );
}

export { SignupForm, SignupBranding };
