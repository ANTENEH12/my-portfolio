import React from 'react'
import css from "../myProfile/css.png"
import html from "../myProfile/html.png"
import tailwind from "../myProfile/tailwind.png"
import nextjs from "../myProfile/nextjs.png"
import javaScript from "../myProfile/javascript.png"
import React_logo from "../myProfile/React_logo.png"
import graphql from "../myProfile/graphql.png"
import gothub_logo from "../myProfile/github_logo.png"


const Experience = () => {
  const techs = [
    {
      id:1,
      src:css,
      title:"CSS",
      style:"shadow-blue-500"
},

{
  id:2,
  src:html,
  title:"HTML",
  style:"shadow-orange-500"
},

{
  id:3,
  src:tailwind,
  title:"Tailwind css",
  style:"shadow-sky-400"
},
{
  id:4,
  src:nextjs,
  title:"NEXT. js",
  style:"shadow-white-500"
},
{
  id:5,
  src:javaScript,
  title:"JavaScript",
  style:"shadow-yellow-500"
},
{
  id:6,
  src:React_logo,
  title:"React .js",
  style:"shadow-blue-500"

},
{
  id:7,
  src: graphql,
  title: "Graph Ql",
  style: "shadow-pink-500"
},
{
  id:8,
  src: gothub_logo,
  title: "HitHub",
  style: "shadow-blue-500"
},

]


  return (
    <div name="experiance" className='bg-gradient-to-b from-black to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-6xl font-signature border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>Technologies I've learned and enjoy workng with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
{
  techs.map(({id, src, title, style}) =>(
    <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg &{style}`} >
    <img src={src} alt="" className='w-20 mx-auto' />
    <p className='mt-4'>{title}</p>
  </div>


  ))
}



             
              
            </div>
            
        </div>
    </div>
  )
}

export default Experience