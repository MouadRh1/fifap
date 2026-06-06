// src/component/ContactForm.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUser, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Configuration API - URL CORRECTE (sans /api en trop)
  const API_URL = import.meta.env.VITE_API_URL || "https://darkgrey-kudu-778101.hostingersite.com/api";
  // Pour le développement local
  // const API_URL = "http://localhost:8000/api";

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
    conditions: false,
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des conditions
    if (!formData.conditions) {
      setStatus("conditions_error");
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrors({});

    try {
      // URL CORRECTE : ${API_URL}/contact (pas /api/contact)
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message || "Message envoyé depuis le formulaire de contact",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          message: "",
          conditions: false,
        });
      } else if (response.status === 422 && data.errors) {
        // Erreurs de validation
        setErrors(data.errors);
        setStatus("validation_error");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nom et Prénom - 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("nom")} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ac5f2d] opacity-60" />
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                placeholder={t("votre_nom")}
                className={`w-full pl-10 pr-4 py-3 bg-white border-b-2 focus:outline-none transition-all duration-300 ${
                  errors.nom ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#ac5f2d]"
                } ${isArabic ? "text-right" : "text-left"}`}
                dir={isArabic ? "rtl" : "ltr"}
              />
            </div>
            {errors.nom && (
              <p className="text-red-500 text-xs mt-1">{errors.nom[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("prenom")} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ac5f2d] opacity-60" />
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                placeholder={t("votre_prenom")}
                className={`w-full pl-10 pr-4 py-3 bg-white border-b-2 focus:outline-none transition-all duration-300 ${
                  errors.prenom ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#ac5f2d]"
                }`}
              />
            </div>
            {errors.prenom && (
              <p className="text-red-500 text-xs mt-1">{errors.prenom[0]}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            {t("email")} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ac5f2d] opacity-60" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="exemple@email.com"
              className={`w-full pl-10 pr-4 py-3 bg-white border-b-2 focus:outline-none transition-all duration-300 ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#ac5f2d]"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            {t("telephone")}
          </label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ac5f2d] opacity-60" />
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+212 6 XX XX XX XX"
              className="w-full pl-10 pr-4 py-3 bg-white border-b-2 border-gray-300 focus:border-[#ac5f2d] focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            {t("message")} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder={t("votre_message")}
            className={`w-full px-4 py-3 bg-white border-b-2 focus:outline-none transition-all duration-300 resize-none ${
              errors.message ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#ac5f2d]"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message[0]}</p>
          )}
        </div>

        {/* Checkbox Conditions */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            name="conditions"
            checked={formData.conditions}
            onChange={handleChange}
            id="conditions"
            className="mt-1 w-5 h-5 text-[#ac5f2d] border-gray-300 rounded focus:ring-[#ac5f2d] cursor-pointer"
          />
          <label
            htmlFor="conditions"
            className="text-gray-600 text-sm leading-relaxed cursor-pointer"
          >
            {t("conditions_acceptation")}{" "}
            <a
              href="/conditions"
              target="_blank"
              className="text-[#ac5f2d] hover:underline font-medium"
            >
              {t("conditions_generales")}
            </a>
          </label>
        </div>

        {/* Bouton de validation */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] hover:shadow-lg transform hover:-translate-y-0.5"
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("envoi_en_cours")}
              </>
            ) : (
              <>
                <FaCheckCircle className="transition-transform group-hover:scale-110" />
                {t("envoyer")}
              </>
            )}
          </span>
        </button>

        {/* Messages de statut */}
        {status === "success" && (
          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <p className="text-green-700 font-medium">
              ✅ {t("message_envoye")}
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="text-red-700 font-medium">❌ {t("erreur_envoi")}</p>
          </div>
        )}

        {status === "conditions_error" && (
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
            <p className="text-yellow-700 font-medium">
              ⚠️ {t("conditions_required")}
            </p>
          </div>
        )}

        {status === "validation_error" && (
          <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
            <p className="text-orange-700 font-medium">
              ⚠️ {t("validation_error")}
            </p>
          </div>
        )}
      </form>

      {/* Pied de page */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400">{t("form_protected")}</p>
      </div>
    </div>
  );
};

export default ContactForm;