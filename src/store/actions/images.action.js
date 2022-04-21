const fetchImages = function () {
  return {
    type: "IMAGES_FETCH_REQUEST",
  };
};

const successImages = function (images) {
  return {
    type: "IMAGES_FETCH_SUCCESS",
    images,
  };
};

const failureImages = function () {
  return {
    type: "IMAGES_FETCH_FAILURE",
  };
};

module.exports = { fetchImages, successImages, failureImages };
