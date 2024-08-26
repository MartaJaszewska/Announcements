import { useState } from "react";
import styles from "./Toggle.module.scss";

function Toggle({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.toggle}>
      <h2>
        {name} <button onClick={() => setIsOpen(!isOpen)}>+</button>
      </h2>
      <div className={isOpen ? styles.contentHidden : styles.contentShow}>
        {children}
      </div>
    </div>
  );
}

export default Toggle;
