const initialState = {
  image: null,
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGE_FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "IMAGE_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        image: action.image,
      };
    case "IMAGE_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
