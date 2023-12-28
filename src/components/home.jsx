import React from "react";

function Home() {

  return (
    <div className="container">
      <h1>ESTAMOS EN EL HOME</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quo vol
        utatibus dolores autem nesciunt repudiandae debitis iure! Quod eaque explicabo
        alias laboriosam minus tempora.</p>
        <button type="button" class="btn btn-primary">Primary</button>
        <ul className="listado">
          <li><a href="/detail">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3 con mucho texto para que se vea como funciona la maquetación</a></li>
        
        </ul>
      

    </div>
  );
};

export default Home;
