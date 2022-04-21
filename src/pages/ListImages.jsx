import styled from "styled-components";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { Radio } from 'antd'

import Image from "../components/Image";
import Spinner from "../components/Spinner";
import useImages from "../hooks/useImages";
import { useState } from "react";
import { useEffect } from "react";

function ListImages() {
  const navigate = useNavigate();

  const { images, loading, error } = useImages();

  const [category, setCategory] = useState(1);
  const [imagesCategory, setImagesCategory] = useState(images.filter(el => el.categoryId === category))

  const onClickImage = (id) => {
    navigate(`/images/${id}`);
  };

  // Если категория поменялась то завоно отфильтровать массив
  useEffect(() => {
    setImagesCategory(images.filter(el => el.categoryId === category))
  }, [category, images])

  // Если загрузка показать спиннер
  if (loading)
    return <Spinner />;

  // Если ошибка показать уведомление
  if (error)
    return <Alert message="Ошибка получения фото" type="error" showIcon />;

  return (
    <ListImagesWrapper>
      <Control>
        <Radio.Group value={category} onChange={(e) => setCategory(e.target.value)}>
          <Radio.Button value={ 1 }>1 категория</Radio.Button>
          <Radio.Button value={ 2 }>2 категория</Radio.Button>
          <Radio.Button value={ 3 }>3 категория</Radio.Button>
          <Radio.Button value={ 4 }>4 категория</Radio.Button>
        </Radio.Group>
      </Control>
      
      {imagesCategory.map((image) => {
        return (
          <Image
            key={image.id}
            id={image.id}
            src={image.thumbnailUrl}
            onClick={onClickImage}
          />
        );
      })}
      
    </ListImagesWrapper>
  );
}

const Control = styled.div`
  width: 100%;
  padding: 5px;
`

const ListImagesWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default ListImages;
