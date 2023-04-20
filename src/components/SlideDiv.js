import React, { useState } from "react";
import LoginForm from "./LoginForm";

const SlideDiv = () => {
    const [isSliding, setIsSliding] = useState(false);

    const handleButtonClick = () => {
        setIsSliding((prevState) => !prevState);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>LOGIN</button>
            <div className={`box ${isSliding ? "slide" : ""}`}>
                <LoginForm />
            </div>
        </div>
    );
};

export default SlideDiv;