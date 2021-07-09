import Link from 'next/link';
import React, { useEffect } from 'react';
const Nav = () => {
  useEffect(() => {
    var checkbox = document.getElementById('navbar-check');
    document.getElementById('remove-nav').addEventListener('click', function () {
      if (window.matchMedia('(max-width: 800px)').matches) {
        document.getElementById('remove-nav').classList.add('none-nav');
        checkbox.checked = false;
      }
    });

    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        console.log(e.target.checked);
        if (window.matchMedia('(max-width: 800px)').matches) {
          document.getElementById('remove-nav').classList.remove('none-nav');
        }
      }
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

          <div className="navbar-links" id="remove-nav">
            <Link href="/">Home</Link>

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
