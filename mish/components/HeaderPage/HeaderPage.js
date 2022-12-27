import React from 'react';

function HeaderPage(props) {
    return (
        <div className="headerPage">
            <div>
                <h1 className="headline">{props.name}</h1>
            </div>
        </div>
    )
}

export default HeaderPage
