"use client";
import { services } from "@/data/services";
import styles from "./styles/services.module.css";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nuestros Servicios</h1>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.serviceName}>{service.name}</h2>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
