"use client";
import MainWrapper from "../../layout/MainWraper";
import { BrandsSlider } from "@/components/sections/BrandsSlider";
import GridServices from "@/components/sections/GridServices";
import styles from "./styles/styles.module.css";
import { BsMouse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react";

const LandingPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "up" | "down") => {
    if (!contentRef.current) return;

    const scrollAmount = direction === "up" ? -800 : 800;
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const targetScroll = currentScroll + scrollAmount;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.landingPage} ref={contentRef}>
      <div>
        <MainWrapper />
      </div>
      <div>
        <BrandsSlider />
      </div>
      <div>
        <GridServices />
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
