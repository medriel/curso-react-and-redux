
// action creator
export function changeMinimumNumber(newNumber) {
  return {
    type: 'NEW_NUM_MIN',
    payload: newNumber
  }
}

// action creator
export function changeMaximumNumber(newNumber) {
  return {
    type: 'NEW_NUM_MAX',
    payload: newNumber
  }
}