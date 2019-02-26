import styled from 'styled-components'

const SocialList = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
`;

const SocialLink = styled.a`
  color: #333;
`;

const SocialLinks = () => (
  <SocialList>
    <SocialLink href="https://github.com/mickyvx" target="_blank"><i className="fab fa-github fa-2x"></i></SocialLink>
  </SocialList>
)

export default SocialLinks