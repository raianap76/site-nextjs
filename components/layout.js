import Nav from './nav';
import Meta from './meta';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="main-layout">
        <main className="{styles.main}">
          {/* aqui fica o conteudo das outras paginas */}
          {children}
        </main>


      </div>
     <Footer/>

    </>
  );
};

export default Layout;
