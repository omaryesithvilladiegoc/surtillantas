import React from "react";
import styles from "./styles/styles.module.css";
import Image from "next/image";

const MainWrapper: React.FC = () => {
  return (
    <div className={styles.mainWraper}>
      <div className={styles.poligono}></div>
      <h2 className={styles.textInitial}>
        Servicios y llantas de la mejor calidad
      </h2>
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
