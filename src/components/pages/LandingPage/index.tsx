"use client";
import { useState } from "react";
import MainWrapper from "../../layout/MainWraper";
import { BrandsSlider } from "@/components/sections/BrandsSlider";
import GridServices from "@/components/sections/GridServices";
import styles from "./styles/styles.module.css";
import { BsMouse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import PromotionSection from "@/components/sections/PromotionSection";
import FormSection from "@/components/sections/FormSection";

const LandingPage = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScroll = (targetPosition: number) => {
    if (isScrolling) return; // Evita interrupciones
    setIsScrolling(true);

    const startPosition = window.scrollY || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    const duration = 500; // Duración en ms
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (direction: "up" | "down") => {
    const scrollAmount = direction === "up" ? -700 : 700;
    const targetScroll =
      (window.scrollY || document.documentElement.scrollTop) + scrollAmount;
    smoothScroll(targetScroll);
  };

  return (
    <div className={styles.landingPage}>
      <div>
        <MainWrapper />
      </div>
      <div>
        <BrandsSlider />
      </div>
      <div>
        <GridServices />
      </div>
      <div>
        <PromotionSection />
      </div>
      <div>
        <FormSection />
      </div>
      <div className={styles.mouseContainer}>
        <button
          onClick={() => handleScroll("up")}
          className={styles.mouseButton}
        >
          <IoIosArrowDown
            size={24}
            className={`${styles.arrowIcon} ${styles.upArrow}`}
          />
        </button>
        <span className={styles.mouseButton}>
          <BsMouse className={styles.mouseIcon} />
        </span>
        <button
          onClick={() => handleScroll("down")}
          className={styles.mouseButton}
        >
          <IoIosArrowDown size={24} className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
