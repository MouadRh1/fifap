import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./../Css/NavBar.module.css";
import { Menus } from "./../../Data/Utils";
import { Link, NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";
import ButtonLangue from "../Outil/ButtonLangue";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile (séparé)
  const navBar = useRef(null);
  const location = useLocation();

  const isArabic = i18n.language === "ar";

  const translatedMenus = Menus.map((menu) => ({
    ...menu,
    name: t(menu.name),
    subMenu: menu.subMenu?.map((sub) => ({
      ...sub,
      name: t(sub.name),
    })),
  }));

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
    setMobileDropdown(null); // reset les dropdowns mobiles à l'ouverture/fermeture
  };

  // Toggle desktop dropdown
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Toggle mobile dropdown (indépendant du desktop)
  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navBar.current.classList.add(styles.navBarScroll);
    } else {
      navBar.current.classList.remove(styles.navBarScroll);
    }
    if (window.scrollY > 0) {
      setIsOpen(false);
      setOpenDropdown(null);
      setMobileDropdown(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Forcer LTR sur le header
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) header.style.direction = "ltr";
  }, []);

  // Fermer le dropdown desktop au clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);

  const autourSubMenus = [
    { name: t("hommage"), path: "/hommage" },
    { name: t("conferences"), path: "/conferences" },
  ];

  return (
    <header
      ref={navBar}
      className={`${styles.navBar}`}
      style={{ direction: "ltr" }}
    >
      <nav className={styles.navContainer} style={{ direction: "ltr" }}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Link onClick={() => setIsOpen(false)} to="/">
            <h4
              style={{
                color: "#ac5f2d",
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "Almalik, sans-serif",
                textTransform: "uppercase",
              }}
            >
              F<span className="text-black">i</span>f
              <span className="text-black">a</span>
              <span className="text-[#ac5d2f]">p</span>
            </h4>
          </Link>
        </div>

        {/* ===== MENU DESKTOP ===== */}
        <ul className={styles.desktopMenu} style={{ direction: "ltr" }}>
          {translatedMenus.map((menu, index) => {
            const isProgramMenu =
              menu.name === "Programme" || menu.name === "البرنامج";
            const isAutourMenu =
              menu.name === "Autour du festival" ||
              menu.name === "حول المهرجان";

            if (isProgramMenu) {
              return (
                <li
                  key={menu.name}
                  className={`${styles.menuItem} dropdown-container`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div
                    className={`${styles.menuLink} ${
                      location.pathname.startsWith("/program")
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => toggleDropdown("program")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {menu.name}
                    <ChevronDown
                      size={16}
                      className={`${styles.chevronIcon} ${
                        openDropdown === "program" ? styles.chevronRotate : ""
                      }`}
                    />
                  </div>
                  {openDropdown === "program" && (
                    <div className={styles.dropdownMenu}>
                      <Link
                        to="/program/2025"
                        className={styles.dropdownItem}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t("programme_2025")}
                      </Link>
                      <Link
                        to="/program/2026"
                        className={styles.dropdownItem}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t("programme_2026")}
                      </Link>
                    </div>
                  )}
                </li>
              );
            }

            if (isAutourMenu) {
              return (
                <li
                  key={menu.name}
                  className={`${styles.menuItem} dropdown-container`}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div
                    className={`${styles.menuLink} ${
                      location.pathname.startsWith("/autour")
                        ? styles.active
                        : ""
                    }`}
                    onClick={() => toggleDropdown("autour")}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {menu.name}
                    <ChevronDown
                      size={16}
                      className={`${styles.chevronIcon} ${
                        openDropdown === "autour" ? styles.chevronRotate : ""
                      }`}
                    />
                  </div>
                  {openDropdown === "autour" && (
                    <div className={styles.dropdownMenu}>
                      {autourSubMenus.map((submenu) => (
                        <Link
                          key={submenu.path}
                          to={submenu.path}
                          className={styles.dropdownItem}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {submenu.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li
                key={menu.name}
                className={styles.menuItem}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `${styles.menuLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Actions (langue + search + burger) */}
        <div className={styles.mobileActions} style={{ direction: "ltr" }}>
          {/* <ButtonLangue /> */}
          <div className="ml-4 relative">
            <SearchBar />
          </div>
          <motion.button
            onClick={toggleDrawer}
            className={styles.menuButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* ===== MENU MOBILE ===== */}
        <div
          className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        >
          <ul>
            {translatedMenus.map((menu) => {
              const isProgramMenu =
                menu.name === "Programme" || menu.name === "البرنامج";
              const isAutourMenu =
                menu.name === "Autour du festival" ||
                menu.name === "حول المهرجان";

              if (isProgramMenu) {
                const isExpanded = mobileDropdown === "program";
                return (
                  <li key={menu.name} className={styles.mobileDropdownItem}>
                    <div
                      className={styles.mobileMenuLink}
                      onClick={() => toggleMobileDropdown("program")}
                    >
                      <span>{menu.name}</span>
                      <ChevronDown
                        size={18}
                        className={`${styles.mobileChevron} ${
                          isExpanded ? styles.mobileChevronRotate : ""
                        }`}
                      />
                    </div>
                    {isExpanded && (
                      <div className={styles.mobileSubMenu}>
                        <Link
                          className={styles.mobileSubMenuLink}
                          to="/program/2026"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                        >
                          {t("programme_2026")}
                        </Link>
                        <Link
                          className={styles.mobileSubMenuLink}
                          to="/program/2025"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                        >
                          {t("programme_2025")}
                        </Link>
                      </div>
                    )}
                  </li>
                );
              }

              if (isAutourMenu) {
                const isExpanded = mobileDropdown === "autour";
                return (
                  <li key={menu.name} className={styles.mobileDropdownItem}>
                    <div
                      className={styles.mobileMenuLink}
                      onClick={() => toggleMobileDropdown("autour")}
                    >
                      <span>{menu.name}</span>
                      <ChevronDown
                        size={18}
                        className={`${styles.mobileChevron} ${
                          isExpanded ? styles.mobileChevronRotate : ""
                        }`}
                      />
                    </div>
                    {isExpanded && (
                      <div className={styles.mobileSubMenu}>
                        <Link
                          className={styles.mobileSubMenuLink}
                          to="/hommage"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                        >
                          {t("hommage")}
                        </Link>
                        <Link
                          className={styles.mobileSubMenuLink}
                          to="/conferences"
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                        >
                          {t("conferences")}
                        </Link>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={menu.name}>
                  <Link
                    className={styles.mobileMenuLink}
                    onClick={() => setIsOpen(false)}
                    to={menu.path}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}

            <li className={styles.mobileDivider}>
              <div className="flex justify-center">
                {/* <ButtonLangue /> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
