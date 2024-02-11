// import Masonry from "react-masonry-component";

import "./styles/ProfilePost.scss";

export const ProfilePost = ({ postExists, data }) => {
  return (
    <>
      <article className="container">
        <div className="post-wrapper flex justify-center">
          <div className="w-2/2 md:w-1/2 border-dashed border-pink-400 border-2 rounded-md p-10 flex justify-center max-w-screen-sm">
            {postExists ? (
              <div>
                <p className="mb-5">
                  Tienes un anuncio publicado
                  <span role="img" aria-label="smile emoji">
                    😀
                  </span>
                </p>
                <section className="post">
                  <p className="pb-2">ID del anuncio: {data[0]._id}</p>
                  <p className="pb-2">Nombre: {data[0].name}</p>
                  <p className="pb-2">Teléfono: {data[0].phone}</p>
                  {/* <Masonry> */}
                  {data[0].images.map((image, i) => {
                    return (
                      <div key={i} className="w-full md:w-3/6 p-2">
                        <img
                          src={image}
                          alt="item"
                          className="block w-full"
                        ></img>
                      </div>
                    );
                  })}
                  {/* </Masonry> */}
                </section>
              </div>
            ) : (
              <div>
                <p>
                  Aún {postExists} no has publicado un anuncio
                  <span role="img" aria-label="sleep emoji">
                    😪
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
