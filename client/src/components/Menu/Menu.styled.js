import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;