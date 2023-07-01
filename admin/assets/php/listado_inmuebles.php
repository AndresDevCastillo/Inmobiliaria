<main id="main" class="main">
        <div class="row">
            <div class="col-lg-4">
                <div class="pagetitle">
                    <h1 class="bg-inmo-black fw-800">lista de inmuebles</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item bg-inmo-black"><a class="bg-inmo-black" href="index.php">Inicio</a>
                            </li>
                            <li class="breadcrumb-item bg-inmo-black"> Inmuebles</li>
                            <li class="breadcrumb-item active bg-inmo-black">Listado de inmuebles</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <!-- Accordion without outline borders -->
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button id="btfiltro" class="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        <h3>
                                            <div class="icon" style="height: 1px;">
                                                <i class="bx bx-search-alt"> Filtros</i>
                                                <div class="label"></div>
                                            </div>
                                        </h3>
                                    </button>
                                </h2>
    
                            </div>
                        </div><!-- End Accordion without outline borders -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2">
                <div id="flush-collapseOne" class="accordion-collapse collapse col-lg-12" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estado">
                        <option selected>Baños</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3 o mas</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-2">
                <div id="flush-collapseOne" class="accordion-collapse collapse col-lg-12" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estado">
                        <option selected>Habitaciones</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4 o mas</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-2">
                <div id="flush-collapseOne" class="accordion-collapse collapse col-lg-12" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estado">
                        <option selected>Garaje</option>
                        <option value="1">1 vehiculos</option>
                        <option value="2">2 vehiculos</option>
                        <option value="3">3 vehiculos o mas</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-2">
                <div id="flush-collapseOne" class="accordion-collapse collapse col-lg-12" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estado">
                        <option selected>Estrato</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-2">
                <div id="flush-collapseOne" class="accordion-collapse collapse col-lg-12" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estado">
                        <option selected>Pisos</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3 o mas</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-2">
                <div id="flush-collapseOne" class="accordion-collapse collapse col-lg-12" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <button type="button" class="btn btn-outline btn-sm" id="filtro-boton">filtrar</button>
                </div>
            </div>
        </div>
        <section class="section dashboard" id="espacios">
            <div class="row">
                <!-- Left side columns -->
                <div class="col-lg-12">
                    <div class="row">
                        <!-- Top Selling -->
                        <div class="col-12">
                            <div class="card top-selling overflow-auto">
                                <div class="card-body pb-0">
                                    <h5 class="card-title">Lista de inmuebles</h5>
                                                                      <div class="row">
                                        <div class="col-lg-10"><input class="form-control" id="myInput" type="text" placeholder="Search.."></div>
                                        <button type="button" id="busqueda-boton" class="btn col-lg-2"><i class="bi bi-search"></i></button>
                                    </div>
                                <br>
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Foto</th>
                                                <th scope="col">Inmueble</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Datos</th>
                                                <th scope="col"></th>
                                            </tr>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <label scope="row" class="checkbox-inline">
                                                        <input type="checkbox" id="checkboxEnLinea1" value="opcion_1">
                                                    </label>
                                                </th>
                                                <th scope="row"><a href="#"><img src="assets/img/news-4.jpg" alt=""></a>
                                                </th>
                                                <td><a href="#" class="text" color="4154f1">
                                                        SE VENDE CASA EN LA RISUEÑA, SABANAL
                                                    </a>
                                                    <br>
                                                    <div class="icon">
                                                        <i class="bi bi-buildings"></i><span> Apartamento | en arriendo</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="bi bi-geo-alt"></i><span> Colombia | Cordoba | Monteria</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <i class="bi bi-coin"></i><span> Precio: $100.000.000</span>
                                                    <br>
                                                    <i class="bi bi-star-fill"></i><span> Calificacion: 6/10</span>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Estado</option>
                                                        <option value="1">Activo</option>
                                                        <option value="2">Inactivo</option>
                                                    </select>
                                                    <br>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Disponible</option>
                                                        <option value="1">Venta</option>
                                                        <option value="2">Alquiler</option>
                                                    </select>
                                                </td>
                                                <td class="fw-bold">
                                                    <p>
                                                        Codigo: 0000000
                                                    </p>
                                                    <p>
                                                        <select class="form-select form-select-sm"
                                                            aria-label=".form-select-sm example" id="estado">
                                                            <option selected>Etiqueta</option>
                                                            <option value="1">Nuevo</option>
                                                            <option value="2">Usada</option>
                                                        </select>
                                                    </p>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Opciones</option>
                                                        <option value="1">Eliminar</option>
                                                        <option value="2">Editar</option>
                                                    </select>
                                                    <br>
                                                    Comparte en:
                                                    <div class="icon btn-primary">
                                                        <a href="#" class="whatsapp"><i class="bi bi-whatsapp blue-logo"></i></a>
                                                        <a href="#" class="google"><i class="bi bi-google blue-logo"></i></a>
                                                        <a href="#" class="twitter"><i class="bi bi-twitter blue-logo"></i></a>
                                                        <a href="#" class="facebook"><i class="bi bi-facebook blue-logo"></i></a>
                                                        <a href="#" class="instagram"><i class="bi bi-instagram blue-logo"></i></a>
                                                        <a href="#" class="linkedin"><i class="bi bi-linkedin blue-logo"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                          <tr>
                                                <th>
                                                    <label scope="row" class="checkbox-inline">
                                                        <input type="checkbox" id="checkboxEnLinea1" value="opcion_1">
                                                    </label>
                                                </th>
                                                <th scope="row"><a href="#"><img src="assets/img/news-4.jpg" alt=""></a>
                                                </th>
                                                <td><a href="#" class="text" color="4154f1">
                                                        SE VENDE CASA EN LA RISUEÑA, SABANAL
                                                    </a>
                                                    <br>
                                                    <div class="icon">
                                                        <i class="bi bi-buildings"></i><span> Apartamento | en arriendo</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="bi bi-geo-alt"></i><span> Colombia | Cordoba | Monteria</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <i class="bi bi-coin"></i><span> Precio: $100.000.000</span>
                                                    <br>
                                                    <i class="bi bi-star-fill"></i><span> Calificacion: 6/10</span>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Estado</option>
                                                        <option value="1">Activo</option>
                                                        <option value="2">Inactivo</option>
                                                    </select>
                                                    <br>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Disponible</option>
                                                        <option value="1">Venta</option>
                                                        <option value="2">Alquiler</option>
                                                    </select>
                                                </td>
                                                <td class="fw-bold">
                                                    <p>
                                                        Codigo: 0000000
                                                    </p>
                                                    <p>
                                                        <select class="form-select form-select-sm"
                                                            aria-label=".form-select-sm example" id="estado">
                                                            <option selected>Etiqueta</option>
                                                            <option value="1">Nuevo</option>
                                                            <option value="2">Usada</option>
                                                        </select>
                                                    </p>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Opciones</option>
                                                        <option value="1">Eliminar</option>
                                                        <option value="2">Editar</option>
                                                    </select>
                                                    <br>
                                                    Comparte en:
                                                    <div class="icon btn-primary">
                                                        <a href="#" class="whatsapp"><i class="bi bi-whatsapp blue-logo"></i></a>
                                                        <a href="#" class="google"><i class="bi bi-google blue-logo"></i></a>
                                                        <a href="#" class="twitter"><i class="bi bi-twitter blue-logo"></i></a>
                                                        <a href="#" class="facebook"><i class="bi bi-facebook blue-logo"></i></a>
                                                        <a href="#" class="instagram"><i class="bi bi-instagram blue-logo"></i></a>
                                                        <a href="#" class="linkedin"><i class="bi bi-linkedin blue-logo"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                          <tr>
                                                <th>
                                                    <label scope="row" class="checkbox-inline">
                                                        <input type="checkbox" id="checkboxEnLinea1" value="opcion_1">
                                                    </label>
                                                </th>
                                                <th scope="row"><a href="#"><img src="assets/img/news-4.jpg" alt=""></a>
                                                </th>
                                                <td><a href="#" class="text" color="4154f1">
                                                        SE VENDE CASA EN LA RISUEÑA, SABANAL
                                                    </a>
                                                    <br>
                                                    <div class="icon">
                                                        <i class="bi bi-buildings"></i><span> Apartamento | en arriendo</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="bi bi-geo-alt"></i><span> Colombia | Cordoba | Monteria</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <i class="bi bi-coin"></i><span> Precio: $100.000.000</span>
                                                    <br>
                                                    <i class="bi bi-star-fill"></i><span> Calificacion: 6/10</span>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Estado</option>
                                                        <option value="1">Activo</option>
                                                        <option value="2">Inactivo</option>
                                                    </select>
                                                    <br>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Disponible</option>
                                                        <option value="1">Venta</option>
                                                        <option value="2">Alquiler</option>
                                                    </select>
                                                </td>
                                                <td class="fw-bold">
                                                    <p>
                                                        Codigo: 0000000
                                                    </p>
                                                    <p>
                                                        <select class="form-select form-select-sm"
                                                            aria-label=".form-select-sm example" id="estado">
                                                            <option selected>Etiqueta</option>
                                                            <option value="1">Nuevo</option>
                                                            <option value="2">Usada</option>
                                                        </select>
                                                    </p>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Opciones</option>
                                                        <option value="1">Eliminar</option>
                                                        <option value="2">Editar</option>
                                                    </select>
                                                    <br>
                                                    Comparte en:
                                                    <div class="icon btn-primary">
                                                        <a href="#" class="whatsapp"><i class="bi bi-whatsapp blue-logo"></i></a>
                                                        <a href="#" class="google"><i class="bi bi-google blue-logo"></i></a>
                                                        <a href="#" class="twitter"><i class="bi bi-twitter blue-logo"></i></a>
                                                        <a href="#" class="facebook"><i class="bi bi-facebook blue-logo"></i></a>
                                                        <a href="#" class="instagram"><i class="bi bi-instagram blue-logo"></i></a>
                                                        <a href="#" class="linkedin"><i class="bi bi-linkedin blue-logo"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                          <tr>
                                                <th>
                                                    <label scope="row" class="checkbox-inline">
                                                        <input type="checkbox" id="checkboxEnLinea1" value="opcion_1">
                                                    </label>
                                                </th>
                                                <th scope="row"><a href="#"><img src="assets/img/news-4.jpg" alt=""></a>
                                                </th>
                                                <td><a href="#" class="text" color="4154f1">
                                                        SE VENDE CASA EN LA RISUEÑA, SABANAL
                                                    </a>
                                                    <br>
                                                    <div class="icon">
                                                        <i class="bi bi-buildings"></i><span> Apartamento | en arriendo</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="bi bi-geo-alt"></i><span> Colombia | Cordoba | Monteria</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <i class="bi bi-coin"></i><span> Precio: $100.000.000</span>
                                                    <br>
                                                    <i class="bi bi-star-fill"></i><span> Calificacion: 6/10</span>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Estado</option>
                                                        <option value="1">Activo</option>
                                                        <option value="2">Inactivo</option>
                                                    </select>
                                                    <br>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Disponible</option>
                                                        <option value="1">Venta</option>
                                                        <option value="2">Alquiler</option>
                                                    </select>
                                                </td>
                                                <td class="fw-bold">
                                                    <p>
                                                        Codigo: 0000000
                                                    </p>
                                                    <p>
                                                        <select class="form-select form-select-sm"
                                                            aria-label=".form-select-sm example" id="estado">
                                                            <option selected>Etiqueta</option>
                                                            <option value="1">Nuevo</option>
                                                            <option value="2">Usada</option>
                                                        </select>
                                                    </p>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Opciones</option>
                                                        <option value="1">Eliminar</option>
                                                        <option value="2">Editar</option>
                                                    </select>
                                                    <br>
                                                    Comparte en:
                                                    <div class="icon btn-primary">
                                                        <a href="#" class="whatsapp"><i class="bi bi-whatsapp blue-logo"></i></a>
                                                        <a href="#" class="google"><i class="bi bi-google blue-logo"></i></a>
                                                        <a href="#" class="twitter"><i class="bi bi-twitter blue-logo"></i></a>
                                                        <a href="#" class="facebook"><i class="bi bi-facebook blue-logo"></i></a>
                                                        <a href="#" class="instagram"><i class="bi bi-instagram blue-logo"></i></a>
                                                        <a href="#" class="linkedin"><i class="bi bi-linkedin blue-logo"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                          <tr>
                                                <th>
                                                    <label scope="row" class="checkbox-inline">
                                                        <input type="checkbox" id="checkboxEnLinea1" value="opcion_1">
                                                    </label>
                                                </th>
                                                <th scope="row"><a href="#"><img src="assets/img/news-4.jpg" alt=""></a>
                                                </th>
                                                <td><a href="#" class="text" color="4154f1">
                                                        SE VENDE CASA EN LA RISUEÑA, SABANAL
                                                    </a>
                                                    <br>
                                                    <div class="icon">
                                                        <i class="bi bi-buildings"></i><span> Apartamento | en arriendo</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="bi bi-geo-alt"></i><span> Colombia | Cordoba | Monteria</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <i class="bi bi-coin"></i><span> Precio: $100.000.000</span>
                                                    <br>
                                                    <i class="bi bi-star-fill"></i><span> Calificacion: 6/10</span>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Estado</option>
                                                        <option value="1">Activo</option>
                                                        <option value="2">Inactivo</option>
                                                    </select>
                                                    <br>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Disponible</option>
                                                        <option value="1">Venta</option>
                                                        <option value="2">Alquiler</option>
                                                    </select>
                                                </td>
                                                <td class="fw-bold">
                                                    <p>
                                                        Codigo: 0000000
                                                    </p>
                                                    <p>
                                                        <select class="form-select form-select-sm"
                                                            aria-label=".form-select-sm example" id="estado">
                                                            <option selected>Etiqueta</option>
                                                            <option value="1">Nuevo</option>
                                                            <option value="2">Usada</option>
                                                        </select>
                                                    </p>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Opciones</option>
                                                        <option value="1">Eliminar</option>
                                                        <option value="2">Editar</option>
                                                    </select>
                                                    <br>
                                                    Comparte en:
                                                    <div class="icon btn-primary">
                                                        <a href="#" class="whatsapp"><i class="bi bi-whatsapp blue-logo"></i></a>
                                                        <a href="#" class="google"><i class="bi bi-google blue-logo"></i></a>
                                                        <a href="#" class="twitter"><i class="bi bi-twitter blue-logo"></i></a>
                                                        <a href="#" class="facebook"><i class="bi bi-facebook blue-logo"></i></a>
                                                        <a href="#" class="instagram"><i class="bi bi-instagram blue-logo"></i></a>
                                                        <a href="#" class="linkedin"><i class="bi bi-linkedin blue-logo"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                          <tr>
                                                <th>
                                                    <label scope="row" class="checkbox-inline">
                                                        <input type="checkbox" id="checkboxEnLinea1" value="opcion_1">
                                                    </label>
                                                </th>
                                                <th scope="row"><a href="#"><img src="assets/img/news-4.jpg" alt=""></a>
                                                </th>
                                                <td><a href="#" class="text" color="4154f1">
                                                        SE VENDE CASA EN LA RISUEÑA, SABANAL
                                                    </a>
                                                    <br>
                                                    <div class="icon">
                                                        <i class="bi bi-buildings"></i><span> Apartamento | en arriendo</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <div class="icon">
                                                        <i class="bi bi-geo-alt"></i><span> Colombia | Cordoba | Monteria</span>
                                                        <div class="label"></div>
                                                    </div>
                                                    <i class="bi bi-coin"></i><span> Precio: $100.000.000</span>
                                                    <br>
                                                    <i class="bi bi-star-fill"></i><span> Calificacion: 6/10</span>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Estado</option>
                                                        <option value="1">Activo</option>
                                                        <option value="2">Inactivo</option>
                                                    </select>
                                                    <br>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Disponible</option>
                                                        <option value="1">Venta</option>
                                                        <option value="2">Alquiler</option>
                                                    </select>
                                                </td>
                                                <td class="fw-bold">
                                                    <p>
                                                        Codigo: 0000000
                                                    </p>
                                                    <p>
                                                        <select class="form-select form-select-sm"
                                                            aria-label=".form-select-sm example" id="estado">
                                                            <option selected>Etiqueta</option>
                                                            <option value="1">Nuevo</option>
                                                            <option value="2">Usada</option>
                                                        </select>
                                                    </p>
                                                </td>
                                                <td>
                                                    <select class="form-select form-select-sm"
                                                        aria-label=".form-select-sm example" id="estado">
                                                        <option selected>Opciones</option>
                                                        <option value="1">Eliminar</option>
                                                        <option value="2">Editar</option>
                                                    </select>
                                                    <br>
                                                    Comparte en:
                                                    <div class="icon btn-primary">
                                                        <a href="#" class="whatsapp"><i class="bi bi-whatsapp blue-logo"></i></a>
                                                        <a href="#" class="google"><i class="bi bi-google blue-logo"></i></a>
                                                        <a href="#" class="twitter"><i class="bi bi-twitter blue-logo"></i></a>
                                                        <a href="#" class="facebook"><i class="bi bi-facebook blue-logo"></i></a>
                                                        <a href="#" class="instagram"><i class="bi bi-instagram blue-logo"></i></a>
                                                        <a href="#" class="linkedin"><i class="bi bi-linkedin blue-logo"></i></a>
                                                    </div>
                                                </td>
                                            </tr>


                                            
    
                                        </tbody>
                                        </thead>
                                    </table>
    
                                </div>
    
                            </div>
                        </div><!-- End Top Selling -->
    
                    </div>
                </div><!-- End Left side columns -->
            </div>
        </section>
    
    </main>