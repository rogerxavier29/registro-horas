import styled from 'styled-components';

export const Content = styled.header`
  width: 100%;
  height: 75px;
  background: #fff;
  border-bottom: solid, #e6e6e6;
  display: flex;
  justify-content: space-between;

  h1 {
    margin-left: 32px;
  }
  section {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    text-align: center;
    align-items: center;
    margin-right: 32px;
  }
  img.usuario {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #19dbd166;
  }
`;
