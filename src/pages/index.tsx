import type { NextPage } from "next";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper";
import { FaPlus, FaStar, FaCheckDouble, FaUsers, FaWindowClose, FaArrowAltCircleRight, FaFacebook, FaInstagram, FaVideo, FaBuilding, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsGearFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Nav from "../components/Navigation";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [partnersPerView, setPartnersPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(2)
        setPartnersPerView(1)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset;

    const about = document.querySelector('#about') as HTMLElement;
    const partners = document.querySelector('#partners') as HTMLElement;
    const disclaimer = document.querySelector('#disclaimer') as HTMLElement;
    const projects = document.querySelector('#projects') as HTMLElement;
    const donation = document.querySelector('#donation') as HTMLElement;

    if (position > about.offsetTop - 650) {
      const itens: any = about.children[0].children

      for (let i = 0; i < itens.length; i++) {
        const element = itens[i];
        element.classList.add('show-section')
      }
    }

    if (position > partners.offsetTop - 650) {
      const itens: any = partners.children[0].children

      for (let i = 0; i < itens.length; i++) {
        const element = itens[i];
        element.classList.add('show-section')
      }
    }

    if (position > disclaimer.offsetTop - 650) {
      disclaimer.children[0].classList.add('show-section')
    }

    if (position > projects.offsetTop - 650) {
      const itens: any = projects.children[0].children

      for (let i = 0; i < itens.length; i++) {
        const element = itens[i];
        element.classList.add('show-section')
      }
    }

    if (position > donation.offsetTop - 650) {
      const itens: any = donation.children[0].children

      for (let i = 0; i < itens.length; i++) {
        const element = itens[i];
        element.classList.add('show-section')
      }
    }
  };


  function modalToggle() {
    const modal = document.querySelector("body");
    modal?.classList.toggle("open");
  }

  //create funtion for copy text in input
  function copyText() {
    document.querySelector("#copyIcon")?.classList.toggle("bg-pan-left");
    document.querySelector(".copy-text")?.classList.toggle("show");

    const copyText = document.querySelector("#copyInput") as HTMLInputElement;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  function toggleTextofDonation() {
    if (typeof window !== "undefined") {
      const text = window.screen.width < 769 ? "acima" : "ao lado"
      return text
    } else {
      return "ao lado"
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Configurando destinos</title>
        <meta
          name="description"
          content="
          O projeto configurando destinos tem como objetivo ajudar 
          crianças e mulheres que estão em situação de 
          vulnerabilidade social ou pessoal, tentamos ajudar
          através do esporte concedendo aulas gratuitas de Muay Thai a essas pessoas.
          "
        />
        <meta name="theme-color" content="#FFF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#FFF" />
        <meta name="msapplication-navbutton-color" content="#FFF" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:site_name" content="Configurando destinos" />
        <meta property="og:title" content="Configurando destinos" />
        <meta property="og:description" content="O projeto Configurando Destinos tem como principal objetivo
              transformar a vida de nosso alunos sociais, direcionando-os por
              meio do esporte para uma vida mais saudável com crescimento
              profissional como atletas de Muay Thai." />
        <meta property="og:image" itemProp="image" content="/images/bgheader.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Configurando destinos"
        />

        <meta
          name="twitter:description"
          content="O projeto Configurando Destinos tem como principal objetivo
              transformar a vida de nosso alunos sociais, direcionando-os por
              meio do esporte para uma vida mais saudável com crescimento
              profissional como atletas de Muay Thai."
        />
      </Head>

      <Nav />

      <header id="home">
        <img src="/images/logos/IMG-logo-transparente1.png" alt="" className="flip-for-image" />
        <h1 className="show-title">
          CONFIGURANDO DESTINOS
          <br />
          Muay Thai transformando vidas
        </h1>
        <p className="show-paragraph" style={{ animationDelay: ".7s" }}>
          Aulas gratuitas para crianças em vulnerabilidade social e mulheres que
          sofreram violência domestica.
        </p>
        <a href="#contact">
          <button className="flip-for-image" style={{ animationDelay: "1.7s" }}>Saiba mais</button>
        </a>

        <div className={styles.shapeDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </header>

      <section className={styles.logos}>
        <div className="box show-section" style={{ animationDelay: "2s" }}>
          <Swiper
            className={styles.swiperImgs}
            modules={[A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            speed={2800}
          >
            <SwiperSlide>
              <img src="/images/logos/nicolas-max-developer.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/logos/IMG-logo-transparente1.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/logos/logo-jonatas.svg" alt="" />
            </SwiperSlide>

            {/* <SwiperSlide>
              <img src="/images/logos/empresa-aqui.png" alt="" />
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <img src="/images/logos/empresa-aqui.png" alt="" />
            </SwiperSlide> */}

            {/* <SwiperSlide>
              <img src="/images/logos/" alt="" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={`box ${styles.aboutGrid}`}>
          <div className={styles.aboutUs} style={{ animationDelay: ".1s", animationDuration: "1.6s" }}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <span>SOBRE NÓS</span>
            <h2>Quem nos somos?</h2>
            <p>
              O Centro de Treinamento Muay Thai Girls é um espaço voltado
              exclusivamente para o público feminino e infantil. Nosso maior
              objetivo é trazer mudança na vida de nossas alunas, trazer
              alegria, alto estima e qualidade de vida.
            </p>
          </div>

          <img src="/images/mocao-honrosa.png" alt="" style={{ animationDelay: "0.4s" }} />

          <div className={styles.aboutProject} style={{ animationDelay: ".1s", animationDuration: "1.6s" }}>
            <p>
              O projeto Configurando Destinos tem como principal objetivo
              transformar a vida de nosso alunos sociais, direcionando-os por
              meio do esporte para uma vida mais saudável com crescimento
              profissional como atletas de Muay Thai. Atualmente contamos com
              dois projetos sociais:
            </p>

            <li>
              Aulas gratis de Muay Thai para crianças com fragilidade social.
            </li>
            <li>
              Aulas gratis de Muay Thai para mulheres que sofreram violência
              domestica.
            </li>
          </div>
        </div>
      </section>

      <section id="partners">
        <div className={`box ${styles.partners}`}>
          <h2 style={{ animationDelay: ".4s" }}>Empresas que estão conosco</h2>

          <p className={styles.partnersDescription} style={{ animationDelay: ".8s" }}>
            Todo o trabalho desenvolvido pelo projeto Configurando Destinos, conta com a
            colaboração de um corpo de voluntariádos formado por profissionais e
            empresas de diversas áreas.
          </p>

          <div className={styles.cards} style={{ animationDelay: "1.2s" }}>
            <div className={`${styles.card} ${styles.CTMuayThai}`}>
              <img src="/images/logos/IMG-logo-transparente.png" />
              <h4>C.T Muay Thai Girls</h4>
              <p>
                Um Centro de Treinamento exclusivamente para mulheres.
              </p>
            </div>

            <div className={`${styles.card} ${styles.jsWebDeveloper}`}>
              <img src="/images/logos/js-web-logo.svg" />
              <h4>Desenvolvedor Web</h4>
              <a href="https://jswebdeveloper.vercel.app/">Visitar o site <FaArrowAltCircleRight /></a>
            </div>

            {/* <div className={styles.card}>
              <img src="/images/logos/amazon.svg" />
              <h4>Google Services</h4>
              <p>
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
            </div> */}

          </div>
        </div>
      </section>

      <section className={styles.disclaimer} id="disclaimer">
        <div className={`box ${styles.disclaimerBox}`}>
          <h2>CONFIGURANDO DESTINOS</h2>
          <p>
            Soliedariedade não é dar o que sobra, é dar o que falta. Faça parte
            dessa luta que está mudando a vida de inumeras pessoas!!
          </p>
          <div className={styles.icon}><BsGearFill className="rotate-gear" /></div>
        </div>
      </section>

      <section className={styles.projectSection} id="projects">
        <div className="box">
          <h2 style={{ animationDelay: ".1s" }}>Nossos projetos</h2>
          <p className={styles.projectDescription} style={{ animationDelay: ".4s" }}>
            Atualmente contamos com dois projetos sociais, Muay Thai para
            crianças com fragilidade social e Muay Thai para mulheres que
            sofreram violência domestica.
          </p>

          <div className={styles.projects} style={{ animationDelay: ".7s" }}>
            <div className={styles.project}>
              <div style={{ backgroundColor: "#F2FAF7" }}>
                <img src="/images/kids.png" alt="" />
              </div>
              <h3>Muay Thai Infantil</h3>
              <p>Thaty Azevedo</p>
            </div>

            <div className={styles.project}>
              <div style={{ backgroundColor: "#F6F6FE" }}>
                <img src="/images/womans.png" alt="" />
              </div>
              <h3>Muay Thai Feminino</h3>
              <p>Thaty Azevedo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="donation">
        <div className={`box ${styles.donation}`}>
          <div className={`${styles.donationBox} ${styles.first}`} style={{ animationDelay: ".2s" }}>
            <span>
              Benefícios III
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
            </span>
            <strong>R$ 1.500,00 +</strong>

            <p>
              <FaCheckDouble className={styles.checked} /> Site profissional
              completo
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> Pacote com 3 vídeos
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> Pacote com seis
              imagens
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> Espaço em nosso
              Banner
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> 10% do valor
              convertido em publicidade
            </p>

            <button onClick={modalToggle}>Quero Doar</button>
          </div>

          <div className={`${styles.donationBox} ${styles.second}`} style={{ animationDelay: ".6s" }}>
            <span>
              Benefícios II
              <FaStar className={styles.star} />
              <FaStar className={styles.star} />
            </span>
            <strong>
              R$ 1.000,00 <FaPlus />
            </strong>

            <p>
              <FaCheckDouble className={styles.checked} /> Pacote com seis
              imagens
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> Espaço em nosso
              Banner
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> 6% do valor
              convertido em publicidade
            </p>

            <button onClick={modalToggle}>Quero Doar</button>
          </div>

          <div className={`${styles.donationBox} ${styles.third}`} style={{ animationDelay: ".9s" }}>
            <span>
              Benefícios I
              <FaStar className={styles.star} />
            </span>
            <strong>
              R$ 500,00 <FaPlus />
            </strong>

            <p>
              <FaCheckDouble className={styles.checked} /> Espaço em nosso
              Banner
            </p>
            <p>
              <FaCheckDouble className={styles.checked} /> 3% do valor
              convertido em publicidade
            </p>

            <button onClick={modalToggle}>Quero Doar</button>
          </div>
        </div>
      </section>

      <section className={styles.teamSection} id="team">
        <div className={`box ${styles.team}`}>
          <span>Acreditamos na construção uns dos outros e por isso</span>
          <h2>trabalhamos com alguns parceiros incríveis</h2>
          <p>
            Conheça nossos parceiros e contate-os caso precise de seus serviços.
          </p>

          <div className="team">
            <Swiper
              modules={[A11y, Autoplay, Navigation]}
              spaceBetween={40}
              slidesPerView={partnersPerView}
              autoplay={{
                delay: 5000,
              }}
              navigation
              loop={true}
              speed={1800}
              className={styles.swiper}
            >
              <SwiperSlide>
                <div className={styles.person}>
                  <img src="http://github.com/jonatafsa.png" alt="" />
                  <div className={styles.details}>
                    <p>
                      Sou freelancer, trabalho construindo projetos completos
                      voltados para a web, como por exemplo - sites, aplicações e sistemas.
                    </p>
                    <span>Jonata Santos</span>
                    <strong>Desenvolvedor Web, Programador</strong>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.person}>
                  <img src="/images/person02.png" alt="" />
                  <div className={styles.details}>
                    <p>
                      26 anos de idade Atleta Bicampeã internacional,
                      Campeã paulista na categoria 59kg 10 lutas 8
                      vitórias.
                    </p>
                    <span>Prof: Thaty Azevedo</span>
                    <strong>Atleta e Professora de Muay Thai</strong>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.person}>
                  <img src="/images/person03.png" alt="" />
                  <div className={styles.details}>
                    <p>
                      Formado no Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
                      com 29 certificações complementares.
                    </p>
                    <span>Nicolas Max</span>
                    <strong>Analista de Sistemas</strong>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={styles.shapeQuestions}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className={styles.questionsSection}>
        <div className="box">
          <div className={styles.questions}>
            <div className={styles.question}>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Quem pode fazer parte do projeto ?
              </h4>
              <p>
                Crianças que se encontram em pobreza, que não tem oportunidade
                de praticar um esporte e mulheres sem condições financeiras que
                sofreram violência domestica.
              </p>
            </div>

            <div className={styles.question}>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Quais áreas o Muay Thai pode trazer mudança na vida dos alunos
                sociais ?
              </h4>
              <p>
                Entre todos os benefícios que o Muay Thai traz, jugamos
                importante o fato dele trazer desenvolvimento cognitivo,
                concentração, equilibrio físico e mental.
              </p>
            </div>

            <div className={styles.question}>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Por que esse projeto é tão importante ?
              </h4>
              <p>
                O projeto Configurando Destinos veio para transformar vidas com
                esporte, trazendo através do Muay Thai disciplina, foco,
                determinação e respeito. Esses princípios podem ser levado para
                fora dos tatames construindo uma sociedade melhor.
              </p>
            </div>

            <div className={styles.question}>
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Até que idade posso participar do projeto ?
              </h4>
              <p>
                Meninos a partir dos 5 até os 12 anos de idade e meninas a
                partir dos 5 anos de idade e mulheres de todas as idades.
              </p>
            </div>
          </div>

          <div className="contact"></div>
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className="box">
          <div className={styles.contact}>
            <h2>Tem alguma dúvida? entre em contato conosco!</h2>
            <p>Não hesite em nos contatar, sera sempre um prazer atende-lo!!</p>
            <a href="https://api.whatsapp.com/send?phone=5561998507580" >
              <button>Contate nos</button>
            </a>
          </div>
        </div>

        <div className={styles.shapeDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </section>

      <footer>
        <div className="box">
          <div className="logo">
            <img src="/images/logo-dark.png" alt="" />
          </div>

          <div className="contact">
            <h2>Entre em contato</h2>

            <p><FaBuilding /> CT. Muay Thai Girls</p>
            <p><FaHome /> Rua boa vista, N 180, Bairro Formosinha</p>
            <p><FaPhoneAlt /> (61) 9 9850-7580</p>
            <p><IoIosMail /> tatielenazevedo21@gmail.com</p>
          </div>

          <div className="social-media">
            <h2>Siga-nos nas redes sociais</h2>
            <a href="https://www.facebook.com/profile.php?id=100078169107827" >
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com/c.t._muaythaigirls?igshid=YmMyMTA2M2Y=" >
              <RiInstagramFill className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@ctmuaythaigirls?_t=8X5M0muK10Y&_r=1" >
              <FaVideo className="social-icon" />
            </a>
          </div>
        </div>
      </footer>

      <div className="end">
        <p>Configurando destinos © {new Date().getFullYear()} Todos os direitos reservados | Desenvolvido por <a href="https://jswebdeveloper.vercel.app/">Jonata Santos</a></p>
      </div>

      <div className="modal">
        <div className="modal-overlay" onClick={modalToggle}></div>
        <div className="slider-wrap">
          <div className={styles.donationOptions}>
            <div className={styles.qr}>
              <img src="/images/qrCode.jpg" alt="" />
            </div>

            <div className={styles.donationContent}>
              <p>Use o QRCode {toggleTextofDonation()} para doar, <br /> ou o pix copia e cola abaixo</p>

              <div className={styles.pixCopyPast}>
                <input type="text" readOnly defaultValue="00020126360014BR.GOV.BCB.PIX0114418808590001105204000053039865802BR5925STUDIO THATY AZEVEDO MUAY6009SAO PAULO622605223y92BUL0t3t1i8TuAPRM4r63040053" id="copyInput" />
                <span className="copy-text">Pix Copiado</span>
                <div className={styles.copyIcon} onClick={copyText} id="copyIcon" >
                  <MdOutlineContentCopy />
                </div>
              </div>

              <span>
                Atenção essas são as unicas formas que atualmente estamos aceitando doações,
                qualquer outra forma de doação que encontre por ai, não é de nossa autoria.
              </span>
              <p>
              </p>
            </div>

            <FaWindowClose className={styles.closeBtn} onClick={modalToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;