import { combineReducers } from "redux";

import ImagesReducer from "./images.reducer";
import ImageReducer from "./image.reducer";

const rootReducer = combineReducers({
  images: ImagesReducer,
  image: ImageReducer
});

export default rootReducer;
