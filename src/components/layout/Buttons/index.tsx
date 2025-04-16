import styles from "./styles/styles.module.css";
import { CSSProperties } from "react";

interface ButtonProps {
  text: string;
  style?: CSSProperties;
}

export const ButtonOutlined = ({ text, style }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonOutlined}`}
      style={style}
    >
      {text}
    </button>
  );
};

export const ButtonElevated = ({ text, style }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonElevated}`}
      style={style}
    >
      {text}
    </button>
  );
};

export const ButtonTonal = ({ text, style }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles.buttonTonal}`} style={style}>
      {text}
    </button>
  );
};

export const ButtonFilled = ({ text, style }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles.buttonFilled}`} style={style}>
      {text}
    </button>
  );
};
