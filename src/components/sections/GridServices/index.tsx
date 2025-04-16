import { services } from "../../../data/services";
import styles from "./styles/styles.module.css";
import HeaderTtittleCompound from "@/components/compound/HeaderTittle";
// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { roboto } from "@/app/fonts";
import { CgArrowRight } from "react-icons/cg";
import Image from "next/image";
import { ButtonTonal } from "@/components/layout/Buttons";

const GridServices = () => {
  return (
    <div className={styles.wraperContainer}>
      <div className={styles.containerTittle}>
        <HeaderTtittleCompound
          options={{
            tittle: "Servicios para flota",
            subTittle:
              "Más que un servicio, una experiencia. ¡Obtén lo mejor al mejor precio!",
          }}
        >
          <HeaderTtittleCompound.Tittle />
          <HeaderTtittleCompound.SubTittle />
        </HeaderTtittleCompound>
        <ButtonTonal text="Quiero saber más" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        style={{ display: "grid" }}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className={styles.containerCards}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <Image
                alt={service.name}
                src={service.image}
                fill
                style={{ objectFit: "cover", zIndex: -1 }}
              />
              <div className={styles.wraper}></div>
              <div className={styles.contentName}>
                {" "}
                <h2 className={roboto.className}>{service.name}</h2>
                <p>{service.description.split(".")[0]}.</p>
              </div>
              <section className={styles.contentButtonsWraper}>
                <div className={styles.contentButtons}>
                  <div className={styles.informationExtra}>
                    {" "}
                    <p>{service.extrainformation} </p>{" "}
                  </div>
                  <button>
                    {" "}
                    <CgArrowRight />{" "}
                  </button>
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GridServices;
