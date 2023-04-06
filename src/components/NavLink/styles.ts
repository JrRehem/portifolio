import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    color: ${props =>
    props.isActive ? props.theme.primary : props.theme.textSecondary};
    transition: 0.5s;

    &:hover {
      color: ${props =>
    props.isActive
      ? props.theme.primary
      : props.theme.textPrimary};
    }
  }
`;
