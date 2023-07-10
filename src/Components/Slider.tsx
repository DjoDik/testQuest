import React from 'react';

export default function Slider(): JSX.Element {
  return (
    <div style={{ display: 'flex' }}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ width: '800px', justifyContent: 'center', margin: '0 auto' }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.tvc.ru/pictures/o/355/222.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px', objectFit: 'contain' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://avatars.mds.yandex.net/get-altay/467304/2a000001879c495f8cce747b41e0056983f8/orig"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px', objectFit: 'contain' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ya-doma.ru/yado-content/uploads/2022/12/2022.06.22_photo-25.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: '500px', objectFit: 'contain' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
}
