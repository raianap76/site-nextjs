import Link from 'next/link';
import React, { useState, useEffect } from 'react';
const Nav = () => {
  useEffect(() => {
    document.getElementById('testee').addEventListener('click', function () {
      if (window.matchMedia("(max-width: 800px)").matches) {
        document.getElementById('testee').classList.add('none-nav');
        console.log("deuuu")
        /* a viewport tem pelo menos 400 pixels de largura */
      }
     // document.getElementById('Painel-1').classList.add('none');
    });
    const checkbox = document.getElementById('navbar-check');
    checkbox.addEventListener('change', e => {
      console.log("mudou")
      document.getElementById('testee').classList.remove('none-nav');

      if(e.target.checked){
        console.log(e.target.checked)
        if (window.matchMedia("(max-width: 800px)").matches) {
          document.getElementById('testee').classList.remove('none-nav');
          console.log("deuuu")
          /* a viewport tem pelo menos 400 pixels de largura */
        }
      }else{

      }

  });
    document.getElementById('navbar-check').addEventListener('change', function () {

     // document.getElementById('Painel-1').classList.add('none');
    });
  }, []);

  return (
    <div className="teste">
      <div className="container pt-4 pb-4">
        <div className="navbar">
          <input type="checkbox" id="navbar-check" />
          <div className="navbar-header">
            <Link className="cursor-pointer" href="/">
              <div className="log-nav"></div>
            </Link>
          </div>
          <div className="navbar-btn">
            <label htmlFor="navbar-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="navbar-links" id="testee">
            <Link  href="/">
              Home
            </Link>

            <Link href="/sobre">Sobre</Link>
            <Link href="/tecnologia">Tecnologia</Link>
            <Link href="/solucoes">Soluções</Link>

            {/* <div className="button-contato-center"> */}
            <button className="button-contato">
              <Link href="/contato">Contato</Link>
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
