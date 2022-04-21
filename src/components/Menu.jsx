import { Menu as AntMenu } from "antd";
import { UserOutlined, PictureOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'

const paths = {
  'about': {
    path: "/about"
  },
  'all': {
    path: "/"
  }
}

function Menu() {

  const navigate = useNavigate();

  const onSelect = ({ key }) => {
    navigate(paths[key].path)
  }

  return (
    <AntMenu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onClick={onSelect}
      items={[
        {
          key: "all",
          icon: <PictureOutlined />,
          label: "Галерея",
        },
        {
          key: "about",
          icon: <UserOutlined />,
          label: "Обо мне",
        },
      ]}
    />
  );
}

export default Menu;
