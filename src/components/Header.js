import React from 'react';
import { Content } from './styles';
import Relogio from '../assets/Relogio.svg';
import Alert from '../assets/alert.svg';
import Email from '../assets/email.svg';
import Usuario from '../assets/usuario.png';
import Seta from '../assets/seta.svg';

const Header = () => {
  return (
    <Content>
      <h1>
        Meu Web{' '}
        <span>
          P<img src={Relogio} alt='Relogio' />
          nto
        </span>
      </h1>
      <section>
        {' '}
        <div>
          <img src={Alert} alt='sininho de alerta' />
        </div>{' '}
        <div>
          <img src={Email} alt='envelope de email' />
        </div>{' '}
        <div>
          {' '}
          <img className='usuario' src={Usuario} alt='perfil usuario' />
        </div>{' '}
        <div>
          <img src={Seta} alt='seta para baixo' />
        </div>{' '}
      </section>
    </Content>
  );
};

export default Header;
