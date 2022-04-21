import styled from "styled-components";

function About() {
  return (
    <AboutWrapper>
      <P>Хобби - программирование, изучение новых технологий.</P>

      <P>Вхожу в состав расширенной сборной WorldSkills Russia по компетенции "Сетевое и системное администрирование"</P>

      <P>Ссылка на github: <a href="https://github.com/nipavlik">https://github.com/nipavlik</a></P>
    </AboutWrapper>
  )
}

const P = styled.p`

`

const AboutWrapper = styled.div`
  font-size: 16px;
`

export default About;
