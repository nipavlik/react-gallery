import { Button as AntButton } from "antd";
import styled from "styled-components";

function Image({ id, onClick, ...props }) {
  return (
    <ImageWrapper>
      <ImageStyle {...props} />
      <Button onClick={() => onClick(id) }>Подробнее</Button>
    </ImageWrapper>
  );
}

const Button = styled(AntButton)`
  display: none;
  visibility: hidden;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const ImageStyle = styled.img`
  cursor: pointer;
`;

const ImageWrapper = styled.span`
  position: relative;
  width: fit-content;
  margin: 5px;
  :hover {
    ${Button} {
      display: block;
      visibility: visible;
    }
  }
`;

export default Image;
