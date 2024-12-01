import { Category } from "./Category"
import { Color } from "./Color"
// import { Price } from "./Price"


export const FilterBy = () => {
  return (
    <div className="fixed top-20">
    <Category  />
    {/* <Price /> */}
    <Color />
    </div>
  )
}
