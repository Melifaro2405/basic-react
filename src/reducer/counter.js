import { INCREMENT } from '../constants'

const counterReducer = (counterState = 0, action) => {
  return action.type === INCREMENT ? counterState + 1 : counterState
}

export default counterReducer