import React from 'react'

function Cart2(){

    const arr = [
        {
            icon: 'https://icons.iconarchive.com/icons/martz90/circle/512/android-icon.png',
            name: "Design Techniques - (UI)",
            desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry",
            instock: true,
        },
        {
            icon: 'https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/250/web-code.png',
            name: "Human Computer Interface",
            desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry",
            instock: true,
        },
        {
            icon: 'https://cdn2.iconfinder.com/data/icons/seo-web/512/website-code-512.png',
            name: "UI Design Pattern for WebSites",
            desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry",
            instock: false,
        },
        {
            icon: 'https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default',
            name: "Web-Design (Best Practices)",
            desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry",
            instock: true,
        },
        
    ]
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center justify-center gap-10'>
            {arr.map((value, index)=> (
                <div className= {`w-52 h-[270px] bg-zinc-200 rounded-lg p-4 hover:bg-[${value.cardColor}]`}>
                <div className='w-10 h-10 rounded-md overflow-hidden'>
                    <img className="w-full h-full object-cover" src={value.icon}/>
                </div>
                <div className='mt-6'>
                    <h1 className='text-md font-bold'>{value.name}</h1>
                    <p className='text-sm mt-2'>
                        {value.desc}
                    </p>
                </div>
                {/* In Buttons applying Conditional Rendring */}
                <button className={`mt-4 ${value.instock ? "bg-blue-500" : "bg-gray-400"} px-2 py-1 text-white rounded text-sm`}>
                    {value.instock ? "In Stock" : "Out of Stock"}
                </button>
            </div>
            ))}

        </div>
    )
}

export default Cart2

