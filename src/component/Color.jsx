import { useContext } from "react"
import { FilterContext } from "../App"


export const Color = () => {
  const {filterByColor} = useContext(FilterContext)
  return (
    <div className="px-6 py-5">
       <h2 className="text-lg font-semibold"> Color</h2>
       <div className="flex flex-col">
       <label htmlFor=""> <input type="radio" name ="color" 
       onChange={(e)=> filterByColor(e.target.value)} value="white" /><span> White </span></label>
       <label htmlFor=""> <input type="radio" name ="color" 
        onChange={(e)=> filterByColor(e.target.value)} value="black"  /><span> Black </span></label>
       <label htmlFor=""> <input type="radio" name ="color"  
       onChange={(e)=> filterByColor(e.target.value)} value="blue"  /><span> Blue </span></label>
       <label htmlFor=""> <input type="radio" name ="color"  
       onChange={(e)=> filterByColor(e.target.value)} value="red"  /><span> Red </span></label>
      
       </div>
      
       </div>
  )
}
