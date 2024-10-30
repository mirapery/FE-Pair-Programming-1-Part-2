import React from 'react';
import imgVisa from '../images/visa.png';
import imgMaster from '../images/master.png';

function CreditCard(props) {
    const boxColor = { backgroundColor: props.bgColor };
    const textColor = { color: props.color };
    const combinedStyles = { ...boxColor, ...textColor };

    return (
        <div className="card" style={combinedStyles}>
            <img className="card-logo" src={props.type === "Visa" ? imgVisa : imgMaster} alt="logo" />
            <p className="number" >**** **** **** {props.number.slice(-4)}</p>
            <p>Expires {String(props.expirationMonth).padStart(2, '0')}/{String(props.expirationYear).slice(-2)}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    );
}

export default CreditCard;