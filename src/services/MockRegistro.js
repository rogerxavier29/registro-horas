export const getRegistro = async () => {
  const data = [
    {
      id: 1,
      dia: 'Hoje',
      diaSemana: 'Quinta-feira',
      horaInicial: new Date(),
      horaSaida: new Date(),
      inicioPausa: new Date(),
      retornoPausa: new Date(),
      feriado: false, // icone estrela
      findSemana: false, // icone -
      hoje: true, // icone relegio
      diasPassado: false, // icone ok
    },

    {
      id: 2,
      dia: 'Ontem',
      diaSemana: 'Quarta-feira',
      horaInicial: new Date(),
      horaSaida: new Date(),
      InicioPausa: new Date(),
      RetornoPausa: new Date(),
      feriado: false,
      findSemana: false,
      hoje: false,
      diasPassado: true,
    },

    {
      id: 3,
      dia: '07/09',
      diaSemana: 'Terça-feira',
      horaInicial: new Date(),
      horaSaida: new Date(),
      InicioPausa: new Date(),
      RetornoPausa: new Date(),
      feriado: true,
      findSemana: false,
      hoje: false,
      diasPassado: false,
    },
    {
      id: 4,
      dia: '06/09',
      diaSemana: 'segunda-feira',
      horaInicial: new Date(),
      horaSaida: new Date(),
      InicioPausa: new Date(),
      RetornoPausa: new Date(),
      feriado: false,
      findSemana: false,
      hoje: false,
      diasPassado: true,
    },
    {
      id: 5,
      dia: '05/09',
      diaSemana: 'Domingo',
      horaInicial: new Date(),
      horaSaida: new Date(),
      InicioPausa: new Date(),
      RetornoPausa: new Date(),
      feriado: false,
      findSemana: true,
      hoje: false,
      diasPassado: false,
    },
    {
      id: 6,
      dia: '04/09',
      diaSemana: 'Sabado',
      horaInicial: new Date(),
      horaSaida: new Date(),
      InicioPausa: new Date(),
      RetornoPausa: new Date(),
      feriado: false,
      findSemana: true,
      hoje: false,
      diasPassado: false,
    },
  ];
  try {
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
