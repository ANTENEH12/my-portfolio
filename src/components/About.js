import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='msx-w-screen-lg p-4 max-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20 '>
        My name is Anteneh Tassew, </p>
        <br/>
        <p className='text-xl'>I am outgoing, dedicated, team player and open-minded. 
I get across to people and adjust to changes with ease. 
I believe that a person should work on developing their professional skills and learning new things all the time. 
Currently, I am looking for a position as web Developer. I have 1 year of working and studing experience. 
</p>
      </div>
    </div>
  )
}

export default About