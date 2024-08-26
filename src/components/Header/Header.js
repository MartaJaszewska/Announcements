import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../logo.svg";
import languageSelector from "../../languageSelector.svg";
import search from "../../search.svg";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.mainNavigation}>
        <div className={styles.languageSelector}>
          <img src={languageSelector} alt="lang" />
        </div>
        <div className={styles.search}>
          <img src={search} alt="search" />
        </div>
        <div
          className={`${styles.toggleMenu} ${isActive ? styles.active : ""}`}
        >
          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
          <nav className={styles.navMenu}>
            <ul>
              <li>
                <a href="#">Link1</a>
              </li>
              <li>
                <a href="#">Link2</a>
              </li>
              <li>
                <a href="#">Link3</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
