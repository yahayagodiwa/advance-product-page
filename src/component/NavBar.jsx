
import { useContext } from "react"
import { FaCartArrowDown, FaHeart, FaUser } from "react-icons/fa"
import { FilterContext } from "../App"

 const NavBar = () => {
    const {searchItem, handleSearch} = useContext(FilterContext)
  return (
   <>
   <div className="flex justify-between fixed left-0 top-0 right-0 z-10 shadow-xl w-[100%] bg-white py-3">
    <h2 className="text-lg font-semibold pl-16">Yahya<span className="text-yellow-300"> Godiwa</span> </h2>
    <input type="search" 
    value={searchItem} onChange={(e) => handleSearch(e.target.value)}
    placeholder="Search for product.."
    
    className="outline-none bg-slate-50 border rounded-xl px-4 py-1"/>
    <div className="flex gap-5 pr-16">

    <FaHeart className="size-6"/>
    <FaCartArrowDown className="size-6"/>
    <FaUser  className="size-6"/>
    </div>
   </div>
   </>
  )
}

export default NavBar