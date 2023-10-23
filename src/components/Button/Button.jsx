import React from "react";
import './Button.css';

// Стандартная кнопка с переопределенным className
const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className} />
    );
};

export default Button;