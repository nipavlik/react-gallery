import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";

import { fetchImages } from "../store/actions/images.action";
import Image from "../components/Image";
import Spinner from "../components/Spinner";

function ListImages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.images.loading);
  const error = useSelector((state) => state.images.error);
  const images = useSelector((state) => state.images.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading) 
    return <Spinner />;
    
  if (error)
    return <Alert message="Ошибка получения фото" type="error" showIcon />;

  const onClickImage = (id) => {
    navigate(`/images/${id}`);
  };

  return (
    <List>
      {images.map((image) => {
        return (
          <Image
            key={image.id}
            id={image.id}
            src={image.thumbnailUrl}
            onClick={onClickImage}
          />
        );
      })}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default ListImages;
