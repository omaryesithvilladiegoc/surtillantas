"use client";
import LandingPage from "@/components/pages/LandingPage";
import styles from "./page.module.css";
import NavBar from "@/components/compound/NavBar";
import NavigationBarComponent from "@/components/compound/NavigationBar";

export default function App() {
  return (
    <div className={styles.page}>
      <NavBar />
      <NavigationBarComponent position={true} />
      <LandingPage />
    </div>
  );
}
