import React from "react";
import img1 from '../img/galeria-1.jpg';
import img2 from '../img/galeria-2.jpg';
import img3 from '../img/galeria-3.jpg';
import img4 from '../img/galeria-4.jpeg';

const galeriaFotos = () => {
  return (
    <>	
        <div className="contenedor">
          <div className="cubos c1">
                  <img
                    src={img1}
                    className="img"
                    alt=""
                  />
          </div>
          <div className="cubos">
                  <img
                    src={img2}
                    className="img"
                    alt=""
                  />
          </div>
          <div className="cubos">
                  <img
                    src={img3}
                    className="img"
                    alt=""
                  />
          </div>
          <div className="cubos">
                  <img
                    src={img4}
                    className="img"
                    alt=""
                  />
          </div>
    </div>   
    </>
  );
};

export default galeriaFotos;
