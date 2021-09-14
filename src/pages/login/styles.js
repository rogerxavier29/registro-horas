import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Image = styled.div`
  padding-left: 50px;
  img {
    max-width: 1366px;
    max-height: 660px;
  }
`;

export const Loggin = styled.div`
  width: 600px;
  justify-content: center;
  margin: 0 auto;
  h1 {
    margin-top: 150px;
    justify-items: center;
    text-align: center;
    align-items: center;
    font-size: 32px;
    font-weight: normal;
    color: #3e4756;

    span {
      margin-left: 3px;
      font-weight: 600;
    }
  }
`;

export const Password = styled.div`
  display: flex;
  margin: 30px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 80px;
  padding-left: 40px;
`;
