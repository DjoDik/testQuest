import React from 'react';

export default function InfoFormModal(): JSX.Element {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModal2">
                Заголовок модального окна
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    @
                  </span>
                  <input
                    type="text"
                    name="fio"
                    required
                    className="form-control"
                    placeholder="Введите ФИО"
                    aria-label="ФИО"
                    aria-describedby="addon-wrapping"
                  />
                </div>

                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    @
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    placeholder="Введите почту"
                    aria-label="Почта"
                    aria-describedby="addon-wrapping"
                  />
                </div>

                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    @
                  </span>
                  <input
                    type="number"
                    name="phone"
                    className="form-control"
                    placeholder="Введите номер телеофона"
                    aria-label="Телефон"
                    aria-describedby="addon-wrapping"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{margin: '5px'}}>
                  Отправить
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
