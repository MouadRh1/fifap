import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, LogIn, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./../Css/NavBar.module.css";
import { Menus } from "./../../Data/Utils";
import SearchBar from "../SearchBar";
// import ButtonLangue from "../Outil/ButtonLangue"; // ← temporairement désactivé

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navBar = useRef(null);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isArabic = i18n.language === "ar";

  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_name");
    setIsLoggedIn(false);
    window.location.href = "/admin";
  };

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
    setMobileDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

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

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) header.style.direction = "ltr";
  }, []);

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
                    className={`${styles.menuLink} ${location.pathname.startsWith("/program") ? styles.active : ""}`}
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
                      className={`${styles.chevronIcon} ${openDropdown === "program" ? styles.chevronRotate : ""}`}
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
                    className={`${styles.menuLink} ${location.pathname.startsWith("/autour") ? styles.active : ""}`}
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
                      className={`${styles.chevronIcon} ${openDropdown === "autour" ? styles.chevronRotate : ""}`}
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

        {/* Actions (langue + search + login + burger) */}
        <div className={styles.mobileActions} style={{ direction: "ltr" }}>
          {/* Boutons Admin / Dashboard Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <>
                {/* Lien vers le Dashboard — visible uniquement si connecté */}
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] hover:shadow-lg text-white rounded-lg transition-all duration-300"
                >
                  <LayoutDashboard size={18} />
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>

                {/* Bouton Déconnexion */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
                >
                  <LogIn size={18} className="rotate-180" />
                  <span className="text-sm font-medium">Déconnexion</span>
                </button>
              </>
            ) : (
              <Link
                to="/admin"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ac5f2d] to-[#e67e22] hover:shadow-lg text-white rounded-lg transition-all duration-300"
              >
                <LogIn size={18} />
                <span className="text-sm font-medium">Admin</span>
              </Link>
            )}
          </div>

          {/* ButtonLangue temporairement désactivé */}
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
                        className={`${styles.mobileChevron} ${isExpanded ? styles.mobileChevronRotate : ""}`}
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
                        className={`${styles.mobileChevron} ${isExpanded ? styles.mobileChevronRotate : ""}`}
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

            {/* Boutons Admin / Dashboard dans le menu mobile */}
            {isLoggedIn ? (
              <>
                {/* Lien Dashboard mobile */}
                <li className={styles.mobileDropdownItem}>
                  <Link
                    className={styles.mobileMenuLink}
                    to="/admin/dashboard"
                    onClick={() => setIsOpen(false)}
                    style={{ backgroundColor: "#ac5f2d", color: "white" }}
                  >
                    <span>Dashboard</span>
                    <LayoutDashboard size={18} />
                  </Link>
                </li>

                {/* Déconnexion mobile */}
                <li className={styles.mobileDropdownItem}>
                  <div
                    className={styles.mobileMenuLink}
                    onClick={handleLogout}
                    style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}
                  >
                    <span>Déconnexion Admin</span>
                    <LogIn size={18} className="rotate-180" />
                  </div>
                </li>
              </>
            ) : (
              <li className={styles.mobileDropdownItem}>
                <Link
                  className={styles.mobileMenuLink}
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  style={{ backgroundColor: "#ac5f2d", color: "white" }}
                >
                  <span>Administration</span>
                  <LogIn size={18} />
                </Link>
              </li>
            )}

            {/* ButtonLangue temporairement désactivé */}
            {/* <li className={styles.mobileDivider}>
              <div className="flex justify-center">
                <ButtonLangue />
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}