import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}

input#basic_login.ant-input.ant-input-lg{
  width:350px;
  height: 51px;
  border: 1px solid #666666;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 10px;
}

input#basic_senha.ant-input.ant-input-lg{
width:350px;
height: 51px;
border: 1px solid #666666;
border-radius: 5px;
position: absolute;
display:flex;
justify-content: space-between;
font-size: 16px;
padding-left: 10px;
}

.ant-input-suffix{
position:relative;
display: flex;
justify-content: end;
padding-top:17px;
padding-right: 12px;

}

div.ant-form-item-control-input{
margin-top:20px;
color: #666666;
font-size: 17px;
font-weight: normal;
}

button.ant-btn.btn-login{
width: 350px;
height: 42px;
background:#19dbd1;
color:#fff;
border:none;
border-radius: 4px;
font-size: 18px;
margin:0 auto;
}
`;

export default GlobalStyle;
