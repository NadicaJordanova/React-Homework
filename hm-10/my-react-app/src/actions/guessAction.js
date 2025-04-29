
export const START_NEW_GAME = "START_NEW_GAME";
export const SUBMIT = "SUBMIT"


export const startNewGame = () => ({
  type: START_NEW_GAME,
});

export const submit = (number) => ({
    type: SUBMIT,
    payload: number
})