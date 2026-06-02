// src/component/ChatButton.jsx
import React, { useState, useEffect } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "../Pages/ContactForm";

const ChatButton = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Bloquer le scroll du body quand le modal est ouvert
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Réactiver le scroll du body
    document.body.style.overflow = "auto";
  };

  // Nettoyer l'effet au démontage du composant
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Fermer le modal avec la touche Echap
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  return (
    <>
      {/* Bouton Chat flottant */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
        className="fixed bottom-6 left-6 z-[100] bg-[#ac5f2d] hover:bg-[#8b4a24] text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 group"
        aria-label="Ouvrir le chat"
      >
        <FaCommentDots size={28} />
        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {t("chat_button")}
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              style={{ marginTop: "0" }}
            >
              {/* En-tête du modal */}
              <div className="sticky top-0 bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] px-6 py-4 flex justify-between items-center rounded-t-2xl z-10">
                <div className="flex items-center gap-3">
                  <FaCommentDots className="text-white text-2xl" />
                  <h2 className="text-xl font-bold text-white">
                    {t("chat_title")}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Contenu du modal */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600">
                    {t("chat_description")}
                  </p>
                </div>

                {/* Formulaire */}
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;