"use client";
import Image from "next/image";
import { Tire } from "../../types";
import styles from "../../styles/styles.module.css";
import { monserratLight, redRose } from "@/app/fonts";
import { useRouter } from "next/navigation";

export default function TireCard({ tire }: { tire: Tire }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`productos/${tire.id}`)}
      className={styles.containerCardWraper}
    >
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
