import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  margin-bottom: 15px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 40px;
  padding: 10px 20px;
  color: #fff;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  &:hover {
    color: red;
  }
`;
