import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { dataBrands } from "./data";
import styles from "./styles/styles.module.css";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import HeaderTtittleCompound from "@/components/compound/HeaderTittle";

export const BrandsSlider = () => {
  return (
    <section className={styles.section}>
      <HeaderTtittleCompound
        options={{
          tittle: "Marcas",
        }}
      >
        <HeaderTtittleCompound.Tittle />
        <HeaderTtittleCompound.IconAhead />
      </HeaderTtittleCompound>
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {dataBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideContent}>
                <div className={styles.brandContainer}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    style={{
                      objectFit: "contain",
                      top: 0,
                      filter: "grayscale(100%)",
                      mixBlendMode: "multiply",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
