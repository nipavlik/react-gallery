import styled from "styled-components";

function Logo() {
  return (
    <LogoStyle>
      <LogoImage src="/logo192.png" />
    </LogoStyle>
  );
}

const LogoImage = styled.img`
  height: 40px;
`;

const LogoStyle = styled.div`
  text-align: center;
  margin: 16px;
`;

export default Logo;
