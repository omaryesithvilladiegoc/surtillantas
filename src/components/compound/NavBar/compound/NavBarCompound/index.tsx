"use client";
import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";

import { NavBarConext, useNavBarContext } from "./context";
import { NavBarProps } from "./interfaces";
import { leagueSpartanLight } from "@/app/fonts";

const NavBarCompound = ({ children, options }: NavBarProps) => {
  return (
    <NavBarConext.Provider value={{ options }}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>{children}</ul>
      </nav>
    </NavBarConext.Provider>
  );
};

NavBarCompound.WassappSection = function WassappSection({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showText,
}: {
  showText?: boolean;
}) {
  const context = useNavBarContext();
  const { whatsapp } = context.options;
  return (
    <li className={styles.navItemWhatsapp}>
      {/* {showText && <p>Contacta con un distribuidor especializado</p>} */}

      <div>
        <a href={`https://wa.me/${whatsapp}`} target="_blank">
          <RiWhatsappFill
            fontSize={"4rem"}
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              overflow: "visible",
            }}
            color="yellowgreen"
          />
        </a>
      </div>
    </li>
  );
};

NavBarCompound.LogoIcon = function LogoIcon() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src={"/assets/logo.png"}
        alt="logo"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
        style={{ objectFit: "cover", top: 0 }}
      />
    </div>
  );
};

NavBarCompound.ContacInfo = function ContacInfo() {
  const context = useNavBarContext();
  const { correo, telefono } = context.options;
  return (
    <div className={styles.navContactInfo}>
      <div className={styles.navContactInfoContainer}>
        <li className={styles.navItemMail}>
          <CiMail />
          <a className={leagueSpartanLight.className} href={`mailto:${correo}`}>
            {correo}
          </a>
        </li>

        <li className={styles.navItemPhone}>
          <FaPhoneAlt style={{ color: "yellow" }} />
          <a href={`tel:${telefono}`}>{telefono}</a>
        </li>
      </div>
    </div>
  );
};

export default NavBarCompound;
