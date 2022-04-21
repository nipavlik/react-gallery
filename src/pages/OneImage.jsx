import styled from 'styled-components';
import { Button } from 'antd'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Alert } from "antd";
import { fetchImage } from '../store/actions/image.action';

import Spinner from "../components/Spinner";


function OneImage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.image.loading);
  const error = useSelector((state) => state.image.error);
  const image = useSelector((state) => state.image.image);

  const toBack = () => {
    navigate("/")
  }

  useEffect(() => {
    dispatch(fetchImage(id))
  }, [dispatch, id])

  if (loading) 
    return <Spinner />;

  if (error)
    return <Alert message="Ошибка получения фото" type="error" showIcon />;

  return (
    <OneImageWrapper>
      <Control>
        <Button onClick={toBack}>Назад</Button>
      </Control>
      <Title>{ image.title }</Title>
      <Image src={image.url} />
    </OneImageWrapper>
  )
}


const Control = styled.div`
  margin-bottom: 10px;
`

const Title = styled.h2`
`

const OneImageWrapper = styled.div`
  
`

const Image = styled.img`
  
`

export default OneImage;
