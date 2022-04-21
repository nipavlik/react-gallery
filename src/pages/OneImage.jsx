import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function OneImage() {

  const navigate = useNavigate();

  const toBack = () => {
    navigate("/")
  }

  return (
    <div>
      <Button onClick={toBack}>Назад</Button>
    </div>
  )
}

export default OneImage;
