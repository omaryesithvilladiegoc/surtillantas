"use client";
import { useMediaQuery } from "usehooks-ts";
import NavigationBar from "./compound/NavigationBarCompound/NavigationBar";

const NavigationBarComponent = function () {
  const sx = useMediaQuery("(min-width: 768px)", {
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
        }}
      >
        {sx && <NavigationBar.ButtonProducts />}
        {sx && <NavigationBar.ButtonAboutUs />}
        {sx && <NavigationBar.ButtonContact />}
      </NavigationBar>{" "}
    </>
  );
};

export default NavigationBarComponent;
