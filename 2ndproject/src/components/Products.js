import React from "react";
import ProductsCard from "./ProductsCard"

const products=({products})=>{
    

    return(
         <div className="py-10">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
                shooping everday
           </h1>
           <span className="w-20 h-[3px] bg-black"></span>
           <p className="max-w-[700px] text-gray-600 text-center">
          
Discover the latest trends at lightning speed on Fast Fashion shop. Elevate your style with our fast fashion collection today!
           </p>


        </div>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {
            products.map((item)=>(
                <ProductsCard key={item._id} product={item}/>
            ))
        }
        </div>


    </div>
    )
}


export default products;