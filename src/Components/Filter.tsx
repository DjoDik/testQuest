import React, { ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../Redux/hooks';
import { sortSum, sortTitle } from '../Redux/slice/vacancySlice';

export default function Filter() {
  const [filterType, setFilterType] = useState('title');
  const [filterValue, setFilterValue] = useState('');

  const dispatch = useAppDispatch();
  
  const handleFilterTypeChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilterValue(event.target.value);
  };

  const clickHandler = () => {
    if(filterType === 'title') {
        dispatch(sortTitle(filterValue))
    }
    else {
        dispatch(sortSum(filterValue))
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="filterType">Фильтр:</label>
        <select id="filterType" value={filterType} onChange={handleFilterTypeChange}>
          <option value="title">По названию</option>
          <option value="salary">По зарплате</option>
        </select>

        <input
          type={filterType === 'title' ? 'text' : 'number'}
          value={filterValue}
          onChange={handleFilterValueChange}
          placeholder="Введите значение фильтра"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>
        Отфильтровать
      </button>
    </div>
  );
}
