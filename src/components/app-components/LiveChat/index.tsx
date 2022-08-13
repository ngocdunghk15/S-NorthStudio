import React from "react";
import styles from "./LiveChat.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LiveChat = () => {
  return (
    <div className={cx("live-chat--wrapper")}>
      <iframe
        className={cx("live-chat--wrapper")}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/y_6aSG2yfe8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveChat;
