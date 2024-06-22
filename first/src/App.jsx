import React, { useState } from 'react';
import Header from './Componentes/Header/Header';
import Noticias from './Componentes/main/Noticias';

const App = () => {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
    {
      id: 2,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
    {
      id: 3,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
    {
      id: 4,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
    {
      id: 5,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
    {
      id: 6,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
    {
      id: 7,
      titulo: 'O que é linguagem de programação? Conheça as principais',
      conteudo:
        'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
      postedAT: '17 de ago, 2024',
    },
  ]);

  return (
    <>
      <Header />
      <Noticias noticias={noticias} />
    </>
  );
};

export default App;
