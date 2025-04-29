import {

  START_NEW_GAME,
  SUBMIT,
} from "../actions/guessAction";

const initialState = {
  targetNumber: null,
  guesses: [],
  numberOfGuesses: 0,
  toLow: null,
  toHigh: null,
  correct: false,
};

const guessReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT: {
        console.log(action.payload, "action payload")
            return {
                ...state,
                guesses: [...state.guesses, action.payload],
                numberOfGuesses: state.numberOfGuesses + 1,
                correct: [action.payload == state.targetNumber ? true : false],
                toLow: [action.payload < state.targetNumber ? true : false],
                toHigh: [action.payload > state.targetNumber ? true : false]
              };
     
    
      
    }
    case START_NEW_GAME: {
        const randomNum = Math.floor(Math.random() * 100);
      return {
        ...state,
        targetNumber: randomNum,
        guesses: [],
        numberOfGuesses: null,
      };
    }
    default: {
        return state
    }
  }
};

export default guessReducer