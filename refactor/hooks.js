import { useEffect, useRef, useState } from 'react';

const useHover = () => {
  const ref = useRef();
  const [ hovered, setHovered ] = useState(false); 
  
  // declare a function enter();
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  // passing in anonymous function as an argument
  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventListener('mouseenter', enter);
    refCopy.current.addEventListener('mouseleave', leave);
    return () => {
      refCopy.current.removeEventListener('mouseenter', enter);
      refCopy.current.removeEventListener('mouseleave', leave);
    }
  })

  return [ref, hovered]
};

export default useHover;