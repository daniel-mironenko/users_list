import { SortType } from "../enums"

const sortWithClosure = () => {
  let flag = null;
  let prevSortType = null;

  const changeFlag = () => {
    flag = !flag;
  }

  const setDefaultFlag = () => {
    flag = true;
  }

  const updatePrevSortType = (value) => {
    prevSortType = value
  }

  return function (users, sortType,) {

    if (prevSortType === sortType) {
      changeFlag()
    } else {
      setDefaultFlag()
    }

    updatePrevSortType(sortType)

    const usersClone = [...users];

    switch (sortType) {
      case SortType.DATE:
        if (flag) {
          return usersClone.sort((a, b) => new Date(b.registrationDate) - new Date(a.registrationDate));
        } else {
          return usersClone.sort((a, b) => new Date(a.registrationDate) - new Date(b.registrationDate));
        }
  
      case SortType.RATING:
        if (flag) {
          return usersClone.sort((a, b) => a.rating - b.rating);
        } else {
          return usersClone.sort((a, b) => b.rating - a.rating);
        }
  
      default:
        return users;
    }
  }
}

export const sortUsers = sortWithClosure();
