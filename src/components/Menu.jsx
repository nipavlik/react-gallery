import { Menu as AntMenu } from "antd";
import { UserOutlined, PictureOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const paths = {
  about: {
    path: "/about",
  },
  all: {
    path: "/",
  },
};

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const onSelect = ({ key }) => {
    navigate(paths[key].path);
  };

  const getSelectedKeys = () => {
    if (location.pathname === "/") {
      return ["all"];
    }
    if (location.pathname === "/about") {
      return ["about"];
    }
  };

  return (
    <AntMenu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={getSelectedKeys()}
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
