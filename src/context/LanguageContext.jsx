// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import ProgramData_fr from '../Data/DataProgram_fr';
import ProgramData_ar from '../Data/DataProgram_ar';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');
  const [programData, setProgramData] = useState(language === 'fr' ? ProgramData_fr : ProgramData_ar);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setProgramData(lang === 'fr' ? ProgramData_fr : ProgramData_ar);
  };

  return (
    <LanguageContext.Provider value={{ language, programData, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};