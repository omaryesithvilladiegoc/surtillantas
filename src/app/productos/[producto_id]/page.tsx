"use client";
import { Tire } from "@/components/compound/tiresCompound/types";
import { tires } from "@/data/tires";
import { useParams } from "next/navigation";
import styles from "./styles/styles.module.css";
import Image from "next/image";
import { monserrat } from "@/app/fonts";

const ProductDetail = () => {
  const params = useParams();
  const producto_id = params.producto_id;
  const product: Tire | undefined = tires.find(
    (tire) => tire.id === producto_id
  );
  return (
    <div className={styles.wraperContainer}>
      <div className={styles.containerImageTire}>
        <Image
          src={product?.image as string}
          width={500}
          height={500}
          alt={product?.name as string}
          className={styles.imageTire}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <div className={styles.containerTextTire}>
        <h1 className={monserrat.className}> {product?.name} </h1>
        <h2> {product?.brand} </h2>
        <p> {product?.description} </p>
      </div>
    </div>
  );
};

export default ProductDetail;
