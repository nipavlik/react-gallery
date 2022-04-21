import { useEffect } from "react";
import { fetchImages } from "../store/actions/images.action";
import { useDispatch, useSelector } from "react-redux";

function useImages() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return {
    loading: useSelector((state) => state.images.loading),
    error: useSelector((state) => state.images.error),
    images: useSelector((state) => state.images.images),
  };
}

export default useImages;
