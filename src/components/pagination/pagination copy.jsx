import React, { useState } from 'react';
import './pagination.css';
import { useSelector } from 'react-redux';

const Pagination = () => {
  const data = useSelector(store => store.games);

  const { pageSize, currentPage, totalGameCount, portionSize } = data;

  let pageCount = Math.ceil(totalGameCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++ ) {
    pages.push(i)
  }
  
  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize; 
  
  return (
    <div>
      {(portionNumber > 1) && 
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Назад</button>}
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => 
      <span>{p}</span>)}
      {(portionCount > portionNumber) && 
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Вперед</button>}
    </div>
  )
}

export default Pagination;
