import React from "react";
import Link from "next/link";
import TagPost from "../Tag/TagPost";

function CardAwards(props) {
  return (
    <Link
      className="cardAwards"
      href="/projectview"
      data-cursor-text="Подробнее"
    >
      <div className="card__image card__image-project">
        <img src={props.img} />
      </div>
      <div className="card__content">
        <div className="card__content-attribution">
          <p className="attribution caption-1">{props.data}</p>
        </div>
        <p className="body body-1">{props.title}</p>
        <p className="description description-1">{props.description}</p>
      </div>
      <div className="card__tag">
        <TagPost name="Tag" />
      </div>
    </Link>
  );
}

export default CardAwards;
