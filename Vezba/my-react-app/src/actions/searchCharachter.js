export const SEARCH_CHARACHTER_DETAIL_REQUEST = "SEARCH_CHARACHTER_DETAIL_REQUEST";
export const SEARCH_CHARACHTER_DETAIL_SUCCESS = "SEARCH_CHARACHTER_DETAIL_SUCCESS";
export const SEARCH_CHARACHTER_DETAIL_FAIL = "SEARCH_CHARACHTER_DETAIL_FAIL";

export const searchCharachterDetailRequest = () => ({
  type: SEARCH_CHARACHTER_DETAIL_REQUEST,
});

export const searchCharachterDetailSuccess = (charachters) => ({
  type: SEARCH_CHARACHTER_DETAIL_SUCCESS,
  payload: charachters,
});

export const searchCharachterDetailFail = (error) => ({
  type: SEARCH_CHARACHTER_DETAIL_SUCCESS,
  payload: error,
});

export const searchCharacterDetail = (searchTerm) => {
  return (dispatch) => {
    dispatch(searchCharachterDetailRequest());

    fetch(`https://rickandmortyapi.com/api/character?name=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchCharachterDetailSuccess(data));
      })
      .catch((error) => {
        dispatch(searchCharachterDetailFail(error.message));
      });
  };
};
