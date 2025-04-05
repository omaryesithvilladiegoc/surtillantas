import { Montserrat, Roboto, League_Spartan } from "next/font/google";
import { Timmana, Red_Rose } from "next/font/google";

export const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export const monserratLight = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const leagueSpartan = League_Spartan({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const leagueSpartanLight = League_Spartan({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const timmana = Timmana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const redRose = Red_Rose({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
