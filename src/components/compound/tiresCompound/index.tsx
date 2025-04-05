import { useState } from "react";
import { IProps } from "./interfaces";
import { FilterableTireContext, useContextFilterableTires } from "./context";
import TireCard from "./childrens/TireCard";
import { CiSearch } from "react-icons/ci";
import styles from "./styles/styles.module.css";

const FilterableTires = ({ tires, children }: IProps) => {
  const [filterWord, setFilterWord] = useState<string>("");

  return (
    <FilterableTireContext.Provider
      value={{ filterWord, setFilterWord, tires }}
    >
      <div className={styles.container}> {children}</div>
    </FilterableTireContext.Provider>
  );
};

FilterableTires.TireSearch = function TireSearch({}) {
  const { setFilterWord, filterWord } = useContextFilterableTires();

  return (
    <div className={styles.frame}>
      <div className={styles.overlapGroup}>
        <input
          type="text"
          value={filterWord}
          placeholder="Buscar por referencia..."
          className={styles.textWrapper}
          onChange={(e) => setFilterWord(e.target.value)}
        />
      </div>
      <CiSearch
        style={{
          color: "white",
          fontSize: "38px",
          fontWeight: "bold",
          marginRight: "15px",
        }}
      />
    </div>
  );
};

FilterableTires.TiresGrid = function TiresGrid({}) {
  const { tires, filterWord } = useContextFilterableTires();

  const filteredTires = tires.filter((tire) =>
    tire.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <>
      <div>
        {filterWord && filteredTires.length > 0 ? (
          <div className={styles.containerCards}>
            {" "}
            {filteredTires.map((tire, index) => (
              <div key={index}>
                <TireCard tire={tire} />
              </div>
            ))}{" "}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default FilterableTires;
