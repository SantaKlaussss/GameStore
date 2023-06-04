import React, { useState } from 'react';
import './pagination.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/games/reducer';

const Pagination = () => {
  debugger
  const dispatch = useDispatch()
  const onChangedPage = (p) => {
    dispatch(setCurrentPage(p))
  }

  const data = useSelector(store => store.games);

  const { pageSize, currentPage, totalGameCount, portionSize } = data;

  let pageCount = Math.ceil(totalGameCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++ ) {
    pages.push(i)
  }
  
  return (
    <div>
      {pages.map(p => <span className='block-pagination' key={p} onClick={() => onChangedPage(p)}>{p}</span>)}
    </div>
  )
}

export default Pagination;
