import React from "react";

// Стандартная кнопка с переопределенным className
const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.className} />
    );
};

export default Button;