import { Scroll } from "lucide-react";
import Router from "./Routers/Router";
import ScrollToTop from "./component/ScrollToTop";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Appliquer la direction RTL pour l'arabe
    const html = document.querySelector("html");
    if (i18n.language === "ar") {
      html.setAttribute("dir", "rtl");
    } else {
      html.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
