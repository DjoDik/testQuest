import React from 'react';
import { useAppDispatch } from '../Redux/hooks';
import { getModalData } from '../Redux/slice/modalPropsSlice';

export type Props = {
  oneCard: {
    salary: string,
    'job-name': string,
  }
}

export default function OneVacancyCard({oneCard}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(getModalData(oneCard))
  }
  
  return (
    <div style={{margin:'5px'}}>
      <div className="card">
        <div className="card-header">{oneCard['job-name']}</div>
        <div className="card-body">
          <h5 className="card-title">Заробатная плата: {oneCard.salary}</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={clickHandler}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
