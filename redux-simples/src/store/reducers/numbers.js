import { NEW_NUM_MIN, NEW_NUM_MAX } from '../actions/actionsType'

const initialState = {
  min: 1,
  max: 10
}

export default function (state = initialState, action) {

  switch (action.type) {
    case NEW_NUM_MIN:
      return {
        ...state,
        min: action.payload
      }
    case NEW_NUM_MAX:
      return {
        ...state,
        max: action.payload
      }
    default:
      return state
  }
}