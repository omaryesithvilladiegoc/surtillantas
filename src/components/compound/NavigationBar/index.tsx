"use client";
import { useMediaQuery } from "usehooks-ts";
import NavigationBar from "./compound/NavigationBarCompound/NavigationBar";

const NavigationBarComponent = function () {
  const sx = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });

  const md = useMediaQuery("(min-width: 1440px)", {
    initializeWithValue: false,
  });
  return (
    <>
      {" "}
      <NavigationBar
        options={{
          ButtonProducts: "Productos",
          ButtonAboutUs: "Sobre nosotros",
          ButtonContact: "Contactanos",
          ButtonServices: "Servicios",
        }}
      >
        {sx && <NavigationBar.ButtonProducts />}
        {sx && <NavigationBar.ButtonAboutUs />}
        {md && <NavigationBar.ButtonContact />}
        {md && <NavigationBar.ButtonServices />}
      </NavigationBar>{" "}
    </>
  );
};

export default NavigationBarComponent;
