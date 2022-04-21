import { combineReducers } from "redux";

import ImagesReducer from "./images.reducer";

const rootReducer = combineReducers({
  images: ImagesReducer,
});

export default rootReducer;
