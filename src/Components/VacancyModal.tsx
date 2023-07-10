import React from 'react';
import InfoFormModal from './InfoFormModal';
import { useAppSelector } from '../Redux/hooks';

export default function VacancyModal(): JSX.Element {
  const vacancyInfo = useAppSelector((state) => state.modalProps);
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Информация о вакансии
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">
              <h4>{vacancyInfo['job-name']}</h4>
              <b>Описание:</b> {vacancyInfo.description}
              <h5>ЗП: {vacancyInfo.salary} {vacancyInfo.currency}</h5>
              <h5>Занятость: {vacancyInfo.schedule} </h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
              <button className="btn btn-success" data-bs-target="#exampleModal2" data-bs-toggle="modal">Откликнуться</button>
            </div>
          </div>
        </div>
      </div>
      <InfoFormModal />
    </div>
  );
}
