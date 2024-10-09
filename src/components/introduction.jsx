import React from 'react';

function Introduction() {
  return (
    <div className='h-screen grid w-screen'>
      <h3 className='font-CheeseBurga text-[90px] p-8 ml-28 font-bold tracking-widest leading-relaxed text-[#b6f963] text-border intro-title'>
        WELCOME TO ALABAY WORLD
      </h3>
      <div className='h-auto max-h-44 mt-28 w-screen bg-[#0e151f] text-center font-CheeseBurga'>
        <h1 className='text-2xl tracking-wider text-white leading-tight p-4'>
          <p> WHERE THE <span className='text-[#e5b430]'>LEGENDARY CENTRAL ASIAN SHEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.</p>
          <p><span className='text-[#e5b430]'>JOIN US</span> IN CELEBRATING THE <span className='text-[#e5b430]'>STRENGTH, LOYALTY,</span> AND <span className='text-[#e5b430]'>HERITAGE</span> OF THE ALABAY </p>
          <p> BREED.</p>
        </h1>
      </div>
    </div>
  );
}

export default Introduction;
