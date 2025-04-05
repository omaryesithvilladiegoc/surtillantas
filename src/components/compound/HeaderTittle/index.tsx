import { MdKeyboardArrowRight } from "react-icons/md";
import { HeaderTittleContext, useHeaderTittleContext } from "./context";
import { HeaderTittleProps } from "./interfaces";
import styles from "./styles/styles.module.css";
import { monserratLight, redRose } from "@/app/fonts";

const HeaderTtittleCompound = function ({
  options,
  children,
}: HeaderTittleProps) {
  return (
    <HeaderTittleContext.Provider value={{ options }}>
      <section className={styles.containerHeaderTittle}>{children}</section>
    </HeaderTittleContext.Provider>
  );
};

HeaderTtittleCompound.Tittle = function Tittle() {
  const context = useHeaderTittleContext();
  const text = context.options.tittle;
  return <h2 className={redRose.className}>{text}</h2>;
};

HeaderTtittleCompound.SubTittle = function SubTittle() {
  const context = useHeaderTittleContext();
  const text = context.options.subTittle;
  return <h4 className={monserratLight.className}>{text}</h4>;
};

HeaderTtittleCompound.ButtonCallAction = function ButtonCallAction() {
  const context = useHeaderTittleContext();
  const text = context.options.buttonCallAction;
  return <button>{text}</button>;
};

HeaderTtittleCompound.IconAhead = function IconAhead() {
  return (
    <MdKeyboardArrowRight
      style={{
        fontSize: "60px",
      }}
    />
  );
};

export default HeaderTtittleCompound;
