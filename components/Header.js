import styled from 'styled-components'

const HeaderDiv = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const Title = styled.h1`
  padding: 10px;
`;

const Header = () => (
  <HeaderDiv>
    <ProfileImage src="/static/ProfileCropped.jpg" alt="Michael Vorster" />
    <Title>Michael Vorster</Title>
  </HeaderDiv>
)

export default Header