import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../Image/Logo-FIFAP.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo et Description */}
        <div>
          <Link to="/" className="text-2xl flex pb-8 justify-center font-bold">
            <img src={logo} className="w-30 rounded-[50%]" alt="" />
          </Link>
          <p className="mt-2  text-center text-gray-400">
            deuxieme Festival International du Film <br /> Archéologique et
            Patrimonial de Rabat
          </p>
        </div>

        {/* Liens */}
        <div>
          <h3 className="text-xl text-center text-[#ac5f2d] underline pb-8 decoration-[#ac5f2d] font-semibold">
            Links
          </h3>
          <ul className="mt-2 text-center space-y-2">
            <li>
              <Link
                to={"/"}
                className="text-gray-400 sm:text-white hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"/program"} className="text-gray-400 hover:text-white">
                Program
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-xl text-[#ac5f2d] underline decoration-[#ac5f2d] pb-8 font-semibold">
            Contact
          </h3>
          <p className="text-gray-400 my-2">
            {" "}
            <span className="text-white">Email :</span>{" "}
            <a
              href="mailto:contact@fifap.com"
              className="text-gray-400 hover:underline"
            >
              cerpaamfes2019@gmail.com
            </a>
          </p>
          <p className="text-gray-400 my-2">
            {"  "}
            <span className="text-white">Téléphone :</span>{" "}
            <a
              href="tel:+212 661-101883"
              className="text-gray-400 hover:underline"
            >
              0661-101883
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <Instagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <Twitter />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="flex justify-center gap-3 border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()}.Tous droits réservés.</p>
        <p>
          <a href="#" className="hover:text-white">
            Politique de confidentialité
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-white">
            Mentions légales
          </a>
        </p>
        <p>
          Site by{" "}
          <a
            href="https://evomarketagency.com/"
            className="text-[#ac5f2d] font-semibold"
          >
            EvoMarket
          </a>
        </p>
      </div>
    </footer>
  );
}
