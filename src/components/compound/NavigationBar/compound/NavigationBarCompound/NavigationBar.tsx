import { CiSearch } from "react-icons/ci";
import { NavigationBarContext, useNavigationBarContext } from "./context";
import { NavigationBarProps } from "./interface";
import styles from "./styles/styles.module.css";
import { useEffect, useRef, useState } from "react";
import LogoImage from "@/components/ui/Logo";
import { roboto } from "@/app/fonts";

const NavigationBar = function ({ options, children }: NavigationBarProps) {
  const navigationRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isInTop, setIsInTop] = useState(false);

  useEffect(() => {
    const checkIfTop = () => {
      if (navigationRef.current) {
        const rect = navigationRef.current.getBoundingClientRect();
        if (rect.top === 0) {
          setIsInTop(true);
        } else {
          setIsInTop(false);
        }
      }
    };

    window.addEventListener("scroll", checkIfTop);
    // Initial check
    checkIfTop();

    return () => {
      window.removeEventListener("scroll", checkIfTop);
    };
  }, []);

  return (
    <NavigationBarContext.Provider value={{ options }}>
      <div
        ref={navigationRef}
        className={`${roboto.className} ${styles.navigationWraper}`}
      >
        <nav className={styles.buttonNavigations}>{children} </nav>

        <div className={styles.frame}>
          <div className={styles.overlapGroup}>
            <input
              type="text"
              placeholder="Buscar por referencia..."
              className={styles.textWrapper}
            />
          </div>
          <CiSearch
            style={{
              color: "white",
              fontSize: "38px",
              fontWeight: "bold",
              marginRight: "15px",
            }}
          />
        </div>
        <LogoImage />
      </div>
    </NavigationBarContext.Provider>
  );
};

NavigationBar.ButtonHome = function ButtonHome() {
  const context = useNavigationBarContext();
  const text = context.options.buttonHome;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button> {text} </button>{" "}
    </div>
  );
};

NavigationBar.ButtonAboutUs = function ButtonAboutUs() {
  const context = useNavigationBarContext();
  const text = context.options.ButtonAboutUs;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button> {text} </button>{" "}
    </div>
  );
};

NavigationBar.ButtonBrands = function ButtonBrands() {
  const context = useNavigationBarContext();
  const text = context.options.buttonBrand;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button> {text} </button>{" "}
    </div>
  );
};

NavigationBar.ButtonServices = function ButtonServices() {
  const context = useNavigationBarContext();
  const text = context.options.ButtonServices;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button> {text} </button>{" "}
    </div>
  );
};

NavigationBar.ButtonContact = function ButtonContact() {
  const context = useNavigationBarContext();
  const text = context.options.ButtonContact;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button> {text} </button>{" "}
    </div>
  );
};

NavigationBar.ButtonProducts = function ButtonProducts() {
  const context = useNavigationBarContext();
  const text = context.options.ButtonProducts;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button> {text} </button>{" "}
    </div>
  );
};

export default NavigationBar;
