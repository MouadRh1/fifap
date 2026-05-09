import { Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../Image/Logo-FIFAP.png";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className="bg-gray-700 text-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo et Description */}
        <div>
          <Link to="/" className="text-2xl flex pb-8 justify-center font-bold">
            <img src={logo} className="w-30 rounded-[50%]" alt="FIFAP Logo" />
          </Link>
          <p className="mt-2 text-center text-gray-400">
            {t("footer_description")}
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="text-xl text-center text-[#ac5f2d] underline pb-8 decoration-[#ac5f2d] font-semibold">
            {t("footer_links")}
          </h3>
          <ul className="mt-2 text-center space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                {t("accueil")}
              </Link>
            </li>
            <li>
              <Link to="/program/2026" className="text-gray-400 hover:text-white transition">
                {t("programme")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                {t("contact")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition">
                {t("a_propos")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-xl text-[#ac5f2d] underline decoration-[#ac5f2d] pb-8 font-semibold">
            {t("contact")}
          </h3>
          <p className="text-gray-400 my-2">
            <span className="text-white">{t("email")} :</span>{" "}
            <a
              href="mailto:cerpaamfes2019@gmail.com"
              className="text-gray-400 hover:underline"
            >
              cerpaamfes2019@gmail.com
            </a>
          </p>
          <p className="text-gray-400 my-2">
            <span className="text-white">{t("telephone")} :</span>{" "}
            <a
              href="tel:+212661101883"
              className="text-gray-400 hover:underline"
            >
              0661-101883
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com/fifapmaroc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} FIFAP. {t("tous_droits_reserves")}</p>
        <p>
          <a href="#" className="hover:text-white transition">
            {t("politique_confidentialite")}
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white transition">
            {t("mentions_legales")}
          </a>
        </p>
        <p>
          {t("site_by")}{" "}
          <a
            href="https://evomarketagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ac5f2d] font-semibold hover:underline"
          >
            EvoMarket
          </a>
        </p>
      </div>
    </footer>
  );
}