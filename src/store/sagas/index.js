import { all } from "redux-saga/effects";
import { watchImage } from "./image.saga";
import { watchImages } from "./images.saga";

export default function* rootSaga() {
  yield all([watchImages(), watchImage()]);
}
