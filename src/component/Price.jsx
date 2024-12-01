import { useContext } from "react"
import { FilterContext } from "../App"


export const Price = () => {
  const [handlePrice] = useContext(FilterContext)
  return (
    <div className="px-6 py-5">
       <h2 className="text-lg font-semibold"> Price</h2>
       <div className="flex flex-col">
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="20"  /><span> $1 - $20 </span></label>
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="50"/><span> $20 - $50 </span></label>
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="51" /><span> $50+</span></label>
      
       </div>
      
       </div>
  )
}
