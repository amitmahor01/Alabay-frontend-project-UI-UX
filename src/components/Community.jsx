import React from 'react'
import community1 from '../images/community1.png'
import community2 from '../images/community2.png'
import community3 from '../images/community3.png'
import community4 from '../images/community4.png'

function Community() {
  return (
    <div className='h-auto w-screen bg-white flex  justify-center gap-x-4 '>
        <div className='community-title h-[350px] w-[18vw] flex-col justify-center text-center bg-gradient-to-b from-[#dbc70c] to-transparent rounded-tl-3xl'>
            <h1 className=' leading-tight pt-4 -mb-6 text-white font-bold font-Montserrat'>Community <p>Building</p><p>And initial launch</p></h1>
            <img src={community1} alt="" className='max-h-64 p-8' />
        </div>
        <div className='community-title h-[350px] w-[18vw] flex-col justify-center text-center bg-gradient-to-b from-[#00d4d4] to-transparent '>
            <h1 className=' leading-tight pt-4 -mb-6 text-white font-bold font-Montserrat'>Merchandise <p>Store Launch</p></h1>
            <img src={community2} alt="" className='max-h-64 p-8' />
        </div>
        <div className='community-title h-[350px] w-[18vw] flex-col justify-center text-center bg-gradient-to-b from-[#d427ff] to-transparent '>
            <h1 className=' leading-tight pt-4 -mb-6 text-white font-bold font-Montserrat'>Community <p>Events</p><p>And Contests</p></h1>
            <img src={community3} alt="" className='max-h-64 p-8' />
        </div>
        <div className=' community-title h-[350px] w-[18vw] flex-col justify-center text-center bg-gradient-to-b from-[#8f3a3c] to-transparent rounded-tr-3xl'>
            <h1 className=' leading-tight pt-4 -mb-6 text-white font-bold font-Montserrat'>Expansion <p>And New</p><p>Features</p></h1>
            <img src={community4} alt="" className='max-h-64 p-8' />
        </div>
    </div>
  )
}

export default Community