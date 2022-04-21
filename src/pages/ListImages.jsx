import styled from "styled-components";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";

import Image from "../components/Image";
import Spinner from "../components/Spinner";
import useImages from "../hooks/useImages";

function ListImages() {
  const navigate = useNavigate();

  const { images, loading, error } = useImages();

  if (loading) return <Spinner />;

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
