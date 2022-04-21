import styled from "styled-components";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "antd";

import Spinner from "../components/Spinner";
import useImage from "../hooks/useImage";

function OneImage() {
  const { id } = useParams();

  const navigate = useNavigate();
  
  const { image, loading, error } = useImage(id);

  const toBack = () => {
    navigate("/");
  };

  if (loading) return <Spinner />;

  if (error)
    return <Alert message="Ошибка получения фото" type="error" showIcon />;

  return (
    <OneImageWrapper>
      <Control>
        <Button onClick={toBack}>Назад</Button>
      </Control>
      <Title>{image.title}</Title>
      <Image src={image.url} />
    </OneImageWrapper>
  );
}

const Control = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h2``;

const OneImageWrapper = styled.div``;

const Image = styled.img``;

export default OneImage;
