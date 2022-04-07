<template>
  <div>
    <section id="topbar" class="d-flex align-items-center">
      <div
        class="container d-flex justify-content-center justify-content-md-between"
      >
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center"
            ><a href="mailto:atendimento@1oficiosinop.com.br"
              >atendimento@1oficiosinop.com.br</a
            ></i
          >
          <i class="bi bi-phone d-flex align-items-center ms-4"
            ><span>+55 (66) 3531-2501 </span></i
          >
          <i class="bi bi-phone d-flex align-items-center ms-4"
            ><span>+55 (66) 9930-9137 </span></i
          >
        </div>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <!-- <a href="#" class="twitter"><i class="bi bi-twitter"></i></a> -->
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <!-- <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a> -->
      </div>
    </section>

    <!-- ======= Header ======= -->
    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <div class="logo">
          <h1 class="text-light">
            <a href="index.html">1º Ofício de Sinop</a>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li class="dropdown">
              <a href="#"
                ><span>Serviços</span> <i class="bi bi-chevron-down"></i
              ></a>
              <ul>
                <li class="dropdown">
                  <a href="#"
                    ><span>Registro de Imóveis</span>
                    <i class="bi bi-chevron-right"></i
                  ></a>
                  <ul>
                    <li><a href="#">Solicitar Certidão</a></li>
                    <li><a href="#">Requerimentos</a></li>
                    <li><a href="#">Check List</a></li>
                  </ul>
                </li>

                <li class="dropdown">
                  <a href="#"
                    ><span>Registro de Títulos e Documentos</span>
                    <i class="bi bi-chevron-right"></i
                  ></a>
                  <ul>
                    <li><a href="#">Solicitar Certidão</a></li>
                    <li><a href="#">Requerimentos</a></li>
                    <li><a href="#">Check List</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <!-- <li><a href="testimonials.html">Testimonials</a></li> -->
            <li><a href="pricing.html">Tabela de Custas e Emolumentos</a></li>
            <!-- <li><a href="portfolio.html">Portfolio</a></li> -->
            <li><a href="blog.html">LGPD</a></li>
            <li class="dropdown">
              <a href="#"
                ><span>Drop Down</span> <i class="bi bi-chevron-down"></i
              ></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown">
                  <a href="#"
                    ><span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i
                  ></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contato</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div
        id="heroCarousel"
        data-bs-interval="5000"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" role="listbox">
          <!-- Slide 1 -->
          <div
            class="carousel-item active"
            style="background-image: url(../assets/img/slide/slide-1.jpg)"
          >
            <div class="carousel-container">
              <div class="carousel-content animate__animated animate__fadeInUp">
                <h2>
                  Cartório de
                  <span>Registro de Imóveis e Títulos e Documentos.</span>
                </h2>
                <p>
                  O Cartório de Registro de Imóveis, é o local onde as pessoas
                  fazem o registro de seus terrenos, casas, apartamentos.
                </p>
                <div class="text-center">
                  <a href="" class="btn-get-started">Continue lendo...</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div
            class="carousel-item"
            style="background-image: url(assets/img/slide/slide-2.jpg)"
          >
            <div class="carousel-container">
              <div class="carousel-content animate__animated animate__fadeInUp">
                <h2>Lorem Ipsum Dolor</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div class="text-center">
                  <a href="" class="btn-get-started">Continue lendo...</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div
            class="carousel-item"
            style="background-image: url(assets/img/slide/slide-3.jpg)"
          >
            <div class="carousel-container">
              <div class="carousel-content animate__animated animate__fadeInUp">
                <h2>Sequi ea ut et est quaerat</h2>
                <p>
                  Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut
                  et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                  mollitia ut. Similique ea voluptatem. Esse doloremque
                  accusamus repellendus deleniti vel. Minus et tempore modi
                  architecto.
                </p>
                <div class="text-center">
                  <a href="" class="btn-get-started">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bx bx-left-arrow"
            aria-hidden="true"
          ></span>
        </a>

        <a
          class="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bx bx-right-arrow"
            aria-hidden="true"
          ></span>
        </a>

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
      </div>
    </section>
    <!-- End Hero -->

    <main id="main">
      <!-- ======= Cta Section ======= -->
      <section id="cta" class="cta">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-left">
              <h3>
                Todos os dias, milhares de pessoas fazem negociações
                <span>200 websites</span> this year!
              </h3>
              <p>
                Pela Constituição Federal de 1988, o termo genérico “cartório”
                foi substituído pela expressão Serviço Notarial e de Registro,
                conforme consta do artigo 236. Em 18 de novembro de 1994,
                através da Lei Federal 8.935, ficou consagrada a utilização do
                termo Serviço Notarial e de Registro para identificar os antigos
                “cartórios”. Da mesma forma, o titular de um Serviço Notarial ou
                de Registro, passou a ser reconhecido como um profissional do
                Direito, que atua como Delegado do Poder público, mantendo-se
                inalterada a fé pública que sempre o caracterizou. Para ser
                Delegado de um Serviço Notarial ou de Registro, é preciso ser
                Bacharel em Direito e aprovado no concorridíssimo concurso
                público de provas e títulos que é realizado pelo Tribunal de
                Justiça, conforme prescreve o Código de Organização e Divisão
                Judiciária de cada estado da federação e legislação aplicável.
                Para que se possa melhor compreender essa profunda alteração de
                nomenclatura – que, entretanto, em nada modificou a parte
                operacional dos serviços prestados, verifique o artigo 236 da
                Constituição Fedeeral, bem como a Lei 8.935/1994. Assim, o termo
                “cartório”, na atualidade, soa com tom pejorativo, e o ideal é o
                emprego do termo Serviço Notarial ou de registro, quando se
                referir aos Tabelionatos de Notas, Registro Civil de Pessoas
                Naturais, Protesto de títulos, registro de Imóveis e Registro de
                Títulos e Documentos e de Pessoas Jurídicas.
              </p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="#">Request a quote</a>
            </div>
          </div>
        </div>
      </section>
      <!-- End Cta Section -->

      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="icon-box" data-aos="fade-up">
                <div class="icon"><i class="bi bi-briefcase"></i></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="bi bi-card-checklist"></i></div>
                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="bi bi-bar-chart"></i></div>
                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                <p class="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="bi bi-binoculars"></i></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="bi bi-brightness-high"></i></div>
                <h4 class="title"><a href="">Nemo Enim</a></h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services Section -->

      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="row" data-aos="fade-up">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div class="row portfolio-container" data-aos="fade-up">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Web 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Card 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Web 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="App 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Card 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Card 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox preview-link"
                  title="Web 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  class="details-link"
                  title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Portfolio Section -->

      <!-- ======= Our Clients Section ======= -->
      <section id="clients" class="clients">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Our <strong>Clients</strong></h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row no-gutters clients-wrap clearfix" data-aos="fade-up">
            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-2.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-3.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-4.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-5.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-6.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-7.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img
                  src="../../assets/img/clients/client-8.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Our Clients Section -->
    </main>
    <!-- End #main -->

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Nosso Endereço:</h3>
              <p>
                Rua das Nogueiras,1108, Setor Comercial <br />
                Sinop, Mato Grosso<br />
                Brasil <br /><br />
                <strong>Telefone:</strong> +55 (66) 3531 2501<br />
                <strong>Email:</strong> atendimento@1oficiosinop.com.br<br />
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Acompanhe nossos recados.</h4>
              <p>
                Fique por dentro dos nossos recados, sempre que surgir algum
                aviso, enviaremos no seu e-mail.
              </p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Inscreva-se"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            &copy; Copyright
            <strong
              ><span
                >1º Ofício de Registro de Imóveis, Títulos e Documentos</span
              ></strong
            >. Todos os Direitos Reservados - {{ new Date().getFullYear() }}.
          </div>
          <!-- <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> -->
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
          <a
            href="https://www.facebook.com/1oficiosinop/"
            target="_blank"
            class="facebook"
            ><i class="bx bxl-facebook"></i
          ></a>
          <a
            href="https://www.instagram.com/1oficiosinop/"
            target="_blank"
            class="instagram"
            ><i class="bx bxl-instagram"></i
          ></a>
          <!-- <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> -->
          <!-- <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> -->
        </div>
      </div>
    </footer>
    <!-- End Footer -->
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "SiteLayout",
};
</script>

<style></style>
