import Link from 'next/link';


const Nav = () => {
  return (
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

        <div className="navbar-links">
          <Link href="/">Home</Link>

          <Link href="/sobre">Sobre</Link>
          <Link href="/tecnologia">Tecnologia</Link>
          <Link href="/solucoes">Soluções</Link>


          <button className="button-contato"><Link href="/contato">Contato</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
