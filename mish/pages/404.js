import React from "react";

export default function Custom404() {
  return (
    <div className="error404">
      <video
        className="error_not_found-video"
        src="https://culture3k.com/not_found.mp4"
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      ></video>
      <p>Страница не найдена</p>
      <p>
        <small>Описание ошибки</small>
      </p>
    </div>
  );
}
