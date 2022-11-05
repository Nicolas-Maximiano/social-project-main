import Cookies from "js-cookie";
import { FaBars, FaWindowClose } from "react-icons/fa";

export default function Nav() {

  function menuMobileToggle() {
    const menu = document.querySelector(".menuMobile");
    menu?.classList.toggle("active");
    document.querySelector("body")?.classList.toggle("stop-scrolling");
  }

  return (
    <nav className="scrolled">
      <div className="box">
        <div className="bars">
          <FaBars onClick={menuMobileToggle} />
        </div>

        <div className="logo">
          <img src={Cookies.get("dark") ? "/images/logo-light.png" : "/images/logo-dark.png"} alt="" />
        </div>

        <ul>
          <a href="#home"><li>Início</li></a>
          <a href="#about"><li>Sobre o projeto</li></a>
          <a href="#partners"><li>Parceiros</li></a>
          <a href="#projects"><li>Nossos projetos</li></a>
          <a href="#team"><li>Time</li></a>
          <a href="#contact"><li>Contato</li></a>
        </ul>
      </div>

      <div className="menuMobile">
        <FaWindowClose className="close" onClick={menuMobileToggle} />
        <ul>
          <a href="#home" onClick={menuMobileToggle}><li>Início</li></a>
          <a href="#about" onClick={menuMobileToggle}><li>Sobre o projeto</li></a>
          <a href="#partners" onClick={menuMobileToggle}><li>Parceiros</li></a>
          <a href="#projects" onClick={menuMobileToggle}><li>Nossos projetos</li></a>
          <a href="#team" onClick={menuMobileToggle}><li>Time</li></a>
          <a href="#contact" onClick={menuMobileToggle}><li>Contato</li></a>
        </ul>
      </div>
    </nav>
  )
}