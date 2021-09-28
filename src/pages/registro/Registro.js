import React from 'react';
import {
  Content,
  SubContent,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  ImgRelogio,
  ImgEditar,
  ImgSalvar,
} from './styles';
import Header from '../../components/Header';
import Relogio from '../../assets/RelogioMenor.svg';
import RelogioGrande from '../../assets/RelogioGrande.svg';
import LapisEditar from '../../assets/LapisEditar.svg';
import Salvar from '../../assets/Salvar.svg';

const registro = () => {
  return (
    <Content>
      <Header />
      <SubContent>
        <div>
          <section>
            <div>
              <img src={Relogio} alt='relogio-menor' />
            </div>
            <p>
              Hoje
              <span>Quinta-feira</span>
            </p>
          </section>
        </div>
        <div>
          {' '}
          <Section2>
            <p>
              Entrada
              <span>00:00</span>
            </p>
          </Section2>
        </div>
        <div>
          {' '}
          <Section3>
            <p>
              Saída Pausa
              <span>00:00</span>
            </p>
          </Section3>
        </div>
        <div>
          {' '}
          <Section4>
            <p>
              Retorno Pausa
              <span>00:00</span>
            </p>
          </Section4>
        </div>
        <div>
          {' '}
          <Section5>
            <p>
              Saída
              <span>00:00</span>
            </p>
          </Section5>
        </div>
        <div>
          {' '}
          <Section6>
            <ImgRelogio>
              <img src={RelogioGrande} alt='relogio azul' />
            </ImgRelogio>
            <ImgEditar>
              <img src={LapisEditar} alt='lapis' />
            </ImgEditar>
            <ImgSalvar>
              <img src={Salvar} alt='disquete salvar' />
            </ImgSalvar>
          </Section6>
        </div>
      </SubContent>
    </Content>
  );
};

export default registro;
