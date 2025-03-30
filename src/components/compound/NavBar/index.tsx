"use client";
import { useMediaQuery } from "usehooks-ts";
import NavBarCompound from "./compound/NavBarCompound";

const NavBar = () => {
  const matches = useMediaQuery("(min-width: 1240px)", {
    initializeWithValue: false,
  });
  return (
    <div>
      <NavBarCompound
        options={{
          whatsapp: "123456789",
          correo: "servicioalcliente@almacensurtillantas.com",
          telefono: "123456789",
        }}
      >
        <NavBarCompound.ContacInfo />
        <NavBarCompound.LogoIcon />

        <NavBarCompound.WassappSection showText={matches} />
      </NavBarCompound>
    </div>
  );
};

export default NavBar;
