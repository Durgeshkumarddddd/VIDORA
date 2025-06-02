import React, { useState, useRef, useEffect } from 'react';

const DropdownFilter = ({title, options, fun}) => {
 console.log(title);
  return (

    <select defaultValue="0" onChange={fun} className='text-zinc-400 bg-[#28262c] p-2 px-6 text-xl  mr-8 border-zinc-400 w-[15vw] rounded ' name='format' id='format'>
      <option  value={"0"} disabled> {title} </option>
      {
        options.map((o, i)=>(
          <option key={i} value={o}>{o.toUpperCase()}</option>
        ))
      }

    </select>
    
    
  );
};

export default DropdownFilter;
