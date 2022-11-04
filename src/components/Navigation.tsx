import Cookies from "js-cookie";

export default function Nav() {
  return (
    <nav className="scrolled">
      <div className="box">
        <div className="logo">
          <img src={Cookies.get("dark") ? "/images/logo-light.png" : "/images/logo-dark.png"} alt="" />
        </div>

        <ul>
          <li>Início</li>
          <li>Sobre o projeto</li>
          <li>Postagens</li>
          <li>Time</li>
          <li>Empresas</li>
          <li>Contato</li>
        </ul>
      </div>
    </nav>
  )
}