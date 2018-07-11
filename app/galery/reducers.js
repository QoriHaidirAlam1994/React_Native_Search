const initialState = {
  results: [], //GET ALL
  isLoading: false,
  isError: false,
  isSuccess: false
};

const galerysReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_GALERYS_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };
    case "ALL_GALERYS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        results: action.payload.data
      };
    case "ALL_GALERYS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        results: action.payload.data
      };
    default:
      return state;
  }
};

export default galerysReducer;
