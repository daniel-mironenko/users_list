import React, { Fragment, useEffect, useState } from "react";

const SearchUsersForm = ({ formState, setFormState }) => {
  const { filterType, sortType } = formState;
  const [visibleResetBtn, setVisibleResetBtn] = useState(false);

  useEffect(() => {
    if (filterType || sortType) {
      setVisibleResetBtn(true);
    } else if (!filterType && !sortType) {
      setVisibleResetBtn(false);
    }
  }, [filterType, sortType]);

  return (
    <form onSubmit={(evt) => {
      evt.preventDefault()
    }} className="form-users-search">
      <fieldset className="searc-bar">
        <div className="search">
          <input
            onChange={(evt) => {
              const value = evt.target.value;
              setFormState((prev) => ({
                ...prev,
                filterType: value,
              }));
            }}
            type="search"
            name="search-users"
            placeholder="Поиск по имени или e-mail"
          ></input>
        </div>
        {visibleResetBtn && (
          <Fragment>
            <label className="check-mark">
              &#10003;
              <input
                onClick={() => {
                  setFormState({
                    filterType: "",
                    sortType: null,
                  });
                }}
                className="clear"
                type="reset"
                value="Очистить фильтр"
              ></input>
            </label>
          </Fragment>
        )}
      </fieldset>

      <fieldset className="sort-bar">
        <span className="sort-title">Сортировка: </span>
        <div className="sort-type">
          <input
            onClick={(evt) => {
              const sortType = evt.target.value;

              setFormState((prev) => ({
                ...prev,
                sortType: sortType,
              }));
            }}
            id="date"
            className="visually-hidden check__input"
            type="radio"
            name="sort"
            value="date"
          ></input>
          <label className="check__input--label" htmlFor="date">
            Дата регистрации
          </label>
        </div>
        <div className="sort-type">
          <input
            onClick={(evt) => {
              const sortType = evt.target.value;

              setFormState((prev) => ({
                ...prev,
                sortType: sortType,
              }));
            }}
            id="rating"
            className="visually-hidden check__input"
            type="radio"
            name="sort"
            value="rating"
          ></input>
          <label className="check__input--label" htmlFor="rating">
            Рейтинг
          </label>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchUsersForm;
