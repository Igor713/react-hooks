import * as types from './types'

export const incrementCounter = (dispatch) => {
  dispatch({ types: types.INCREMENT_COUNTER })
}

export const decrementCounter = (dispatch) => {
  dispatch({ types: types.DECREMENT_COUNTER })
}
