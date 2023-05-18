import React from "react";
import { QuestionIcon } from "components/icon";
import inboxImg from "assets/images/empty-inbox.jpg";
import todayImg from "assets/images/empty-today.jpg";
import projectImg from "assets/images/empty-project.jpg";
import styles from "./style.module.scss";

type Page = "inbox" | "today" | "project";
interface EmptyContent {
  img: string;
  title: string;
  subTitle: string;
  tipText: string;
  tipLink: string;
}

interface Props {
  page: Page;
}

const Empty = (props: Props) => {
  const contentMap: Record<Page, EmptyContent> = {
    inbox: {
      img: inboxImg,
      title: "Your peace of mind is priceless",
      subTitle:
        "Well done, caiminxing! All your team's tasks are organized in the right place.",
      tipText: "How to declutter your mind with the Inbox",
      tipLink: "https://todoist.com/help/articles/360000028960",
    },
    today: {
      img: todayImg,
      title: "What do you need to get done today?",
      subTitle:
        "By default, tasks added here will be due today. Click + to add a task",
      tipText: "How to plan your day",
      tipLink: "https://todoist.com/help/articles/360000030999",
    },
    project: {
      img: projectImg,
      title: "Start small (or dream big)...",
      subTitle:
        "Track tasks, follow progress, and discuss details in one central, shared project.",
      tipText: "How to craft a perfect project",
      tipLink: "https://todoist.com/help/articles/6247756242844",
    },
  };
  const content = contentMap[props.page];

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={content.img} />
      <div className={styles.title}>{content.title}</div>
      <div className={styles.subTitle}>{content.subTitle}</div>
      <div className={styles.tip}>
        <a className={styles.tipLink} href={content.tipLink} target="_blank">
          <QuestionIcon boxSize={5} marginRight={1} />
          {content.tipText}
        </a>
      </div>
    </div>
  );
};

export default Empty;
