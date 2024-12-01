import { createContext, useState } from "react";
import data from "./component/data";
import { FilterBy } from "./component/FilterBy";
import NavBar from "./component/NavBar";
import { Product } from "./component/Product";

export const FilterContext = createContext();
function App() {
  const [searchItem, setSearchItem] = useState("");
  const [saveData, setSaveData] = useState(data);
  const [categ, setCateg] = useState("all");
  const [color, setColor] = useState('')


  /// filter by search
  const handleSearch = (searchTerm) => {
    setSearchItem(searchTerm);
    const filteredProducts = data.filter((d) =>
      d.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSaveData(filteredProducts);
  };
  ////filter by category

  const handleCategory = (categoryValue) => {
    setCateg(categoryValue);
    // console.log(data);

    if (categoryValue == "all") {
      setSaveData(data);
    } else {
      const filterCategory = data.filter((c) => c.category === categoryValue);
      setSaveData(filterCategory);
    }
  };

  //////// filter by price

  // const handlePrice = (cost) => {
  //   setPrices(cost);
  //   if (cost === 0) {
  //     setSaveData(data);
  //     return;
  //   }
  //   const filterPrice = data.filter((p) => p.newPrice <= cost);
  //   setSaveData(filterPrice);
  // };

  const filterByColor = (color)=>{
    setColor(color)
   const filterColor = data.filter(c => c.color === color)
    setSaveData(filterColor)

  }

  return (
    <>
      <FilterContext.Provider
        value={{
          searchItem,
          saveData,
          categ,
          color,
          handleSearch,
          handleCategory,
          filterByColor
          
        }}
      >
        <NavBar />
        <div className="flex justify-between gap-14">
          <FilterBy />
          <Product />
        </div>
      </FilterContext.Provider>
    </>
  );
}

export default App;
