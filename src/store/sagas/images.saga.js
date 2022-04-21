import axios from "axios";
import { takeEvery, put, call, delay } from "redux-saga/effects";
import { failureImages, successImages } from "../actions/images.action";

function fetchImages() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos?_limit=24",
  });
}

export function* workerImages() {
  try {
    const response = yield call(fetchImages);
    const images = response.data;

    // Добавляем категории
    const imagesCategory = images.map((image, index) => {
      return {
        ...image,
        categoryId: (index % 4) + 1,
      }
    })

    yield delay(500);
    yield put(successImages(imagesCategory));
  } catch (error) {
    yield put(failureImages());
  }
}

export function* watchImages() {
  yield takeEvery("IMAGES_FETCH_REQUEST", workerImages);
}
