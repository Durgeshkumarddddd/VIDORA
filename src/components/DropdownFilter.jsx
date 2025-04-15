import React, { useState, useRef, useEffect } from 'react';

const DropdownFilter = ({title, options, fun}) => {
 console.log(title);
  return (

    <select defaultValue="0" onChange={fun} className='text-white bg-[#1F1E24] p-2 mr-8 border-zinc-400 w-[15vw] ' name='format' id='format'>
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
