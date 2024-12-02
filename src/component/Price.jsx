import { useContext } from "react"
import { FilterContext } from "../App"


export const Price = () => {
  const {handlePrice} = useContext(FilterContext)
  return (
    <div className="px-6 py-5">
       <h2 className="text-lg font-semibold"> Price</h2>
       <div className="flex flex-col">
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="50"  /><span> $1 - $50 </span></label>
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="100"/><span> $50 - $100 </span></label>
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="150" /><span> $100  - $150</span></label>
      
       <label htmlFor=""> <input type="radio" name ="price" 
       onChange={(e)=> handlePrice(parseInt(e.target.value))} value="200" /><span> $150  - $200</span></label>
      
       </div>
      
       </div>
  )
}
