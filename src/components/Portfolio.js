import React from 'react'
import csspng from "../myProfile/css.png"
import javascript from "../myProfile/javascript.png"
import html from "../myProfile/html.png"
import tailwind from "../myProfile/tailwind.png"
import nextjs from "../myProfile/nextjs.png"


const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src:csspng
        },
        {
            id:2,
            src:javascript
        },
        {
            id:3,
            src:html
        },
        {
            id:4,
            src:tailwind
        },
        {
            id:5,
            src:nextjs
        }
    ]




  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
         <div className='max-w-scree-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        
        <div className='pb-8'>
            <p className='text-6xl font-signature inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-4'>Check my work here</p>
        </div>
      



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>


        {
            portfolios.map(({id, src}) =>(

<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""
                className='rounded-md duration-200 hover:scale-110'
                />
           
            <div className='flex items-center justify-center '>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-110'>Demo</button>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-110'>Code</button>
            </div>
             </div>



            ))
        }
            
             </div>
             </div>
    </div>
  )
}

export default Portfolio