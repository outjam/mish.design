import React from "react";

function Map() {
  return (
    <div className="maps">
      <div className="maps_Row">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb7ec84d69219bfbf77efb4645fa6bd675a2827411c91deabbb27f0f73eb4eb0&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
        <p>Москва</p>
        <p>
          <small>Большая Новодмитровская, дом 36</small>
        </p>
      </div>
      <div className="maps_Row">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb7ec84d69219bfbf77efb4645fa6bd675a2827411c91deabbb27f0f73eb4eb0&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
        <p>Нижний Новгород</p>
        <p>
          <small>Кулибина, дом 3, этаж 4</small>
        </p>
      </div>
    </div>
  );
}

export default Map;
