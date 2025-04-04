import { Montserrat, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const monserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
