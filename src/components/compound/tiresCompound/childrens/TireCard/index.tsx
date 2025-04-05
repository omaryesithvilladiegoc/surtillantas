import Image from "next/image";
import { Tire } from "../../types";
import styles from "../../styles/styles.module.css";
import { monserratLight, redRose } from "@/app/fonts";

export default function TireCard({ tire }: { tire: Tire }) {
  return (
    <div className={styles.containerCardWraper}>
      <div>
        <h4 className={redRose.className}> {tire.name} </h4>
        <h5 className={monserratLight.className}> {tire.brand} </h5>
      </div>

      <div style={{}}>
        <Image
          style={{ objectFit: "cover" }}
          src={tire.image}
          width={100}
          height={100}
          alt={tire.name}
        />
      </div>
    </div>
  );
}
