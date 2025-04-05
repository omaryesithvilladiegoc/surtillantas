import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/normalice.css";
import NavBar from "@/components/compound/NavBar";
import NavigationBarComponent from "@/components/compound/NavigationBar";
import { monserratLight } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={monserratLight.className}>
        <NavBar />
        <NavigationBarComponent />
        {children}
      </body>
    </html>
  );
}
