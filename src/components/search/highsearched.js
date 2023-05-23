import React from 'react'

const highsearched = () => {
  return (
    <>
        <h1 className=" mt-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Most Searched Product on Our Site
        </h1>
        <div className="grid grid-cols-3 px-10 my-10">
            <a href="#" className="group block overflow-hidden mx-5">
                <div className="relative h-[350px] sm:h-[450px]">
                    <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                    src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>

                <div className="mt-3 flex justify-between text-sm">
                    <div>
                    <h3
                        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        Shirt
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                        quia soluta quisquam voluptatem nemo.
                    </p>
                    </div>

                    <p className="text-gray-900">$99</p>
                </div>
            </a>

            {/*second component*/}
            <a href="#" className="group block overflow-hidden mx-10">
                <div className="relative h-[350px] sm:h-[450px]">
                    <img
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                </div>
                <div className="mt-3 flex justify-between text-sm">
                    <div>
                    <h3
                        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        Limited Sneaker
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                        quia soluta quisquam voluptatem nemo.
                    </p>
                    </div>

                    <p className="text-gray-900">$1099</p>
                </div>
            </a>
            {/*Third component*/ }
            <a href="#" className="group block mx-10">
                <img
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover sm:h-[450px]"
                />

                <div className="mt-3 flex justify-between text-sm">
                    <div>
                    <h3
                        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        Small Headphones
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                        quia soluta quisquam voluptatem nemo.
                    </p>
                    </div>

                    <p className="text-gray-900">$299</p>
                </div>
            </a>
        </div>
    </>
  )
}

export default highsearched
