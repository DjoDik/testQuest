import React, { useEffect, useState } from 'react';
import Slider from './Components/Slider';
import VacancyModal from './Components/VacancyModal';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { getCommentChunk } from './Redux/slice/vacancySlice';
import OneVacancyCard from './Components/OneVacancyCard';

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentChunk());
  }, []);

  const vacancyData = useAppSelector((state) => state.vacancy);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vacancyData[0]?.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Slider />
      {currentItems?.map((el) => (
        <OneVacancyCard oneCard={el} key={el.url} />
      ))}
      {vacancyData[0]?.length > itemsPerPage && (
        <div>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Назад
          </button>
          <button onClick={nextPage} disabled={indexOfLastItem >= vacancyData[0]?.length}>
            Вперед
          </button>
        </div>
      )}
      <VacancyModal />
    </>
  );
}

export default App;
