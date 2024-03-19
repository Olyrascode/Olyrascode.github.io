import React, { useState, useEffect } from "react";

function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("darkMode") === "true" ? true : false
    );

    // Mettre à jour le localStorage avec l'état actuel du mode sombre
    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
        
        // Mettre à jour la classe dark-mode sur le body et les éléments de menu
        const body = document.querySelector('body');
        const menuItems = document.querySelectorAll(".navItem");
        const bartheme = document.querySelector(".barMode")
        const elements = document.querySelectorAll('h1, h2, p, a, .text');

        if (isDarkMode) {
            body.classList.add('dark-mode');
            menuItems.forEach((item) => item.classList.add("dark-mode"));
            bartheme.classList.add('dark-mode');
            elements.forEach((item) => item.classList.add("dark-mode"));
        } else {
            body.classList.remove('dark-mode');
            menuItems.forEach((item) => item.classList.remove("dark-mode"));
            bartheme.classList.remove('dark-mode');
            elements.forEach((item) => item.classList.remove("dark-mode"));
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="barMode">
            <button className="buttonLight" onClick={toggleDarkMode}>
                <img src={isDarkMode ? "./src/assets/Img/darkMode.png" : "./src/assets/Img/lightMode.png"} alt="switch color" />
            </button>
        </div>
    );
}

export default DarkMode;
