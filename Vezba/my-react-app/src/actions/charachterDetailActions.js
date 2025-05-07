export const FETCH_CHARACHTER_DETAIL_REQUEST = "FETCH_CHARACHTER_DETAIL_REQUEST";
export const FETCH_CHARACHTER_DETAIL_SUCCESS = "FETCH_CHARACHTER_DETAIL_SUCCESS";
export const FETCH_CHARACHTER_DETAIL_FAIL = "FETCH_CHARACHTER_DETAIL_FAIL";

export const fetchCharachterDetailRequest = () => ({
  type: FETCH_CHARACHTER_DETAIL_REQUEST,
});

export const fetchCharachterDetailSuccess = (charachters) => ({
  type: FETCH_CHARACHTER_DETAIL_SUCCESS,
  payload: charachters,
});

export const fetchCharachterDetailFail = (error) => ({
  type: FETCH_CHARACHTER_DETAIL_SUCCESS,
  payload: error,
});

export const fetchCharacterDetail = (id) => {
  return (dispatch) => {
    dispatch(fetchCharachterDetailRequest());

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCharachterDetailSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCharachterDetailFail(error.message));
      });
  };
};
