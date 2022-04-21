import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../store/actions/image.action';

function useImage(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImage(id))
  }, [dispatch, id])

  return {
    loading: useSelector((state) => state.image.loading),
    error: useSelector((state) => state.image.error),
    image: useSelector((state) => state.image.image),
  }
}

export default useImage