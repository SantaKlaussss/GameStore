import React, { useState } from 'react';
import './pagination.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/games/reducer';
import cn from 'classnames';

const Pagination = () => {

  const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch()
  const onChangedPage = (p) => {
    dispatch(setCurrentPage(p))
    setIsActive(true)
  }

  const data = useSelector(store => store.games);

  const { pageSize, currentPage, totalGameCount, portionSize } = data;

  let pageCount = Math.ceil(totalGameCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(p => (
        <span 
          className={cn('block-pagination', { 'block-pagination--active': currentPage == p })}
          key={p}
          onClick={() => onChangedPage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination;
