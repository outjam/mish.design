import React from 'react'
import Link from "next/link";

function Tag(props) {
    return (
        <Link className="tag" href="/" data-cursor-img={props.cursor}>
           <span className="headline-4">
            {props.name}
           </span>
        </Link>
    )
}

export default Tag
