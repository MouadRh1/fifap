import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from './Css/Header.module.css'
export default function Header() {
  const [text] = useTypewriter({
    words: [
        "Bienvenue au Festival du Cinéma Rétro !",
        "Plongez dans la magie du 7ᵉ art",
        "Revivez les chefs-d'œuvre du passé "
    ],
    loop: true,
    delaySpeed:2000,
  });

  return (
    <div className={` ${styles.container}`}>
        <div className={` ${styles.text}`}>
            <span>{text}</span>
            <Cursor />
        </div>
        <div className={` ${styles.rdv}`}></div>
    </div>
  );
}
