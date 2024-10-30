import React from 'react';
import imgVisa from '../images/visa.png';
import imgMaster from '../images/master.png';

function CreditCard(props) {
    //const number = props.number;
    //const last4Digits = number.slice(-4);
    const boxColor = {backgroundColor: props.bgColor};
    const textColor = {color: props.color};
    const combinedStyles = {...boxColor, ...textColor};

    return (
        <div>
            <CreditCard style={combinedStyles}>
                <img src={props.type === "Visa" ? imgVisa : imgMaster} alt="logo" />
                <p>{props.number}</p>
                <ul>
                    <li>{props.expirationMonth}</li>
                    <li>{props.expirationYear}</li>
                    <li>{props.bank}</li>
                    <li>{props.owner}</li>
                </ul>
                <p></p>
            </CreditCard>
        </div>
    );
}

export default CreditCard;