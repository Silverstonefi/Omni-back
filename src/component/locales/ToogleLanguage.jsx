import React from 'react';
import { useTranslation } from 'react-i18next';
import Translate from './Translate'; // Import your Translate function

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <select value={Translate()} onChange={(e) => toggleLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
