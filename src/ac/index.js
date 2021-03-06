import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATA_RANGE,
  CHANGE_SELECTION
} from '../constants'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const deleteArticle = (id) => {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export const changeDateRange = (dateRange) => {
  return {
    type: CHANGE_DATA_RANGE,
    payload: {dateRange}
  }
}

export const changeSelection = (selected) => {
  return {
    type: CHANGE_SELECTION,
    payload: {selected}
  }
}