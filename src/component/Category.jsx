import { useContext } from "react"
import { FilterContext } from "../App"


export const Category = () => {
 const {handleCategory} = useContext(FilterContext)
  return (
    <div className="px-6 ">
       <h2 className="text-lg font-semibold"> Category</h2>
       <div className="flex flex-col">
       <label htmlFor=""> <input type="radio" name ="category" value="all" 
       onChange={(e)=>handleCategory(e.target.value)}/><span> All </span></label>
       <label htmlFor=""> <input type="radio" name ="category" value="sneakers"
        onChange={(e)=>handleCategory(e.target.value)}/><span> Sneakers </span></label>
       <label htmlFor=""> <input type="radio" name ="category" value="flats" 
        onChange={(e)=>handleCategory(e.target.value)}/><span> Flats </span></label>
       <label htmlFor=""> <input type="radio" name ="category" value="sandals" 
        onChange={(e)=>handleCategory(e.target.value)}/><span> Sandals </span></label>
       <label htmlFor=""> <input type="radio" name ="category" value="heels" 
        onChange={(e)=>handleCategory(e.target.value)}/><span> Heels </span></label>
       </div>
      
       </div>
       
  )
}
