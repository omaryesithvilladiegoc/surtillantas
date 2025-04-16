import React from "react";
import styles from "./styles/styles.module.css";
import Image from "next/image";
import { redRose } from "@/app/fonts";
import { ButtonOutlined } from "../Buttons";

const MainWrapper: React.FC = () => {
  return (
    <div className={styles.mainWraper}>
      <div className={styles.poligono}></div>
      <div className={styles.textInitial}>
        <h2 className={`${redRose.className} `}>
          Servicios y llantas de la mejor calidad
        </h2>
        <ButtonOutlined text="Solicita una cotización" />
      </div>

      <Image
        alt="image-main"
        src={"/assets/background-main.webp"}
        style={{ top: 0, objectFit: "cover" }}
        fill
        loading="lazy"
      />
    </div>
  );
};

export default MainWrapper;
