import React from 'react';
import Noticia from './Noticia';

const Noticias = ({ noticias, search }) => {
  const searchToLowerCase = search.toLowerCase();
  const noticiasFIltradas = noticias.filter((noticia) =>
    noticia.titulo.toLowerCase().includes(searchToLowerCase),
  );

  return (
    <section className="w-full bg-[#121214] min-h-[calc(100vh-283px)]">
      <div className=" flex items-center flex-col py-[40px] gap-10 h-full">
        {noticiasFIltradas.map((noticia) => (
          <Noticia
            key={noticia.id}
            postedAT={noticia.postedAT}
            titulo={noticia.titulo}
            conteudo={noticia.conteudo}
          />
        ))}
      </div>
    </section>
  );
};

export default Noticias;
