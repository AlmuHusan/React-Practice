import React from 'react';
import Box from './Box';
import './Row.css';
import { css } from '@emotion/core';

const rowStyle={
    display: 'flex',
    justifyContent:'content',
}
//style={{display:'flex',justifyContent:'center'}}
const Row = ({firstRow,lastRow,boxes,onClick,rowIndex}) =>(

    <div style={{display:'flex',justifyContent:'center'}}>
        {boxes.map((box, index) =>(
        <Box  firstRow={firstRow}
              lastRow={lastRow} 
              firstIndex={index===0}
              lastIndex={index===boxes.length-1} 
              onClick={onClick}
              size={100}
              key={index}  
              columnIndex={index}
              rowIndex={rowIndex}
              value={box}
        />
        ) )}
    </div>);


export default Row;