import axios from "axios";
import { takeEvery, put, call, delay } from "redux-saga/effects";
import { failureImage, successImage } from "../actions/image.action";

function fetchImage(id) {
  return axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/photos/${id}`,
  });
}

export function* workerImage({ id }) {
  try {
    const response = yield call(fetchImage, id);
    const image = response.data;

    yield delay(500);
    yield put(successImage(image));
  } catch (error) {
    yield put(failureImage());
  }
}

export function* watchImage() {
  yield takeEvery("IMAGE_FETCH_REQUEST", workerImage);
}
