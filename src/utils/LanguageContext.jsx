import React, { createContext, useState } from 'react';
import Translate from './translate.json';
import EN from '../assets/icons/en.png';
import ID from '../assets/icons/id.png';
const LanguageContext = React.createContext();

const languages = [
  {
    code: 'en',
    desk: 'EN',
    label: 'EN',
    icon: EN,
  },
  {
    code: 'id',
    desk: 'ID',
    label: 'ID',
    icon: ID,
  },
];

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('id');

  const t = (text) => {
    return Translate[language][text];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider, languages };
