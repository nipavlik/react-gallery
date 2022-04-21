const initialState = {
  images: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGES_FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "IMAGES_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        images: action.images,
      };
    case "IMAGES_FETCH_FAILURE":
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
