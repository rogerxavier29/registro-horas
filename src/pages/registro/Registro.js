import React, { useState, useEffect } from 'react';
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
  Content2,
  DivCalendar,
  Horas,
} from './styles';
import Header from '../../components/Header';
import Relogio from '../../assets/RelogioMenor.svg';
import RelogioGrande from '../../assets/RelogioGrande.svg';
import LapisEditar from '../../assets/LapisEditar.svg';
import Salvar from '../../assets/Salvar.svg';
import IconFeriado from '../../assets/IconFeriado.svg';
import IconFindSemana from '../../assets/IconFindSemana.svg';
import IconOk from '../../assets/IconOk.svg';
import { getRegistro } from '../../services/MockRegistro';
import moment from 'moment';
import { Calendar, Button } from 'antd';

const Registro = () => {
  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    getRegistro()
      .then((response) => {
        setRegistro(response);
      })
      .catch((err) => console.log(err));
  }, []);

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <Content>
      <Header />
      <Content2>
        <SubContent>
          {registro &&
            registro.map((data) => (
              <li>
                <div>
                  <section key={data.id}>
                    {data && data.hoje ? (
                      <div>
                        <img src={Relogio} alt='relogio-menor' />
                      </div>
                    ) : (
                      ''
                    )}

                    {data && data.diasPassado ? (
                      <div>
                        <img src={IconOk} alt='relogio-menor' />
                      </div>
                    ) : (
                      ''
                    )}

                    {data && data.feriado ? (
                      <div>
                        <img src={IconFeriado} alt='relogio-menor' />
                      </div>
                    ) : (
                      ''
                    )}

                    {data && data.findSemana ? (
                      <div>
                        <img src={IconFindSemana} alt='relogio-menor' />
                      </div>
                    ) : (
                      ''
                    )}

                    <p>
                      {data.dia}
                      <span>{data.diaSemana}</span>
                    </p>
                  </section>
                </div>
                <div>
                  {' '}
                  <Section2>
                    <p>
                      Entrada
                      <span>{moment(data.horaInicial).format('HH:mm')}</span>
                    </p>
                  </Section2>
                </div>
                <div>
                  {' '}
                  <Section3>
                    <p>
                      Saída Pausa
                      <span>{moment(data.inicioPausa).format('HH:mm')}</span>
                    </p>
                  </Section3>
                </div>
                <div>
                  {' '}
                  <Section4>
                    <p>
                      Retorno Pausa
                      <span>{moment(data.retornoPausa).format('HH:mm')}</span>
                    </p>
                  </Section4>
                </div>
                <div>
                  {' '}
                  <Section5>
                    <p>
                      Saída
                      <span>{moment(data.horaSaida).format('HH:mm')}</span>
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
              </li>
            ))}
        </SubContent>
        <DivCalendar className='site-calendar-demo-card'>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          <Horas>
            <Button>Horas previstas</Button>
            <Button>Horas realizadas</Button>
            <Button>Horas extras</Button>
            <Button>Horas abonadas</Button>
            <Button>Saldo de horas</Button>
          </Horas>
        </DivCalendar>
      </Content2>
    </Content>
  );
};

export default Registro;
