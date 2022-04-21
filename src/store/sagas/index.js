import { all } from "redux-saga/effects"
import { watchImages } from "./images.saga"

export default function* rootSaga() {
  yield all([
    watchImages()
  ])
}