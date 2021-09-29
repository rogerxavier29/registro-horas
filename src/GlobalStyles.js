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
cursor:pointer;
}

div.ant-picker-body{
display:flex;
justify-content: center;
text-align: center;
align-items: center;
}

div.ant-radio-group ant-radio-group-outline ant-radio-group-small ant-picker-calendar-mode-switch{
display:flex;
}

div.ant-picker-calendar-header{
  display:flex;
  justify-content:space-around;
  margin-top:20px;
  
}

input#rc_select_0.ant-select-selection-search-input{
display:none;
}
input#rc_select_1.ant-select-selection-search-input{
display:none;
}

button.ant-btn{
margin:16px;
width: 200px;
height: 51px;
align-items: center;
text-align: center;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #3E4756;
border-radius: 5px;
font-size: 16px;
font-weight: bold;
cursor: pointer;
}

`;

export default GlobalStyle;
