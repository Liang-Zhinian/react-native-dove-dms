
import { handleActions } from 'redux-actions'
import {
  UPDATE_FOLDER,
  DONE_UPDATING_FOLDER
} from '../constants'

type State = {}

const initialState: State = {}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions(
  {

    [UPDATE_FOLDER]: (state: State = initialState, action) => {
      const { payload: { isLoading } } = action

      //because payload contains the id and we already know that we are about
      //to increment the value of that id, we modify only that value by one

      return {
        ...state,
        isLoading,
      }
    },

    [DONE_UPDATING_FOLDER]: (state: State = initialState, action) => {
      const { payload: { isLoading } } = action

      //because payload contains the id and we already know that we are about
      //to increment the value of that id, we modify only that value by one

      return {
        ...state,
        isLoading,
      }
    },

    // Handle API request errors
    ['ERROR']: (state: State = initialState, action) => { return initialState; },

  },
  initialState
)