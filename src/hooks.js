import { useEffect, useRef, useState } from 'react';

const userHover  = () => {
  const ref = useRef();
  const [ hovered, setHovered ] = useState(false); 
  
  // declare a function enter();
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  // passing in anonymous function as an argument
  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventLister('mouseenter', enter);
    refCopy.current.addEventLister('mouseleave', leave);
    return () =>  {
      refCopy.current.removeEventListener('mouseenter', enter);
      refCopy.current.removeEventListener('mouseenter', leave);
    }
  })

  return [ref, hovered]
};

export default userHover;