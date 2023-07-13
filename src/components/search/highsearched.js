import React, { useEffect, useState } from 'react'


const Highsearched = () => {

    const[highsearched,setHighSearched] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res=>res.json())
            .then(json=>setHighSearched(json))
    })
    
  return (
    <>
        <h1 className=" mt-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Most Searched Product
        </h1>
        <div className="grid grid-cols-3 px-10 my-10">
            {
                highsearched.length < 0 ?
                <div>Loading...</div>
                :
                highsearched.map((item)=>{
                    const{id,title,price,category,description,image} = item;
                    return(
                        <a href="#" className="block overflow-hidden mx-5 my-10">
                            <div className="relative h-[150px] sm:h-[250px]">
                                <img
                                src={image}
                                alt={title}
                                className="absolute inset-0 h-full w-full object-contain opacity-100"
                                />
                            </div>

                            <div className="mt-3 flex justify-between text-sm">
                                <div>
                                <h3
                                    className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                >
                                    {title}
                                </h3>

                                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                                    {category}
                                </p>
                                </div>

                                <p className="text-gray-900">${price}</p>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    </>
  )
}

export default Highsearched
