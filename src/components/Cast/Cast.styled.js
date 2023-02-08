import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 20px auto;
  padding: 0px;
`;

export const Item = styled.div`
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 2px 1px -1px;
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

export const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;
