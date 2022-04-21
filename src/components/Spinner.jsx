import styled from "styled-components";
import { Spin as AntSpin } from "antd";

function Spinner() {
  return (
    <Spin size="large" />
  )
}

const Spin = styled(AntSpin)`
  text-align: center;
  width: 100%;
`;

export default Spinner