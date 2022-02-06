import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numbers: function (state, action) {

    switch (action.type) {
      case 'NEW_NUM_MIN':
        return {
          ...state,
          min: action.payload
        }
      case 'NEW_NUM_MAX':
        return {
          ...state,
          max: action.payload
        }
      default:
        return {
          min: 10,
          max: 100
        }
    }
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig