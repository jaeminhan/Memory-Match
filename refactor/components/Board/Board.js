import React from 'react'
import './Board.css';
import Tile from '../Tile';

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  // body of the function
  // Pass an anonymous function that takes tile as parameter
  // Returns an instantiation of the Title component to map()
  const tiles = props.tiles.map((tile) => (
    // Pass title object as props to the Tile component
    <Tile {...tile} />
  ))

  return (
    <div className='Board' style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
