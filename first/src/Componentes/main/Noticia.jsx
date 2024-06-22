import React, { useState } from 'react';
import InputLike from '../inputLike/InputLike';

const Noticia = ({ titulo, conteudo, postedAT }) => {
  const [color, setColor] = useState('none');

  const handleClick = () => {
    setColor((color) => (color === 'none' ? '#E07B67' : 'none'));
  };

  return (
    <div className=" bg-[#17171A] w-[70%] h-max py-10 px-10 rounded-lg border-2 border-[#252529]">
      <div className="flex justify-between mb-[27.5px]">
        <span className=" text-span font-Inter">{postedAT}</span>
        <InputLike color={color} onClick={handleClick} />
      </div>
      <h2 className="mb-4 text-[#FFFFFF] font-Inter">{titulo}</h2>
      <p className="text-[#AFABB6] font-spaceGrotesk">{conteudo}</p>
    </div>
  );
};

export default Noticia;
