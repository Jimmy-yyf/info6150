import './PublicLicense.css'


function PublicLicense () {
  const WTFPLText = `
  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  Version 2, December 2004 
  
  Copyright (C) [2023] [YIFANYUAN]
  
  Everyone is permitted to copy and distribute verbatim or modified 
  copies of this license document, and changing it is allowed as long 
  as the name is changed. 
  
  DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
  
  0. You just DO WHAT THE FUCK YOU WANT TO.
  `;
  return (
    
    
  
     <main id="main" className='License__page'>
      <h2 className='License__title'> Public License </h2>
      <pre className='License__text'>{WTFPLText}</pre>
        

    </main>

    

  );
}

export default PublicLicense;
