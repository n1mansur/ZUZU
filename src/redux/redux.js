const ADD_ORDER = 'ADD_ORDER'
const DELETE_ORDER = 'DELETE_ORDER'
const CLEAR_ALL = 'CLEAR_ALL'
const MINUS = 'MINUS'
const PLUS = 'PLUS'

const initialState = []

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, action.order]
    case DELETE_ORDER:
      return state.filter((el) => el.id != action.order.id)
    case CLEAR_ALL:
      return []
    case PLUS:
      return state.map((el) =>
        el.id == action.order.id ? { ...el, count: el.count + 1 } : el
      )
    case MINUS:
      return state.map((el) =>
        el.id == action.order.id
          ? el.count > 1
            ? { ...el, count: el.count - 1 }
            : el
          : el
      )
    default:
      return state
  }
}
export const addOrderActionCreater = (order) => {
  return {
    type: ADD_ORDER,
    order,
  }
}
export const deleteActionCreater = (order) => {
  return {
    type: DELETE_ORDER,
    order,
  }
}
export const clearActionCreater = (order) => {
  return {
    type: CLEAR_ALL,
    order,
  }
}
export const plusActionCreater = (order) => {
  return {
    type: PLUS,
    order,
  }
}
export const minusActionCreater = (order) => {
  return {
    type: MINUS,
    order,
  }
}
