import React, { useState } from "react";
import Link from "next/link";
import ButtonBlue from "../Button/ButtonBlue";

function CardPost(props) {
    const {Attribution1, Attribution2, Description, Title, Tags, author, BackgroundImage} = props.info
    return (
    <Link className="card" href="/projectview">
      <div className="card__image card__image-post" style={{
        backgroundImage: `url("${process.env.STRAPI_HOST}${BackgroundImage.data.attributes.url}")`
      }}></div>
      <div className="card__content">
        <div className="card__content-attribution">
          <p className="attribution caption-1">{Attribution1}</p>
          <p className="attribution caption-1">{Attribution2}</p>
        </div>
        <p className="body body-1">{Title}</p>
        <p className="description description-1">{Description}</p>
      </div>
      {
        Tags.split(';').map((tag) => (<div className="card__tag">{tag}</div>))
      }
      <div className="card__action">
        <div className="card_action-person">{author.data.attributes.Name}</div>
        <ButtonBlue name="Показать ещё" />
      </div>
    </Link>
  );
}

export default CardPost;
