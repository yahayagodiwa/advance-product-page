// import { AiFillStar } from "react-icons/ai"
import { useContext } from "react"
import { IoBagAddSharp } from "react-icons/io5"
import { FilterContext } from "../App"

export const Card = () => {
const {saveData} = useContext(FilterContext)
  return (
    <>
    {saveData.length  > 0 ?  saveData.map( (d, index)=> {
        return (
            <>
        <div key={index} className=" border h-52 px-5 py-3 rounded-lg shadow-lg w-[253px]">
        <img src={d.img} className="h-24"/>
        <h3 className="font-semibold">{d.title}</h3>
        <div className="flex items-center">
            {d.star}
            {d.star}
            {d.star}
            {d.star}
            {d.star}
        
        <span className="ml-2">{d.reviews}</span>
        </div>
   
     <del>{d.prevPrice}</del> <span>{d.newPrice}</span>
     <div className="flex justify-between">
        <h4 className="text-red-500">{d.company}</h4>
        <IoBagAddSharp className="cursor-pointer size-5"/>
     </div>
        </div> 
        </>
     ) }
    ) : <h2>No result found</h2> } 
  
    </>
  )
}

