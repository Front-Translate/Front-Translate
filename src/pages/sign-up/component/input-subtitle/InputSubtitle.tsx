import React from "react";
import styles from "./InputSubtitle.module.scss";

const InputSubtitle: React.FC<{
  value: string;
  onChange: (value: string) => void;
  text: string;
  hide?: boolean;
}> = ({ value, onChange, text, hide = false }) => {
  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          type={hide ? "password" : "text"}
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className={styles.inputSubTitle}>{text}</div>
      </div>
    </>
  );
};

export default InputSubtitle;
