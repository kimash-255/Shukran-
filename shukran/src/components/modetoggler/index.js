import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlind, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const ModeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      // Switching to dark mode
      document.documentElement.classList.add('dark');
    } else {
      // Switching to light mode
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
        <FontAwesomeIcon icon={darkMode ? faLightbulb : faBlind} className={darkMode ? "text-yellow-400 dark:text-yellow-300" : "text-gray-600 dark:text-gray-400"} />
      </button>
    </div>
  );
};

export default ModeToggler;
