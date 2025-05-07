export const FETCH_CHARACHTERS_REQUEST = "FETCH_CHARACHTERS_REQUEST";
export const FETCH_CHARACHTERS_SUCCESS = "FETCH_CHARACHTERS_SUCCESS";
export const FETCH_CHARACHTERS_FAIL = "FETCH_CHARACHTERS_FAIL";

export const fetchCharachtersRequest = () => ({
  type: FETCH_CHARACHTERS_REQUEST,
});

export const fetchCharachtersSuccess = (charachters) => ({
  type: FETCH_CHARACHTERS_SUCCESS,
  payload: charachters,
});

export const fetchCharachtersFail = (error) => ({
  type: FETCH_CHARACHTERS_SUCCESS,
  payload: error,
});

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharachtersRequest());

    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCharachtersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCharachtersFail(error.message));
      });
  };
};
