import React, { useEffect, useState } from 'react'

const Productcard = () => {


    const[products,setProducts] = useState([""]);
    useEffect(()=>{
        const fectchProduct = async()=>{
            const response = await fetch('https://fakestoreapi.com/products?');
            const data = await response.json();
            setProducts(data);
        }
        fectchProduct();
    },[]);
  return (
    <div>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        products.length < 0 ?
                        <div>Lodaing...</div>
                        :
                        products.map((product)=>{
                            const {id,title,price,category,description,image} = product;

                            return(
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt={title} class="object-contain object-center w-full h-full block" src={image}/>
                                    </a>
                                    <div class="mt-4">
                                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                                        <h2 class="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                        <p class="mt-1">${price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Productcard
