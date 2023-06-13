<!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="index.php">
          <i class="bi bi-grid"></i>
          <span>Inicio</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#inmueble-nav" data-bs-toggle="collapse" href="#">
            <i class="bi bi-house-fill"></i>
            <span>Inmuebles</span>
            <i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="inmueble-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="lista_inmueble.php">
              <i class="bi bi-circle"></i><span>Lista de inmuebles</span>
            </a>
          </li>
          <li>
            <a href="../../add_inmueble.php">
              <i class="bi bi-circle"></i><span>Crear Inmueble</span>
            </a>
          </li>
        </ul>
      </li><!-- End Components Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#Clentes-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-person-fill-gear"></i><span>Clientes</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="Clentes-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="directorioclientes.php">
              <i class="bi bi-circle"></i><span>Directorio de Clientes</span>
            </a>
          </li>
          <li>
            <a href="VistaFormularioCliente.php">
              <i class="bi bi-circle"></i><span>Agregar Cliente</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bi bi-circle"></i><span>Editar Clientes</span>
            </a>
          </li>
        </ul>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#reportes-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-layout-text-window-reverse"></i><span>Reportes</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="reportes-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="tables-general.html">
              <i class="bi bi-circle"></i><span>Reporte de Clientes</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i class="bi bi-circle"></i><span>Reporte de Inmuebles</span>
            </a>
          </li>
        </ul>
      </li><!-- End Tables Nav -->

      

      <li class="nav-heading">Paginas</li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="VistaMiCuenta.php">
          <i class="bi bi-person"></i>
          <span>Mi Cuenta</span>
        </a>
      </li><!-- End Profile Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-faq.html">
          <i class="bi bi-question-circle"></i>
          <span>Soporte</span>
        </a>
      </li><!-- End F.A.Q Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-contact.html">
          <i class="bi bi-envelope"></i>
          <span>Contacto</span>
        </a>
      </li><!-- End Contact Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-register.html">
          <i class="bi bi-card-list"></i>
          <span>Usuarios</span>
        </a>
      </li><!-- End Register Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-login.html">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Cerrar Sesion</span>
        </a>
      </li><!-- End Login Page Nav -->

    </ul>

  </aside><!-- End Sidebar-->