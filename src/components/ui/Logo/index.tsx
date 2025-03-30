import Image from "next/image";
import { motion } from "motion/react";
import { logoStyles } from "@/components/styles-motion";

const LogoImage = () => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "10%",
        height: "100%",
        left: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...logoStyles}
    >
      <Image
        src={"/assets/isotipo.webp"}
        alt="logo"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
        style={{ objectFit: "contain", top: 0 }}
      />
    </motion.div>
  );
};

export default LogoImage;
