import Image from "next/image";
import { services } from "./data";
import styles from "./styles/styles.module.css";
import { GrServices } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { roboto } from "@/app/fonts";
import HeaderTtittleCompound from "@/components/compound/HeaderTittle";

const GridServices = () => {
  return (
    <div className={styles.wraperContainer}>
      {" "}
      <HeaderTtittleCompound
        options={{
          tittle: "Servicios para flota",
        }}
      >
        <HeaderTtittleCompound.Tittle />
        <HeaderTtittleCompound.IconAhead />
      </HeaderTtittleCompound>
      <section className={styles.containerCards}>
        {" "}
        {services.map((service, index) => {
          return (
            <div className={styles.card} key={index}>
              <Image
                fill
                style={{ objectFit: "cover", zIndex: "-10000" }}
                alt={service.name}
                src={service.image}
              />
              <div className={styles.wraper}> </div>
              <h2 className={roboto.className}> {service.name} </h2>{" "}
              <div className={styles.buttonContainer}>
                <div className={styles.wraperButton}>
                  {" "}
                  <GrServices />{" "}
                  <button>
                    Contratar <IoIosArrowForward />{" "}
                  </button>
                </div>
              </div>{" "}
            </div>
          );
        })}{" "}
      </section>
    </div>
  );
};

export default GridServices;
