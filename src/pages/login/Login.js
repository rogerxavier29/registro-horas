import React from 'react';
import { Content, Image, Loggin, Password, Logo } from './styles';
import Mulher from '../../assets/Mulher.svg';
import Relogio from '../../assets/Relogio.svg';
import GX2 from '../../assets/GX.png';
import { Input, Form, Checkbox, Button, Col } from 'antd';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let history = useHistory();

  function handleHistory() {
    history.push('/registro');
  }

  return (
    <Content>
      <Image>
        <img src={Mulher} alt='mulher andando' />
      </Image>

      <Loggin>
        <h1>
          Meu web{' '}
          <span>
            P<img src={Relogio} alt='Relogio' />
            nto
          </span>
        </h1>
        <Password>
          <Form
            name='basic'
            style={{ display: 'grid', gap: '20px', margin: '0 auto' }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Col>
              <Form.Item
                name='login'
                rules={[
                  {
                    required: true,
                    message: 'Por favor, digite seu Login!',
                  },
                ]}
              >
                <Input placeholder='Login' size='large' />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item
                name='senha'
                rules={[
                  {
                    required: true,
                    message: 'Por favor, digite sua senha!',
                  },
                ]}
              >
                <Input.Password placeholder='Senha' size='large' />
              </Form.Item>
            </Col>

            <Col>
              <Form.Item name='checkbox' valuePropName='checked'>
                <Checkbox>Mantenha-me conectado</Checkbox>
              </Form.Item>
            </Col>

            <Button
              className='btn-login'
              onClick={handleHistory}
              htmlType='submit'
            >
              Entrar
            </Button>
          </Form>
        </Password>
        <Logo>
          <img src={GX2} alt='logo-GX2' />
        </Logo>
      </Loggin>
    </Content>
  );
};

export default Login;
