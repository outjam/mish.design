import React, { useState } from "react";
import Link from "next/link";
import Buttom from "../Button/Button"

function CardPost() {
    return (
        <Link className="card" href="/projectview">
            <div className="card__image card__image-post"></div>
            <div className="card__content">
                <div className="card__content-attribution">
                    <p className="attribution caption-1">Attribution 1</p>
                    <p className="attribution caption-1">Attribution 2</p>
                </div>
                <p className="body body-1">Title</p>
                <p className="description description-1">Description</p>
            </div>
            <div className="card__tag">
                Tag
            </div>
            <div className="card__action">
                <div className="card_action-person">Person</div>
                <Buttom name="Показать ещё" />
            </div>
        </Link>
    )
}

export default CardPost
