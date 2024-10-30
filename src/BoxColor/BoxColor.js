import React from 'react';


function BoxColor(props) {
    return (
        <div className="color"style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            rgb({props.r}, {props.g}, {props.b}) <br />
            #{props.r.toString(16).padStart(2, '0')}
            {props.g.toString(16).padStart(2, '0')}
            {props.b.toString(16).padStart(2, '0')}
        </div>
    );
}

export default BoxColor;