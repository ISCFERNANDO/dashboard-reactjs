import React, { useRef, useEffect, useState } from "react";
import "./switch-dark-mode.css";

function SwitchDarkMode() {
  const [checked, setChecked] = useState(false);
  const ref = useRef(null);
  function handleDarkModeChange() {
    setChecked(ref.current.checked);
    changeTheme(ref.current.checked);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    console.log("mediaQuery ==> ", mediaQuery);
    setChecked(mediaQuery.matches);
    mediaQuery.addEventListener("change", changeMedia);
  }, []);

  function changeTheme(isDarkModeChecked) {
    if (isDarkModeChecked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  function changeMedia(event) {
    setChecked(event.matches);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        checked={checked}
        ref={ref}
        onChange={handleDarkModeChange}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default SwitchDarkMode;
