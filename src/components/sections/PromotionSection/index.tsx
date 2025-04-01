import Image from "next/image";
import styles from "./styles/styles.module.css";

export const PromotionSection = () => {
  return (
    <section className={styles.parentMain}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <Image
            src="/assets/promotions/promo1.webp"
            alt="Promotion 1"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.div2}>
          <Image
            src="/assets/promotions/promo2.webp"
            alt="Promotion 2"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.div3}>
          <Image
            src="/assets/promotions/promo3.webp"
            alt="Promotion 3"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
