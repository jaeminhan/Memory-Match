import { useEffect, userRef, useState } from 'react';

const userHover  = () => {
  const ref = useRef();
  const [ hovered, setHovered ] = useState(false); 
  
  useEffect(() => {
    return () =>  {}
  })
  return [ref, hovered]
};

export default userHover;