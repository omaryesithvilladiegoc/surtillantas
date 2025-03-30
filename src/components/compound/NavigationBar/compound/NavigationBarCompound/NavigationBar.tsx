import { CiSearch } from "react-icons/ci";
import { NavigationBarContext, useNavigationBarContext } from "./context";
import { NavigationBarProps } from "./interface";
import styles from "./styles/styles.module.css";
import { useRef } from "react";
import LogoImage from "@/components/ui/Logo";
import { roboto } from "@/app/fonts";
import { useRouter } from "next/navigation";

const NavigationBar = function ({ options, children }: NavigationBarProps) {
  const navigationRef = useRef<HTMLDivElement>(null);

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
  const router = useRouter();
  const context = useNavigationBarContext();
  const text = context.options.ButtonServices;
  return (
    <div className={styles.NavigationButton}>
      {" "}
      <button onClick={() => router.push("servicios")}> {text} </button>{" "}
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
