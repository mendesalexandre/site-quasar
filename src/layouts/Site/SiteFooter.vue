<template>
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
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

<style></style>
