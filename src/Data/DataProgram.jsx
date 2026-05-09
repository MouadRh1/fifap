// src/Data/DataProgram.jsx
import ProgramData_fr from './DataProgram_fr';
import ProgramData_ar from './DataProgram_ar';

let currentLanguage = 'fr';

// Fonction pour changer la langue
export const setProgramDataLanguage = (lang) => {
  currentLanguage = lang;
};

// Fonction pour obtenir les données selon la langue actuelle
const getProgramData = () => {
  return currentLanguage === 'ar' ? ProgramData_ar : ProgramData_fr;
};

// Export par défaut qui retourne les données actuelles
const ProgramData = getProgramData();
export default ProgramData;

// Export aussi la fonction pour mettre à jour
export { getProgramData };