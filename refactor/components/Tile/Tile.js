import React from 'react';
import './Tile.css';

const Tile = (props) => {

  // body of tile function
  // ternary statement
  const dynamicColor = props.selected || props.matched ? {backgroundColor: props.color} : null;
  
  return (
    // Conditionally render the svg
    <div className='Tile' style={dynamicColor} onClick={()=>{props.handleTileClicked(props.id, props.color)}}>
      { props.selected || props.matched ? <props.svg/> : null }
    </div>
  )
}

export default Tile
