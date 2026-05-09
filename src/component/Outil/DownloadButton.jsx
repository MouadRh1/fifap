import React, { useState } from "react";
import { Download, X } from "lucide-react";
import { motion } from "framer-motion";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// Importez vos fichiers ici
import programFrancais from '../Assets/program-fr.pdf';
import programArabe from '../Assets/program-ar.pdf';
import invitation from '../Assets/invitation.pdf';

const DownloadButton = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const handleDownload = (file, fileName, message) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSnackbarMessage(message);
    setOpenSnackbar(true);
    setShowDownloadOptions(false);
  };

  return (
    <div className="fixed bottom-6 right-3 z-50 flex flex-col items-end gap-2">
      {showDownloadOptions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-white rounded-xl shadow-xl p-4 flex flex-col gap-3 w-64"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Télécharger</h3>
            <button 
              onClick={() => setShowDownloadOptions(false)}
              className="text-gray-500 cursor-pointer hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDownload(programFrancais, "programme-francais.pdf", "Programme en français téléchargé !")}
            className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg text-left"
          >
            Programme (Français)
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDownload(programArabe, "programme-arabe.pdf", "Programme en arabe téléchargé !")}
            className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg text-left"
          >
            Programme (Arabe)
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDownload(invitation, "invitation.pdf", "Invitation téléchargée !")}
            className="px-4 py-2 cursor-pointer bg-orange-500 text-white rounded-lg text-left"
          >
            Invitation
          </motion.button>
        </motion.div>
      )}

      <motion.button
        onClick={() => setShowDownloadOptions(!showDownloadOptions)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex cursor-pointer items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
      >
        <Download size={22} />
        <span className="flex items-center">
          <span className="hidden md:block">Télécharger</span>
        </span>
      </motion.button>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MuiAlert 
          elevation={6} 
          variant="filled" 
          severity="success" 
          onClose={() => setOpenSnackbar(false)}
        >
          {snackbarMessage} 🎉
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default DownloadButton;