import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 130vh;
  background: #f2fdfc;
`;

export const Content2 = styled.div`
  display: flex;
`;

export const SubContent = styled.div`
  width: 941px;
  height: 680px;
  background: #ffffff;
  margin: 16px;
  cursor: pointer;

  li {
    display: flex;
    justify-content: space-around;
  }

  section {
    display: flex;

    div {
      margin-right: 13px;
      margin-top: 40px;
    }
  }
  p {
    width: 121px;
    font-size: 24px;
    display: grid;
    font-weight: bold;
    span {
      font-size: 13px;
      font-weight: 100;
      margin-top: 15px;
    }
  }
`;

export const Section2 = styled.section`
  width: 60px;
  display: flex;
  cursor: pointer;
  p {
    font-size: 16px;
    display: grid;
    margin-top: 32px;
    span {
      font-size: 16px;
      font-weight: 200;
      margin-top: 15px;
    }
  }
`;

export const Section3 = styled.section`
  width: 100px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  p {
    font-size: 16px;
    display: grid;
    margin-top: 32px;
    span {
      font-size: 16px;
      font-weight: 200;
      margin-top: 15px;
    }
  }
`;

export const Section4 = styled.section`
  width: 121px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  p {
    font-size: 16px;
    display: grid;
    margin-top: 32px;
    span {
      font-size: 16px;
      font-weight: 200;
      margin-top: 15px;
    }
  }
`;

export const Section5 = styled.section`
  width: 5px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  p {
    font-size: 16px;
    display: grid;
    margin-top: 32px;
    span {
      font-size: 16px;
      font-weight: 200;
      margin-top: 15px;
    }
  }
`;

export const Section6 = styled.section`
  display: flex;
  margin-left: 20px;
  gap: 5px;
`;

export const ImgRelogio = styled.div`
  width: 34px;
  height: 34px;
  background: #00bfe6 0% 0% no-repeat padding-box;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  img {
    margin-top: 7px;
  }
`;

export const ImgEditar = styled.div`
  width: 34px;
  height: 34px;
  background: #bfbfbf 0% 0% no-repeat padding-box;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  img {
    margin-top: 8px;
  }
`;

export const ImgSalvar = styled.div`
  width: 34px;
  height: 34px;
  background: #51bb94 0% 0% no-repeat padding-box;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  cursor: pointer;
  img {
    margin-top: 8px;
  }
`;

export const DivCalendar = styled.div`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  margin-bottom: 16px;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const Horas = styled.div`
  margin-top: 20px;
  border-top: 1px solid #e6e6e6;
  display: grid;
  justify-content: center;
`;
