import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Item = styled.li`
  width: calc(100vw - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
