const fetchImage = function (id) {
  return {
    type: "IMAGE_FETCH_REQUEST",
    id,
  };
};

const successImage = function (image) {
  return {
    type: "IMAGE_FETCH_SUCCESS",
    image,
  };
};

const failureImage = function () {
  return {
    type: "IMAGE_FETCH_FAILURE",
  };
};

module.exports = { fetchImage, successImage, failureImage };
